export type BuildTier = {
  id: string;
  number: string;
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  lead: string;
  timeline: string;
  idealClient: string;
  pitch: string;
  includes: string[];
  recommended?: boolean;
};

export type CareTier = {
  price: string;
  label: string;
};

export const buildTiers: BuildTier[] = [
  {
    id: "essential",
    number: "01",
    name: "Essential",
    price: "$1,750–2,000",
    priceNote: "one-time build",
    tagline:
      "Get the brand online with a store that's beautiful, trusted, and doesn't lose a single sale to friction.",
    lead: "Design & Dev",
    timeline: "1–2 weeks",
    idealClient:
      "A brand selling on social or Square with no real store yet — needs to look legitimate and stop losing easy sales.",
    pitch:
      "This is the floor — a store that finally looks like your brand and doesn't lose people at checkout.",
    includes: [
      "Custom-designed storefront (design system on a premium theme)",
      "Up to 5 core pages: Home, Shop, About, Contact, FAQ",
      "Platform migration (e.g. Square → Shopify)",
      "Product upload & merchandising for launch catalog",
      "Conversion-ready product pages with trust signals",
      "Mobile-first optimization & pre-launch QA",
      "One email-capture pop-up for day-one list building",
      "2 revision rounds, then launch",
    ],
  },
  {
    id: "growth",
    number: "02",
    name: "Growth",
    price: "~$3,800",
    priceNote: "one-time build",
    tagline:
      "Convert the audience you already have. You don't need more traffic — you need more of your visitors to buy, and the ones who leave to come back.",
    lead: "Marketing",
    timeline: "2–3 weeks",
    idealClient:
      "Has an audience and some sales, but no system capturing or recovering them. Most clients belong here.",
    pitch:
      "You have followers and no abandoned-cart recovery — you're leaving money on the table every day. Growth is how we go collect it.",
    recommended: true,
    includes: [
      "Everything in Essential",
      "Klaviyo set-up + 3 core automations: welcome, abandoned-cart, post-purchase",
      "Reviews & UGC on product pages",
      "First-order offer + free-shipping threshold nudge to lift AOV",
      "One conversion-focused campaign / landing page",
      "GA4 + clear launch report — results visible from week one",
    ],
  },
  {
    id: "scale",
    number: "03",
    name: "Scale",
    price: "~$7,000",
    priceNote: "one-time build",
    tagline:
      "Build a full growth engine — every touchpoint optimized, traffic driven deliberately, and a habit of testing so the numbers keep climbing.",
    lead: "Whole team",
    timeline: "4–6 weeks",
    idealClient:
      "Proven product, ready to invest in growth and spend on ads with intent.",
    pitch:
      "Moves conversion, AOV, and traffic at once — and installs the testing loop that compounds returns over time.",
    includes: [
      "Everything in Growth",
      "Full flow suite: welcome, cart, browse-abandon, post-purchase, win-back, VIP",
      "Conversion-optimized collection pages + paid-traffic landing pages",
      "A/B test setup on hero and product page",
      "First month of paid social: ad creative + campaign structure",
      "UGC / influencer-seeding playbook",
      "60–90 day optimization window with reporting",
    ],
  },
];

export const careTiers: CareTier[] = [
  { price: "$750", label: "Email + reporting" },
  { price: "$1,100", label: "+ ads management" },
  { price: "$1,500", label: "+ monthly CRO & content" },
];

export const careIncludes = [
  "Email/SMS campaign calendar — designed, written, scheduled, sent",
  "Paid social management & optimization (ad spend billed separately)",
  "One CRO experiment per month, with the result reported",
  "Performance report: revenue, conversion, list growth, next steps",
  "A small block of store edits / new sections",
];

export const faqs = [
  {
    question: "It's just a redesign.",
    answer:
      "A redesign changes how it looks. We change how it earns — recovery emails, social proof, a checkout that doesn't leak. Looks are table stakes; revenue is the job.",
  },
  {
    question: "That's more than I wanted to spend.",
    answer:
      "Fair — let's look at what it returns. If it adds one extra sale a day at your AOV, it pays for itself in weeks. The real question is the payback period, not the sticker.",
  },
  {
    question: "Can't I just buy a theme?",
    answer:
      "You can, and it'll look fine. But a theme is a costume, not a salesperson. The part that actually sells — proof, recovery, flow — doesn't come in a theme.",
  },
  {
    question: "Why isn't the cheapest tier enough?",
    answer:
      "Essential builds a store that doesn't lose sales. Growth is the one that goes and gets them. We'll always tell you honestly which one you actually need.",
  },
];
