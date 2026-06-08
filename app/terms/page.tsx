import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — Luna Labs",
  description:
    "Terms and conditions governing Luna Labs services, project engagements, and client relationships.",
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: `By engaging Luna Labs for any service — whether through a signed proposal, verbal agreement, or payment — you agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not proceed with any engagement. Luna Labs reserves the right to update these terms at any time; continued use of our services constitutes acceptance of the revised terms.`,
  },
  {
    id: "services",
    title: "Scope of Services",
    body: `Luna Labs provides commerce revenue consulting, Shopify storefront design and development, email marketing system setup (Klaviyo), conversion rate optimization, paid social strategy, and ongoing care plans. The exact deliverables, timeline, and pricing for each engagement are defined in a written project proposal or statement of work ("SOW") agreed upon before work begins.\n\nAny work requested outside the agreed SOW — including additional pages, integrations, or rounds of revision — constitutes a change order and will be scoped and priced separately before execution.`,
  },
  {
    id: "payment",
    title: "Payment Terms",
    body: `Unless otherwise stated in the project proposal:\n\n• A non-refundable deposit of 50% of the total project fee is due before work begins.\n• The remaining balance is due upon project completion, prior to final file delivery or site launch.\n• Care plan and retainer engagements are billed monthly in advance.\n• Invoices not paid within 14 days of the due date may incur a 1.5% monthly late fee.\n• Luna Labs reserves the right to pause or suspend work on any project with an outstanding overdue balance.`,
  },
  {
    id: "revisions",
    title: "Revisions & Change Orders",
    body: `Each project proposal specifies the number of included revision rounds. Revisions are defined as minor adjustments to existing approved designs or copy — not new directions, additional pages, or feature additions. Requests that fall outside this scope will be assessed as change orders and quoted accordingly.\n\nRevision requests must be submitted in writing (email or shared document) within 7 days of each deliverable. Feedback received after this window may be treated as a new change order.`,
  },
  {
    id: "ip",
    title: "Intellectual Property",
    body: `Upon receipt of full payment, Luna Labs assigns to the client full ownership of all custom design assets and code created specifically for their project. Luna Labs retains the right to display completed work in its portfolio, case studies, and marketing materials unless the client requests otherwise in writing.\n\nThird-party assets used in the project (stock photography, fonts, plugins, themes) remain subject to their respective license terms and are the client's responsibility to maintain and renew.\n\nAll work product remains the property of Luna Labs until final payment is received in full.`,
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: `Both parties agree to keep confidential any proprietary business information shared during the engagement — including but not limited to revenue figures, customer data, unreleased products, and internal strategies. This obligation survives the end of the engagement.\n\nLuna Labs will never share, sell, or disclose client data to third parties without explicit written consent, except where required by law.`,
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    body: `The client agrees to:\n\n• Provide all required content, credentials, and assets in a timely manner as outlined in the SOW.\n• Designate a single point of contact with authority to approve deliverables.\n• Respond to requests for feedback or approval within 5 business days. Delays caused by late client feedback may extend the project timeline accordingly and are not the responsibility of Luna Labs.\n• Ensure that all materials provided to Luna Labs (copy, images, brand assets) do not infringe on any third-party intellectual property rights.`,
  },
  {
    id: "warranties",
    title: "Warranties & Disclaimers",
    body: `Luna Labs warrants that services will be performed with reasonable skill and care in accordance with industry standards. We do not guarantee specific revenue outcomes, conversion rate improvements, or ranking positions, as these are subject to market conditions, platform algorithm changes, and factors outside our control.\n\nAll services are provided "as is" beyond the scope explicitly described in the agreed SOW. Luna Labs makes no warranties, express or implied, beyond those stated herein.`,
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: `To the fullest extent permitted by law, Luna Labs' total liability to the client for any claim arising out of or relating to these terms or the services provided shall not exceed the total fees paid by the client for the specific project giving rise to the claim.\n\nLuna Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including lost revenue, lost profits, or loss of data — even if advised of the possibility of such damages.`,
  },
  {
    id: "termination",
    title: "Termination",
    body: `Either party may terminate an engagement with 14 days' written notice. Upon termination:\n\n• The client owes payment for all work completed up to the termination date, calculated on a pro-rata basis against the total project fee.\n• The non-refundable deposit is retained by Luna Labs in all cases.\n• Luna Labs will deliver all completed work product upon receipt of any outstanding balance.\n\nLuna Labs may terminate immediately and without notice in cases of client non-payment, abusive conduct, or requests to engage in activities that violate applicable law.`,
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: `These Terms and Conditions are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Orange County, California.`,
  },
  {
    id: "contact",
    title: "Contact",
    body: `For questions about these Terms and Conditions, please contact us at:\n\nLuna Labs\nOrange County, CA\nlunarecode@gmail.com`,
  },
];

export default function TermsPage() {
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
              Terms &amp; Conditions
            </h1>
            <p className="mt-5 max-w-[52ch] text-[clamp(14px,1.4vw,16px)] font-light leading-[1.6] text-bone-dim">
              These terms govern all engagements between Luna Labs and its clients.
              Please read them carefully before starting a project with us.
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
                  <span className="font-mono text-[10px] text-muted">{String(i + 1).padStart(2, "0")}</span>
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
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}
