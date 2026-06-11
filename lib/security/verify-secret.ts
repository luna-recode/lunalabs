import { timingSafeEqual } from "crypto";

/** Timing-safe secret comparison for webhooks and protected routes. */
export function verifySecret(provided: string | null | undefined, expected: string): boolean {
  if (!expected || provided == null) return false;
  const providedBuf = Buffer.from(provided);
  const expectedBuf = Buffer.from(expected);
  return (
    providedBuf.length === expectedBuf.length &&
    timingSafeEqual(providedBuf, expectedBuf)
  );
}
