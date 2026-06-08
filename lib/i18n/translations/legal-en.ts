import type { LegalPageContent } from "../types";

export const legalEn: {
  privacy: LegalPageContent;
  terms: LegalPageContent;
  accessibility: LegalPageContent;
} = {
  privacy: {
    metaTitle: "Privacy Policy — Luna Labs",
    metaDescription:
      "How Luna Labs collects, uses, and protects personal data from website visitors and clients.",
    eyebrow: "Legal",
    title: "Privacy Policy",
    subtitle:
      "How we collect, use, and protect the personal data of everyone who visits this site or gets in touch with us.",
    lastUpdated: "Last updated: June 2026",
    contents: "Contents",
    alsoWorthReading: "Also worth reading",
    crossLinkTitle: "Terms & Conditions →",
    crossLinkDescription:
      "The rules governing project engagements, payment, and ownership.",
    crossLinkHref: "/terms",
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: `Luna Labs ("we," "us," or "our") operates this website and is committed to protecting your personal information. This Privacy Policy explains what data we collect, why we collect it, how we use it, and your rights regarding that data.

This policy applies to all visitors of lunalabs.co and anyone who submits information through our contact form or email subscribe feature. It does not cover data shared as part of a client project engagement — that is governed by the confidentiality clause in our Terms & Conditions.`,
      },
      {
        id: "data-collected",
        title: "Data We Collect",
        body: `We only collect information you actively provide to us. We do not buy data, scrape data, or collect data without your knowledge.

Contact form: When you fill out the contact form, we collect your name, email address, phone number (optional), brand name, social following range, and the message you write. This is used solely to respond to your inquiry.

Email subscribe: When you subscribe via the footer form, we collect your email address and add it to our mailing list, hosted by Resend. You can unsubscribe at any time.

Analytics: We use Google Analytics 4 (GA4) to understand how visitors navigate the site. GA4 collects anonymised data including pages visited, time on site, device type, and approximate location (city/country level). No personally identifiable information is passed to GA4.

Cookies: GA4 sets first-party cookies to distinguish sessions. No third-party advertising cookies are used on this site.`,
      },
      {
        id: "how-we-use",
        title: "How We Use Your Data",
        body: `We use the data we collect for the following purposes only:

• To respond to enquiries — contact form submissions are emailed directly to our team and used solely to follow up with you.
• To send marketing emails — if you subscribed, we may send occasional updates about our services, insights, or offers. Every email includes a one-click unsubscribe link.
• To improve the website — anonymised analytics data helps us understand which content is useful and how to improve the experience.

We do not use your data for automated decision-making or profiling.`,
      },
      {
        id: "data-sharing",
        title: "Data Sharing & Third Parties",
        body: `We do not sell, rent, or trade your personal data. We share data only with the third-party services that power this site, and only to the extent necessary:

• Resend — handles transactional email delivery (contact form notifications) and manages the email subscriber list. Resend is GDPR-compliant. Their privacy policy is available at resend.com/privacy.
• Google Analytics — processes anonymised site usage data. You can opt out of GA tracking via the Google Analytics Opt-out Browser Add-on or by using a browser with tracking protection enabled.
• Vercel — hosts this website. Vercel may log server-side request metadata (IP address, user agent) for security purposes. Their privacy policy is available at vercel.com/legal/privacy-policy.

All third-party processors are contractually required to handle your data in accordance with applicable privacy law.`,
      },
      {
        id: "retention",
        title: "Data Retention",
        body: `• Contact form submissions are retained in our email inbox for as long as necessary to manage the business relationship, then deleted.
• Email subscriber data is retained until you unsubscribe, at which point your address is marked unsubscribed in Resend. You may request full deletion at any time.
• Analytics data is retained for 14 months within GA4, per Google's default retention setting.`,
      },
      {
        id: "your-rights",
        title: "Your Rights",
        body: `Depending on where you are located, you may have the following rights regarding your personal data:

• Access — request a copy of the personal data we hold about you.
• Correction — request that inaccurate data be corrected.
• Deletion — request that your data be deleted ("right to be forgotten").
• Opt-out of marketing — unsubscribe from our mailing list at any time via the link in any email, or by contacting us directly.
• Data portability — request your data in a portable format.

California residents (CCPA): You have the right to know what personal information we collect, to request deletion, and to opt out of the sale of personal information. We do not sell personal information.

EU/UK residents (GDPR): Our legal basis for processing contact form data is legitimate interest (responding to your enquiry). Our legal basis for email marketing is your explicit consent at the point of subscription.

To exercise any of these rights, email us at hello@bylunalabs.com. We will respond within 30 days.`,
      },
      {
        id: "security",
        title: "Security",
        body: `We take reasonable technical and organisational measures to protect your data from unauthorised access, loss, or disclosure. The site is served over HTTPS. Access to contact form data is restricted to Luna Labs team members.

No method of internet transmission is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.`,
      },
      {
        id: "children",
        title: "Children's Privacy",
        body: `This website is not directed at children under 13. We do not knowingly collect personal data from children. If you believe a child has submitted data through this site, contact us and we will delete it promptly.`,
      },
      {
        id: "changes",
        title: "Changes to This Policy",
        body: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we do, we will update the "Last updated" date at the top of this page. Continued use of the site after changes constitutes acceptance of the updated policy.

For significant changes, we will make reasonable efforts to notify subscribers via email.`,
      },
      {
        id: "contact",
        title: "Contact & Complaints",
        body: `For any questions, requests, or complaints regarding this Privacy Policy or how we handle your data, please contact:

Luna Labs
Orange County, CA
hello@bylunalabs.com

If you are an EU resident and believe we have not adequately addressed your concern, you have the right to lodge a complaint with your local data protection authority.`,
      },
    ],
  },
  terms: {
    metaTitle: "Terms & Conditions — Luna Labs",
    metaDescription:
      "Terms and conditions governing Luna Labs services, project engagements, and client relationships.",
    eyebrow: "Legal",
    title: "Terms & Conditions",
    subtitle:
      "These terms govern all engagements between Luna Labs and its clients. Please read them carefully before starting a project with us.",
    lastUpdated: "Last updated: June 2026",
    contents: "Contents",
    alsoWorthReading: "Also worth reading",
    crossLinkTitle: "Privacy Policy →",
    crossLinkDescription:
      "How we collect, use, and protect personal data.",
    crossLinkHref: "/privacy",
    sections: [
      {
        id: "acceptance",
        title: "Acceptance of Terms",
        body: `By engaging Luna Labs for any service — whether through a signed proposal, verbal agreement, or payment — you agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not proceed with any engagement. Luna Labs reserves the right to update these terms at any time; continued use of our services constitutes acceptance of the revised terms.`,
      },
      {
        id: "services",
        title: "Scope of Services",
        body: `Luna Labs provides commerce revenue consulting, Shopify storefront design and development, email marketing system setup (Klaviyo), conversion rate optimization, paid social strategy, and ongoing care plans. The exact deliverables, timeline, and pricing for each engagement are defined in a written project proposal or statement of work ("SOW") agreed upon before work begins.

Any work requested outside the agreed SOW — including additional pages, integrations, or rounds of revision — constitutes a change order and will be scoped and priced separately before execution.`,
      },
      {
        id: "payment",
        title: "Payment Terms",
        body: `Unless otherwise stated in the project proposal:

• A non-refundable deposit of 50% of the total project fee is due before work begins.
• The remaining balance is due upon project completion, prior to final file delivery or site launch.
• Care plan and retainer engagements are billed monthly in advance.
• Invoices not paid within 14 days of the due date may incur a 1.5% monthly late fee.
• Luna Labs reserves the right to pause or suspend work on any project with an outstanding overdue balance.`,
      },
      {
        id: "revisions",
        title: "Revisions & Change Orders",
        body: `Each project proposal specifies the number of included revision rounds. Revisions are defined as minor adjustments to existing approved designs or copy — not new directions, additional pages, or feature additions. Requests that fall outside this scope will be assessed as change orders and quoted accordingly.

Revision requests must be submitted in writing (email or shared document) within 7 days of each deliverable. Feedback received after this window may be treated as a new change order.`,
      },
      {
        id: "ip",
        title: "Intellectual Property",
        body: `Upon receipt of full payment, Luna Labs assigns to the client full ownership of all custom design assets and code created specifically for their project. Luna Labs retains the right to display completed work in its portfolio, case studies, and marketing materials unless the client requests otherwise in writing.

Third-party assets used in the project (stock photography, fonts, plugins, themes) remain subject to their respective license terms and are the client's responsibility to maintain and renew.

All work product remains the property of Luna Labs until final payment is received in full.`,
      },
      {
        id: "confidentiality",
        title: "Confidentiality",
        body: `Both parties agree to keep confidential any proprietary business information shared during the engagement — including but not limited to revenue figures, customer data, unreleased products, and internal strategies. This obligation survives the end of the engagement.

Luna Labs will never share, sell, or disclose client data to third parties without explicit written consent, except where required by law.`,
      },
      {
        id: "client-responsibilities",
        title: "Client Responsibilities",
        body: `The client agrees to:

• Provide all required content, credentials, and assets in a timely manner as outlined in the SOW.
• Designate a single point of contact with authority to approve deliverables.
• Respond to requests for feedback or approval within 5 business days. Delays caused by late client feedback may extend the project timeline accordingly and are not the responsibility of Luna Labs.
• Ensure that all materials provided to Luna Labs (copy, images, brand assets) do not infringe on any third-party intellectual property rights.`,
      },
      {
        id: "warranties",
        title: "Warranties & Disclaimers",
        body: `Luna Labs warrants that services will be performed with reasonable skill and care in accordance with industry standards. We do not guarantee specific revenue outcomes, conversion rate improvements, or ranking positions, as these are subject to market conditions, platform algorithm changes, and factors outside our control.

All services are provided "as is" beyond the scope explicitly described in the agreed SOW. Luna Labs makes no warranties, express or implied, beyond those stated herein.`,
      },
      {
        id: "liability",
        title: "Limitation of Liability",
        body: `To the fullest extent permitted by law, Luna Labs' total liability to the client for any claim arising out of or relating to these terms or the services provided shall not exceed the total fees paid by the client for the specific project giving rise to the claim.

Luna Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including lost revenue, lost profits, or loss of data — even if advised of the possibility of such damages.`,
      },
      {
        id: "termination",
        title: "Termination",
        body: `Either party may terminate an engagement with 14 days' written notice. Upon termination:

• The client owes payment for all work completed up to the termination date, calculated on a pro-rata basis against the total project fee.
• The non-refundable deposit is retained by Luna Labs in all cases.
• Luna Labs will deliver all completed work product upon receipt of any outstanding balance.

Luna Labs may terminate immediately and without notice in cases of client non-payment, abusive conduct, or requests to engage in activities that violate applicable law.`,
      },
      {
        id: "governing-law",
        title: "Governing Law",
        body: `These Terms and Conditions are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Orange County, California.`,
      },
      {
        id: "contact",
        title: "Contact",
        body: `For questions about these Terms and Conditions, please contact us at:

Luna Labs
Orange County, CA
hello@bylunalabs.com`,
      },
    ],
  },
  accessibility: {
    metaTitle: "Accessibility Statement — Luna Labs",
    metaDescription:
      "Luna Labs commitment to web accessibility, WCAG 2.1 AA conformance, known limitations, and how to report issues.",
    eyebrow: "Legal",
    title: "Accessibility Statement",
    subtitle:
      "How we design and maintain this site for people of all abilities, and how to reach us if something isn't working for you.",
    lastUpdated: "Last updated: June 2026",
    contents: "Contents",
    alsoWorthReading: "Also worth reading",
    crossLinkTitle: "Privacy Policy →",
    crossLinkDescription:
      "How we collect, use, and protect personal data.",
    crossLinkHref: "/privacy",
    sections: [
      {
        id: "commitment",
        title: "Our Commitment",
        body: `Luna Labs is committed to making our website accessible to everyone, including people who use assistive technologies. We aim to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, consistent with guidance from the U.S. Department of Justice on accessible web content under the Americans with Disabilities Act (ADA).

Accessibility is an ongoing effort. We review this site regularly and update it as standards, tools, and our content evolve.`,
      },
      {
        id: "measures",
        title: "Measures We Have Taken",
        body: `We have implemented the following accessibility features on lunalabs.co:

• Keyboard navigation — a skip link to main content, visible focus indicators on interactive elements, and an improved mobile navigation menu (Escape to close, focus management when open).
• Screen reader support — semantic headings and landmarks, form labels, required-field cues, and live regions for form errors and success messages.
• Color and contrast — body and muted text colors adjusted to meet WCAG AA contrast ratios on our dark background.
• Motion — animations and autoplay video respect the prefers-reduced-motion setting; content remains visible without relying on motion.
• Content structure — proof, work, and pricing sections use semantic headings, landmarks, and accessible labels where visual placeholders appear.
• FAQ accordion — expand/collapse controls use proper ARIA attributes and keyboard support.`,
      },
      {
        id: "limitations",
        title: "Known Limitations",
        body: `Some third-party content is not fully under our control and may present accessibility barriers:

• Cal.com booking widget — the "Book a free consult" button opens a Cal.com scheduling modal. Keyboard and screen reader behavior inside the modal depends on Cal.com's embed. We have tested basic keyboard access (see checklist below) and will work with Cal.com or provide an alternative booking path if issues are reported.
• Google Analytics — analytics scripts do not affect page content but may set cookies. See our Privacy Policy for details.

The hero background video is decorative only. All meaningful information appears in the overlaid text and is available without playing the video.`,
      },
      {
        id: "cal-consult",
        title: "Cal.com Keyboard Consult Checklist",
        body: `We manually tested the Cal.com embed ("Book a free consult") with keyboard-only navigation. Use this checklist if you verify accessibility on your device:

1. Tab to trigger — Tab through the page until focus reaches the "Book a free consult" button.
2. Open modal — Press Enter or Space on the focused button. The Cal.com scheduling dialog should open.
3. Focus inside modal — Tab should move focus into the modal, not behind it to the page underneath.
4. Operate controls — All date, time, and form fields inside the modal should be reachable and operable with Tab, Shift+Tab, Enter, Space, and arrow keys where applicable.
5. Close modal — Press Escape. The modal should close and focus should return to the "Book a free consult" button (or remain on a logical close control).
6. Complete booking — If you proceed through the flow, confirm required fields announce errors and the submit action is keyboard-accessible.

If any step fails on your browser or assistive technology, please report it using the contact information below. You can also email hello@bylunalabs.com directly to schedule a consult without using the embed.`,
      },
      {
        id: "compatibility",
        title: "Browser & Assistive Technology Compatibility",
        body: `This site is designed to work with current versions of major browsers (Chrome, Firefox, Safari, Edge) and common assistive technologies including screen readers (VoiceOver, NVDA, JAWS). We test with keyboard-only navigation and screen reader spot checks during updates.

Older browsers or unsupported assistive technology combinations may not render all features as intended.`,
      },
      {
        id: "feedback",
        title: "Feedback & Reporting Issues",
        body: `We welcome your feedback on the accessibility of this website. If you encounter a barrier or have suggestions for improvement, please contact us:

Email: hello@bylunalabs.com
Subject line: Accessibility feedback

Please include:
• The page URL where you experienced the issue
• A description of the problem
• The browser and assistive technology you use (if applicable)

We aim to acknowledge accessibility reports within 5 business days and to provide a substantive response or remediation plan within 30 days, depending on complexity.`,
      },
      {
        id: "enforcement",
        title: "Formal Complaints",
        body: `If you are not satisfied with our response, you may have the right to file a complaint with the U.S. Department of Justice or your state or local enforcement agency. We prefer to resolve concerns directly and encourage you to contact us first.`,
      },
    ],
  },
};
