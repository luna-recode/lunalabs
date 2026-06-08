import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Luna Labs",
  description:
    "How Luna Labs collects, uses, and protects personal data from website visitors and clients.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    body: `Luna Labs ("we," "us," or "our") operates this website and is committed to protecting your personal information. This Privacy Policy explains what data we collect, why we collect it, how we use it, and your rights regarding that data.\n\nThis policy applies to all visitors of lunalabs.co and anyone who submits information through our contact form or email subscribe feature. It does not cover data shared as part of a client project engagement — that is governed by the confidentiality clause in our Terms & Conditions.`,
  },
  {
    id: "data-collected",
    title: "Data We Collect",
    body: `We only collect information you actively provide to us. We do not buy data, scrape data, or collect data without your knowledge.\n\n**Contact form:** When you fill out the contact form, we collect your name, email address, phone number (optional), brand name, social following range, and the message you write. This is used solely to respond to your inquiry.\n\n**Email subscribe:** When you subscribe via the footer form, we collect your email address and add it to our mailing list, hosted by Resend. You can unsubscribe at any time.\n\n**Analytics:** We use Google Analytics 4 (GA4) to understand how visitors navigate the site. GA4 collects anonymised data including pages visited, time on site, device type, and approximate location (city/country level). No personally identifiable information is passed to GA4.\n\n**Cookies:** GA4 sets first-party cookies to distinguish sessions. No third-party advertising cookies are used on this site.`,
  },
  {
    id: "how-we-use",
    title: "How We Use Your Data",
    body: `We use the data we collect for the following purposes only:\n\n• **To respond to enquiries** — contact form submissions are emailed directly to our team and used solely to follow up with you.\n• **To send marketing emails** — if you subscribed, we may send occasional updates about our services, insights, or offers. Every email includes a one-click unsubscribe link.\n• **To improve the website** — anonymised analytics data helps us understand which content is useful and how to improve the experience.\n\nWe do not use your data for automated decision-making or profiling.`,
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Third Parties",
    body: `We do not sell, rent, or trade your personal data. We share data only with the third-party services that power this site, and only to the extent necessary:\n\n• **Resend** — handles transactional email delivery (contact form notifications) and manages the email subscriber list. Resend is GDPR-compliant. Their privacy policy is available at resend.com/privacy.\n• **Google Analytics** — processes anonymised site usage data. You can opt out of GA tracking via the Google Analytics Opt-out Browser Add-on or by using a browser with tracking protection enabled.\n• **Vercel** — hosts this website. Vercel may log server-side request metadata (IP address, user agent) for security purposes. Their privacy policy is available at vercel.com/legal/privacy-policy.\n\nAll third-party processors are contractually required to handle your data in accordance with applicable privacy law.`,
  },
  {
    id: "retention",
    title: "Data Retention",
    body: `• **Contact form submissions** are retained in our email inbox for as long as necessary to manage the business relationship, then deleted.\n• **Email subscriber data** is retained until you unsubscribe, at which point your address is marked unsubscribed in Resend. You may request full deletion at any time.\n• **Analytics data** is retained for 14 months within GA4, per Google's default retention setting.`,
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: `Depending on where you are located, you may have the following rights regarding your personal data:\n\n• **Access** — request a copy of the personal data we hold about you.\n• **Correction** — request that inaccurate data be corrected.\n• **Deletion** — request that your data be deleted ("right to be forgotten").\n• **Opt-out of marketing** — unsubscribe from our mailing list at any time via the link in any email, or by contacting us directly.\n• **Data portability** — request your data in a portable format.\n\n**California residents (CCPA):** You have the right to know what personal information we collect, to request deletion, and to opt out of the sale of personal information. We do not sell personal information.\n\n**EU/UK residents (GDPR):** Our legal basis for processing contact form data is legitimate interest (responding to your enquiry). Our legal basis for email marketing is your explicit consent at the point of subscription.\n\nTo exercise any of these rights, email us at lunarecode@gmail.com. We will respond within 30 days.`,
  },
  {
    id: "security",
    title: "Security",
    body: `We take reasonable technical and organisational measures to protect your data from unauthorised access, loss, or disclosure. The site is served over HTTPS. Access to contact form data is restricted to Luna Labs team members.\n\nNo method of internet transmission is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.`,
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: `This website is not directed at children under 13. We do not knowingly collect personal data from children. If you believe a child has submitted data through this site, contact us and we will delete it promptly.`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we do, we will update the "Last updated" date at the top of this page. Continued use of the site after changes constitutes acceptance of the updated policy.\n\nFor significant changes, we will make reasonable efforts to notify subscribers via email.`,
  },
  {
    id: "contact",
    title: "Contact & Complaints",
    body: `For any questions, requests, or complaints regarding this Privacy Policy or how we handle your data, please contact:\n\nLuna Labs\nOrange County, CA\nlunarecode@gmail.com\n\nIf you are an EU resident and believe we have not adequately addressed your concern, you have the right to lodge a complaint with your local data protection authority.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-[140px] pb-[clamp(60px,8vh,90px)]">
          <div className="hero-bg absolute inset-0 z-0 opacity-40" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
          <div className="relative z-[2] mx-auto max-w-[900px] px-[clamp(20px,5vw,64px)]">
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-muted">
              <span className="h-px w-[34px] bg-muted" />
              Legal
            </div>
            <h1 className="font-serif text-[clamp(36px,6vw,64px)] font-medium leading-[1.02] tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-[52ch] text-[clamp(14px,1.4vw,16px)] font-light leading-[1.6] text-bone-dim">
              How we collect, use, and protect the personal data of everyone who
              visits this site or gets in touch with us.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Last updated: June 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-[900px] px-[clamp(20px,5vw,64px)] pb-[clamp(80px,12vh,140px)]">

          {/* TOC */}
          <nav className="mb-16 rounded-lg border border-line bg-bone/[0.03] px-8 py-7">
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

          {/* Sections */}
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

          {/* Cross-link */}
          <div className="mt-16 rounded-lg border border-line bg-bone/[0.03] px-8 py-6">
            <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
              Also worth reading
            </p>
            <a
              href="/terms"
              className="font-serif text-[18px] font-medium transition-colors hover:text-bone"
            >
              Terms &amp; Conditions →
            </a>
            <p className="mt-1 text-sm font-light text-bone-dim">
              The rules governing project engagements, payment, and ownership.
            </p>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}
