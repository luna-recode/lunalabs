import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type RateLimitOptions = {
  limit: number;
  windowMs: number;
};

// ─── In-process fallback ──────────────────────────────────────────────────────
// Used when Upstash isn't configured (local dev, previews without the env vars)
// or if a Redis call fails. Resets on cold starts and isn't shared across
// serverless instances, so it's best-effort only — Upstash is the real limiter.

const stores = new Map<string, Map<string, number[]>>();

function getStore(name: string): Map<string, number[]> {
  let store = stores.get(name);
  if (!store) {
    store = new Map();
    stores.set(name, store);
  }
  return store;
}

function isRateLimitedInProcess(
  storeName: string,
  key: string,
  { limit, windowMs }: RateLimitOptions,
): boolean {
  const store = getStore(storeName);
  const now = Date.now();
  const times = (store.get(key) ?? []).filter((t) => now - t < windowMs);
  if (times.length >= limit) {
    store.set(key, times);
    return true;
  }
  store.set(key, [...times, now]);
  return false;
}

// ─── Upstash (shared, durable) ────────────────────────────────────────────────

// The REST URL/token come under different names depending on how Upstash was
// provisioned: UPSTASH_REDIS_REST_* for a direct Upstash setup, or KV_REST_API_*
// when added through the Vercel Marketplace integration. Accept either.
function redisCredentials(): { url: string; token: string } | null {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  return url && token ? { url, token } : null;
}

let redis: Redis | undefined;
function getRedis(creds: { url: string; token: string }): Redis {
  if (!redis) {
    redis = new Redis({ url: creds.url, token: creds.token });
  }
  return redis;
}

// One Ratelimit instance per (store, limit, window). The sliding-window limit
// and window are baked in at construction, so we cache an instance per combo
// keyed below. Callers still pass limit/windowMs dynamically.
const limiters = new Map<string, Ratelimit>();

function getLimiter(
  storeName: string,
  { limit, windowMs }: RateLimitOptions,
  creds: { url: string; token: string },
): Ratelimit {
  const seconds = Math.max(1, Math.ceil(windowMs / 1000));
  const cacheKey = `${storeName}:${limit}:${seconds}`;
  let limiter = limiters.get(cacheKey);
  if (!limiter) {
    limiter = new Ratelimit({
      redis: getRedis(creds),
      limiter: Ratelimit.slidingWindow(limit, `${seconds} s`),
      prefix: `ratelimit:${storeName}`,
      analytics: false,
    });
    limiters.set(cacheKey, limiter);
  }
  return limiter;
}

/**
 * Returns true if `key` (e.g. an IP) has exceeded `limit` requests within
 * `windowMs` for the given `storeName`. Uses Upstash Redis when its REST
 * credentials are set — UPSTASH_REDIS_REST_URL/_TOKEN or the KV_REST_API_URL/
 * _TOKEN names the Vercel Marketplace integration uses — shared across all
 * serverless instances, and falls back to an in-process limiter otherwise or
 * if Redis is unreachable.
 */
export async function isRateLimited(
  storeName: string,
  key: string,
  options: RateLimitOptions,
): Promise<boolean> {
  const creds = redisCredentials();
  if (creds) {
    try {
      const { success } = await getLimiter(storeName, options, creds).limit(key);
      return !success;
    } catch (error) {
      console.error("Upstash rate limit failed, falling back in-process:", error);
    }
  }
  return isRateLimitedInProcess(storeName, key, options);
}
