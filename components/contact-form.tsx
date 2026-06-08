"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const inputClass =
  "w-full rounded-lg border border-line bg-transparent px-4 py-3 text-sm text-bone placeholder:text-muted transition-colors focus:border-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

const labelClass = "mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted";

export function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    submitContact,
    null,
  );

  if (state?.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-lg border border-line bg-bone/[0.03] px-8 py-12 text-center"
      >
        <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
          Sent
        </span>
        <p className="font-serif text-[22px] font-medium leading-snug">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="normal-case">(required)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="normal-case">(required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            placeholder="jane@yourbrand.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className={inputClass} />
        </div>
        <div>
          <label htmlFor="brand" className={labelClass}>
            Brand / store <span className="normal-case">(required)</span>
          </label>
          <input
            id="brand"
            name="brand"
            type="text"
            required
            aria-required="true"
            placeholder="Your Brand Co."
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="followers" className={labelClass}>Instagram followers</label>
        <select id="followers" name="followers" className={`${inputClass} cursor-pointer`} defaultValue="">
          <option value="" disabled className="bg-ink">Select range</option>
          <option value="Under 5k" className="bg-ink">Under 5k</option>
          <option value="5k–25k" className="bg-ink">5k – 25k</option>
          <option value="25k–100k" className="bg-ink">25k – 100k</option>
          <option value="100k+" className="bg-ink">100k+</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          What do you need? <span className="normal-case">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={4}
          placeholder="Tell us what's going on with your store — current sales, what's not working, what you're trying to fix."
          className={`${inputClass} resize-none`}
        />
      </div>

      {state?.status === "error" && (
        <div role="alert" aria-live="assertive" className="text-sm text-red-400">
          <span className="font-medium">Error: </span>
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn-fill w-full cursor-pointer rounded-[32px] border-none px-6 py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}
