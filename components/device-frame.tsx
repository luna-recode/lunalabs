import type { ReactNode } from "react";

export function BrowserChrome({ url }: { url?: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5">
      <span className="flex shrink-0 gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f0a9a2]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#efd29b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#abd6b2]" />
      </span>
      {url && (
        <span className="mx-auto min-w-0 max-w-[70%] truncate rounded-full border border-line bg-card px-3 py-0.5 font-mono text-[11px] text-muted">
          {url}
        </span>
      )}
      <span className="w-9 shrink-0" aria-hidden />
    </div>
  );
}

export function DeviceFrame({
  url,
  children,
  className = "",
}: {
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-line bg-card shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)] ${className}`}
    >
      <BrowserChrome url={url} />
      {children}
    </figure>
  );
}
