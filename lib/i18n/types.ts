export type Locale = "en" | "es";

export type BuildTier = {
  id: string;
  number: string;
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  lead: string;
  timeline: string;
  pitch: string;
  includes: string[];
  recommended?: boolean;
};

export type CareTier = {
  price: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LegalSection = {
  id: string;
  title: string;
  body: string;
};

export type LegalPageContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  contents: string;
  alsoWorthReading: string;
  crossLinkTitle: string;
  crossLinkDescription: string;
  crossLinkHref: string;
  sections: LegalSection[];
};

export type Translations = {
  common: {
    bookConsult: string;
    viewWork: string;
    scroll: string;
    errorPrefix: string;
    backToTop: string;
    skipToMain: string;
  };
  nav: {
    works: string;
    pricing: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    mobileTagline: string;
  };
  language: {
    label: string;
    english: string;
    spanish: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    recentWork: string;
    recentWorkClient: string;
  };
  reframe: {
    eyebrow: string;
    thesis: string;
    titleBeforeLooks: string;
    looks: string;
    titleBeforeEarns: string;
    earns: string;
  };
  work: {
    eyebrow: string;
    client: string;
    delivered: string;
    imageTodo: string;
    quoteTodo: string;
    beforeLabel: string;
    afterLabel: string;
  };
  stack: {
    eyebrow: string;
    heading: string;
    tools: { name: string; role: string }[];
  };
  proof: {
    eyebrow: string;
    heading: string;
    body: string;
    mechanisms: string[];
  };
  finalCta: {
    eyebrow: string;
    headingBefore: string;
    headingEmphasis: string;
    body: string;
    formNote: string;
  };
  footer: {
    headingLine1: string;
    headingEmphasis: string;
    whatWeBuild: string;
    navigate: string;
    getInTouch: string;
    services: string[];
    subscribe: string;
    copyright: string;
    terms: string;
    accessibility: string;
    privacy: string;
  };
  forms: {
    sent: string;
    name: string;
    email: string;
    phone: string;
    brand: string;
    followers: string;
    message: string;
    required: string;
    selectRange: string;
    followerOptions: string[];
    messagePlaceholder: string;
    sending: string;
    sendMessage: string;
    subscribeEmail: string;
    subscribe: string;
    yourEmail: string;
    contactSuccess: string;
    contactRequiredError: string;
    contactGenericError: string;
    subscribeSuccess: string;
    subscribeInvalidError: string;
    subscribeGenericError: string;
  };
  pricing: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroBody: string;
    tierLabel: string;
    recommended: string;
    lead: string;
    timeline: string;
    talkAboutTier: string;
    undecidedTitle: string;
    undecidedBody: string;
    undecidedCta: string;
    valueEyebrow: string;
    valueTitle: string;
    valueBody: string;
    valueParts: string[];
    careEyebrow: string;
    careTitle: string;
    careBody: string;
    perMonthMin: string;
    whatsIncluded: string;
    thePitch: string;
    carePitchQuote: string;
    carePitchNote: string;
    askAboutCare: string;
    faqEyebrow: string;
    faqHeading: string;
    expand: string;
    collapse: string;
    buildTiers: BuildTier[];
    careTiers: CareTier[];
    careIncludes: string[];
    faqs: FaqItem[];
  };
  popup: {
    close: string;
    successTitle: string;
    successBody: string;
    title: string;
    body: string;
    noSpam: string;
  };
  legal: {
    privacy: LegalPageContent;
    terms: LegalPageContent;
    accessibility: LegalPageContent;
  };
};
