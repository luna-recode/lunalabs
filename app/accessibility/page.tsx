import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Accessibility Statement — Luna Labs",
  description:
    "Luna Labs commitment to web accessibility, WCAG 2.1 AA conformance, known limitations, and how to report issues.",
};

const sections = [
  {
    id: "commitment",
    title: "Our Commitment",
    body: `Luna Labs is committed to making our website accessible to everyone, including people who use assistive technologies. We aim to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, consistent with guidance from the U.S. Department of Justice on accessible web content under the Americans with Disabilities Act (ADA).\n\nAccessibility is an ongoing effort. We review this site regularly and update it as standards, tools, and our content evolve.`,
  },
  {
    id: "measures",
    title: "Measures We Have Taken",
    body: `We have implemented the following accessibility features on lunalabs.co:\n\n• **Keyboard navigation** — a skip link to main content, visible focus indicators on interactive elements, and an improved mobile navigation menu (Escape to close, focus management when open).\n• **Screen reader support** — semantic headings and landmarks, form labels, required-field cues, and live regions for form errors and success messages.\n• **Color and contrast** — body and muted text colors adjusted to meet WCAG AA contrast ratios on our dark background.\n• **Motion** — animations and autoplay video respect the prefers-reduced-motion setting; content remains visible without relying on motion.\n• **Tables** — ROI comparison data uses semantic HTML tables with captions and scoped headers.\n• **FAQ accordion** — expand/collapse controls use proper ARIA attributes and keyboard support.`,
  },
  {
    id: "limitations",
    title: "Known Limitations",
    body: `Some third-party content is not fully under our control and may present accessibility barriers:\n\n• **Cal.com booking widget** — the "Book a revenue audit" button opens a Cal.com scheduling modal. Keyboard and screen reader behavior inside the modal depends on Cal.com's embed. We have tested basic keyboard access (see checklist below) and will work with Cal.com or provide an alternative booking path if issues are reported.\n• **Google Analytics** — analytics scripts do not affect page content but may set cookies. See our Privacy Policy for details.\n\nThe hero background video is decorative only. All meaningful information appears in the overlaid text and is available without playing the video.`,
  },
  {
    id: "cal-audit",
    title: "Cal.com Keyboard Audit Checklist",
    body: `We manually tested the Cal.com embed ("Book a revenue audit") with keyboard-only navigation. Use this checklist if you verify accessibility on your device:\n\n1. **Tab to trigger** — Tab through the page until focus reaches the "Book a revenue audit" button.\n2. **Open modal** — Press Enter or Space on the focused button. The Cal.com scheduling dialog should open.\n3. **Focus inside modal** — Tab should move focus into the modal, not behind it to the page underneath.\n4. **Operate controls** — All date, time, and form fields inside the modal should be reachable and operable with Tab, Shift+Tab, Enter, Space, and arrow keys where applicable.\n5. **Close modal** — Press Escape. The modal should close and focus should return to the "Book a revenue audit" button (or remain on a logical close control).\n6. **Complete booking** — If you proceed through the flow, confirm required fields announce errors and the submit action is keyboard-accessible.\n\nIf any step fails on your browser or assistive technology, please report it using the contact information below. You can also email lunarecode@gmail.com directly to schedule an audit without using the embed.`,
  },
  {
    id: "compatibility",
    title: "Browser & Assistive Technology Compatibility",
    body: `This site is designed to work with current versions of major browsers (Chrome, Firefox, Safari, Edge) and common assistive technologies including screen readers (VoiceOver, NVDA, JAWS). We test with keyboard-only navigation and screen reader spot checks during updates.\n\nOlder browsers or unsupported assistive technology combinations may not render all features as intended.`,
  },
  {
    id: "feedback",
    title: "Feedback & Reporting Issues",
    body: `We welcome your feedback on the accessibility of this website. If you encounter a barrier or have suggestions for improvement, please contact us:\n\n**Email:** lunarecode@gmail.com\n**Subject line:** Accessibility feedback\n\nPlease include:\n• The page URL where you experienced the issue\n• A description of the problem\n• The browser and assistive technology you use (if applicable)\n\nWe aim to acknowledge accessibility reports within **5 business days** and to provide a substantive response or remediation plan within **30 days**, depending on complexity.`,
  },
  {
    id: "enforcement",
    title: "Formal Complaints",
    body: `If you are not satisfied with our response, you may have the right to file a complaint with the U.S. Department of Justice or your state or local enforcement agency. We prefer to resolve concerns directly and encourage you to contact us first.`,
  },
];

export default function AccessibilityPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="relative overflow-hidden pt-[140px] pb-[clamp(60px,8vh,90px)]">
          <div className="hero-bg absolute inset-0 z-0 opacity-40" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
          <div className="relative z-[2] mx-auto max-w-[900px] px-[clamp(20px,5vw,64px)]">
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-muted">
              <span className="h-px w-[34px] bg-muted" />
              Legal
            </div>
            <h1 className="font-serif text-[clamp(36px,6vw,64px)] font-medium leading-[1.02] tracking-tight">
              Accessibility Statement
            </h1>
            <p className="mt-5 max-w-[52ch] text-[clamp(14px,1.4vw,16px)] font-light leading-[1.6] text-bone-dim">
              How we design and maintain this site for people of all abilities,
              and how to reach us if something isn&apos;t working for you.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Last updated: June 2026
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-[clamp(20px,5vw,64px)] pb-[clamp(80px,12vh,140px)]">
          <nav
            aria-label="Accessibility statement contents"
            className="mb-16 rounded-lg border border-line bg-bone/[0.03] px-8 py-7"
          >
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
              Contents
            </p>
            <ol className="space-y-2">
              {sections.map((s, i) => (
                <li key={s.id} className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${s.id}`}
                    className="text-sm font-light text-bone-dim transition-colors hover:text-bone"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-14">
            {sections.map((s, i) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <div className="mb-4 flex items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-line" />
                </div>
                <h2 className="mb-4 font-serif text-[22px] font-medium leading-[1.1]">
                  {s.title}
                </h2>
                <div className="space-y-4">
                  {s.body.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      className="text-[15px] font-light leading-[1.7] text-bone-dim"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {para.replace(/\*\*(.*?)\*\*/g, "$1")}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg border border-line bg-bone/[0.03] px-8 py-6">
            <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
              Also worth reading
            </p>
            <a
              href="/privacy"
              className="font-serif text-[18px] font-medium transition-colors hover:text-bone"
            >
              Privacy Policy →
            </a>
            <p className="mt-1 text-sm font-light text-bone-dim">
              How we collect, use, and protect personal data.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
