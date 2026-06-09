"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { useLocale, useTranslations } from "@/lib/i18n/context";

const fieldStyles = {
  glass:
    "w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-bone placeholder:text-muted backdrop-blur-sm transition-colors focus:border-accent/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
  outlined:
    "w-full rounded-lg border border-line-d bg-surface px-4 py-3 text-sm text-bone placeholder:text-muted shadow-[inset_0_1px_2px_rgba(21,35,63,0.04)] transition-colors hover:border-accent/30 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/20",
} as const;

const labelStyles = {
  glass: "mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
  outlined:
    "mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-bone-dim",
} as const;

/* 4.5:1+ on each variant's background: red-400 on dark glass, red-700 on light */
const errorStyles = {
  glass: "text-red-400",
  outlined: "text-[#b91c1c]",
} as const;

type ContactFormProps = {
  variant?: keyof typeof fieldStyles;
};

export function ContactForm({ variant = "glass" }: ContactFormProps) {
  const inputClass = fieldStyles[variant];
  const labelClass = labelStyles[variant];
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
        className="flex h-full min-h-[320px] flex-col items-center justify-center px-8 py-12 text-center"
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
      {/* Honeypot — hidden from real users, bots fill it and get silently rejected */}
      <input name="website" tabIndex={-1} aria-hidden="true" autoComplete="off" className="absolute opacity-0 pointer-events-none" />

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
          <option value="" disabled className="bg-card text-[#15233f]">{t.forms.selectRange}</option>
          {t.forms.followerOptions.map((option) => (
            <option key={option} value={option} className="bg-card text-[#15233f]">
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
        <div role="alert" aria-live="assertive" className={`text-sm ${errorStyles[variant]}`}>
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
