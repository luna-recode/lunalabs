type RateLimitOptions = {
  limit: number;
  windowMs: number;
};

const stores = new Map<string, Map<string, number[]>>();

function getStore(name: string): Map<string, number[]> {
  let store = stores.get(name);
  if (!store) {
    store = new Map();
    stores.set(name, store);
  }
  return store;
}

/**
 * In-process rate limiter. Resets on serverless cold starts — replace with
 * @upstash/ratelimit when UPSTASH_REDIS_REST_URL / _TOKEN are provisioned.
 */
export function isRateLimited(
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
