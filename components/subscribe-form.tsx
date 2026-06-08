"use client";

import { useActionState } from "react";
import { subscribeEmail, type SubscribeState } from "@/app/actions/subscribe";

export function SubscribeForm() {
  const [state, formAction, pending] = useActionState<SubscribeState, FormData>(
    subscribeEmail,
    null,
  );

  if (state?.status === "success") {
    return (
      <p
        role="status"
        aria-live="polite"
        className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone"
      >
        ✓ {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="w-full max-w-[400px]">
      <label htmlFor="subscribe-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center overflow-hidden rounded-lg border border-line bg-bone/[0.04] transition-colors focus-within:border-accent/40">
        <input
          id="subscribe-email"
          type="email"
          name="email"
          required
          placeholder="Your email"
          className="flex-1 bg-transparent px-4 py-3.5 text-sm text-bone placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
        />
        <button
          type="submit"
          disabled={pending}
          aria-label="Subscribe"
          className="flex h-full shrink-0 cursor-pointer items-center justify-center border-none bg-transparent px-4 text-muted transition-colors hover:text-accent disabled:opacity-40"
        >
          {pending ? (
            <span className="h-3.5 w-3.5 animate-spin rounded-full border border-muted border-t-bone" />
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>
      {state?.status === "error" && (
        <p
          role="alert"
          aria-live="assertive"
          className="mt-2 text-center font-mono text-[10px] text-red-400"
        >
          <span className="font-medium">Error: </span>
          {state.message}
        </p>
      )}
    </form>
  );
}
