"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { useLocale, useTranslations } from "@/lib/i18n/context";

const inputClass =
  "w-full rounded-lg border border-line bg-transparent px-4 py-3 text-sm text-bone placeholder:text-muted transition-colors focus:border-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

const labelClass = "mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted";

export function ContactForm() {
  const { locale } = useLocale();
  const t = useTranslations();
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
          {t.forms.sent}
        </span>
        <p className="font-serif text-[22px] font-medium leading-snug">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4" noValidate>
      <input type="hidden" name="locale" value={locale} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {t.forms.name} <span className="normal-case">({t.forms.required})</span>
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
            {t.forms.email} <span className="normal-case">({t.forms.required})</span>
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
          <label htmlFor="phone" className={labelClass}>{t.forms.phone}</label>
          <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className={inputClass} />
        </div>
        <div>
          <label htmlFor="brand" className={labelClass}>
            {t.forms.brand} <span className="normal-case">({t.forms.required})</span>
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
        <label htmlFor="followers" className={labelClass}>{t.forms.followers}</label>
        <select id="followers" name="followers" className={`${inputClass} cursor-pointer`} defaultValue="">
          <option value="" disabled className="bg-ink">{t.forms.selectRange}</option>
          {t.forms.followerOptions.map((option) => (
            <option key={option} value={option} className="bg-ink">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {t.forms.message} <span className="normal-case">({t.forms.required})</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={4}
          placeholder={t.forms.messagePlaceholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      {state?.status === "error" && (
        <div role="alert" aria-live="assertive" className="text-sm text-red-400">
          <span className="font-medium">{t.common.errorPrefix}</span>
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn-fill w-full cursor-pointer rounded-[32px] border-none px-6 py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? t.forms.sending : t.forms.sendMessage}
      </button>
    </form>
  );
}
