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
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone">
        ✓ {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="w-full max-w-[400px]">
      <div className="flex items-center overflow-hidden rounded-lg border border-line bg-bone/[0.04] transition-colors focus-within:border-bone/40">
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          className="flex-1 bg-transparent px-4 py-3.5 text-sm text-bone placeholder:text-muted focus:outline-none"
        />
        <button
          type="submit"
          disabled={pending}
          aria-label="Subscribe"
          className="flex h-full shrink-0 cursor-pointer items-center justify-center border-none bg-transparent px-4 text-muted transition-colors hover:text-bone disabled:opacity-40"
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
        <p className="mt-2 text-center font-mono text-[10px] text-red-400">{state.message}</p>
      )}
    </form>
  );
}
