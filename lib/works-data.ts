export type Metric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  id: string;
  number: string;
  client: string;
  location: string;
  tier: string;
  tagline: string;
  deliverables: string[];
  metrics?: Metric[];
  image?: string;
  liveUrl?: string;
  placeholder?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "soleil-stone",
    number: "01",
    client: "Soleil & Stone",
    location: "Laguna Beach, CA",
    tier: "Essential",
    tagline:
      "Custom design system + a conversion-focused Shopify storefront that finally matched the brand.",
    deliverables: [
      "Custom-designed storefront",
      "Conversion-ready product pages",
      "Trust signals & social proof",
      "Email capture pop-up",
      "Mobile-first optimization",
    ],
    // metrics: [{ label: "Conversion lift", value: "+XX%" }], // add when available
    // image: "/works/soleil-stone.jpg", // add when available
    // liveUrl: "https://...", // add when available
  },
  { id: "placeholder-2", number: "02", client: "", location: "", tier: "", tagline: "", deliverables: [], placeholder: true },
  { id: "placeholder-3", number: "03", client: "", location: "", tier: "", tagline: "", deliverables: [], placeholder: true },
  { id: "placeholder-4", number: "04", client: "", location: "", tier: "", tagline: "", deliverables: [], placeholder: true },
];
