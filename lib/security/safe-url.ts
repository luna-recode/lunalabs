/** Allow only https URLs from CMS — blocks javascript:, data:, and phishing schemes. */
export function safeExternalUrl(url?: string | null): string | undefined {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return undefined;
    return parsed.href;
  } catch {
    return undefined;
  }
}

export function withSafeLiveUrl<T extends { liveUrl?: string }>(study: T): T {
  return { ...study, liveUrl: safeExternalUrl(study.liveUrl) };
}
