export const locales = ["en", "sv"] as const;

export type Locale = (typeof locales)[number];

export type ProductStatus = "live" | "beta" | "coming-soon";

export type PrincipleIcon = "clarity" | "reliability" | "security" | "momentum";

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface StrengthItem {
  number: string;
  title: string;
  description: string;
}

export interface PrincipleItem {
  title: string;
  description: string;
  icon: PrincipleIcon;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  status: ProductStatus;
  cover: string;
  coverAlt: string;
  tags: string[];
  url: string;
}

export interface FormCopy {
  formTitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  successTitle: string;
  successText: string;
  sendAnother: string;
  requiredHint: string;
  errors: {
    name: string;
    email: string;
    message: string;
  };
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
    ogImage: string;
    keywords: string[];
  };
  common: {
    skipToContent: string;
    home: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    language: string;
    primaryNav: string;
    logoAlt: string;
    newTab: string;
  };
  languageSwitch: {
    label: string;
    en: string;
    sv: string;
    toEn: string;
    toSv: string;
  };
  nav: NavItem[];
  header: {
    cta: string;
  };
  hero: {
    kicker: string;
    titleTop: string;
    titleBottom: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
    meta: string;
  };
  about: {
    kicker: string;
    title: string;
    body: string[];
    missionLabel: string;
    mission: string;
    stats: Stat[];
  };
  strengths: {
    kicker: string;
    title: string;
    intro: string;
    items: StrengthItem[];
  };
  principles: {
    kicker: string;
    title: string;
    intro: string;
    items: PrincipleItem[];
  };
  productsSection: {
    kicker: string;
    title: string;
    intro: string;
    visitSite: string;
    statusLabels: Record<ProductStatus, string>;
  };
  products: Product[];
  process: {
    kicker: string;
    title: string;
    intro: string;
    steps: Array<{ title: string; description: string }>;
  };
  why: {
    kicker: string;
    title: string;
    intro: string;
    items: Array<{ title: string; description: string }>;
  };
  tech: {
    kicker: string;
    title: string;
    description: string;
    items: string[];
  };
  leadership: {
    kicker: string;
    title: string;
    intro: string;
    name: string;
    role: string;
    location: string;
    bio: string;
    photoAlt: string;
  };
  contact: {
    kicker: string;
    title: string;
    intro: string;
    companyLabel: string;
    companyName: string;
    companyMeta: string;
    addressLabel: string;
    addressCountry: string;
    emailLabel: string;
    phoneLabel: string;
    mapLabel: string;
    formNote: string;
    form: FormCopy;
  };
  footer: {
    tagline: string;
    exploreLabel: string;
    contactLabel: string;
    addressLabel: string;
    copyright: string;
    location: string;
  };
}
