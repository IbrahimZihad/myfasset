import type { Locale, SiteContent } from "@/lib/types";

/**
 * ---------------------------------------------------------------------------
 * EDITABLE SITE CONTENT
 * ---------------------------------------------------------------------------
 * Everything shown on the website lives in this one file: navigation, copy,
 * products, strengths, principles, process, tech stack, leadership and contact
 * details. Update English and Swedish together, then replace the placeholder
 * products (names, copy, tags, images) with real ones.
 * ---------------------------------------------------------------------------
 */

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://myfasset.se"
).replace(/\/$/, "");

export const site = {
  name: "myfasset",
  url: siteUrl,
  founded: "2021",
  logo: "/myfasset-logo.png",
  logoAlt: "myfasset logo",
  address: {
    street: "Nyvången 16A, LGH 1102",
    postalCode: "302 57",
    city: "Halmstad",
    country: "Sweden",
    countryCode: "SE",
  },
  email: "[email]",
  phone: "[phone]",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Nyv%C3%A5ngen%2016A%2C%20302%2057%20Halmstad%2C%20Sweden",
  ceoPhoto: "/ashraful-alam.png",
} as const;

const enProducts: SiteContent["products"] = [
  {
    slug: "product-one",
    name: "Product One",
    tagline: "[One-line value statement for your first SaaS product.]",
    status: "live",
    placeholder: true,
    cover: "/products/product-01.svg",
    coverAlt: "Abstract placeholder artwork for Product One",
    tags: ["SaaS", "Placeholder"],
    overview: [
      "[Product overview placeholder — explain the problem this product solves, who it is for, and the outcome it delivers.]",
      "[Second paragraph placeholder — add positioning, context or a short proof point. Keep it concise and specific.]",
    ],
    features: [
      {
        title: "[Key feature one]",
        description: "[What it does and why it matters to the people using it.]",
      },
      {
        title: "[Key feature two]",
        description: "[Describe the workflow it improves or the friction it removes.]",
      },
      {
        title: "[Key feature three]",
        description: "[Describe the integration, insight or automation it enables.]",
      },
      {
        title: "[Key feature four]",
        description: "[Describe the reliability, security or support benefit.]",
      },
    ],
    screenshots: [
      {
        src: "/products/product-01-shot-1.svg",
        alt: "Placeholder dashboard screenshot for Product One",
        caption: "Screenshot placeholder 1",
      },
      {
        src: "/products/product-01-shot-2.svg",
        alt: "Placeholder detail view screenshot for Product One",
        caption: "Screenshot placeholder 2",
      },
    ],
    metaDescription:
      "[Product meta description placeholder — summarise the product and its value in one sentence.]",
  },
  {
    slug: "product-two",
    name: "Product Two",
    tagline: "[One-line value statement for your second SaaS product.]",
    status: "beta",
    placeholder: true,
    cover: "/products/product-02.svg",
    coverAlt: "Abstract placeholder artwork for Product Two",
    tags: ["SaaS", "Beta", "Placeholder"],
    overview: [
      "[Product overview placeholder — describe the customer, the core problem and what makes this product useful.]",
      "[Second paragraph placeholder — add a short note about the product's current status or roadmap.]",
    ],
    features: [
      {
        title: "[Key feature one]",
        description: "[What it does and why it matters to the people using it.]",
      },
      {
        title: "[Key feature two]",
        description: "[Describe the workflow it improves or the friction it removes.]",
      },
      {
        title: "[Key feature three]",
        description: "[Describe the integration, insight or automation it enables.]",
      },
      {
        title: "[Key feature four]",
        description: "[Describe the reliability, security or support benefit.]",
      },
    ],
    screenshots: [
      {
        src: "/products/product-02-shot-1.svg",
        alt: "Placeholder dashboard screenshot for Product Two",
        caption: "Screenshot placeholder 1",
      },
      {
        src: "/products/product-02-shot-2.svg",
        alt: "Placeholder detail view screenshot for Product Two",
        caption: "Screenshot placeholder 2",
      },
    ],
    metaDescription:
      "[Product meta description placeholder — summarise the product and its value in one sentence.]",
  },
  {
    slug: "product-three",
    name: "Product Three",
    tagline: "[One-line value statement for an upcoming SaaS product.]",
    status: "coming-soon",
    placeholder: true,
    cover: "/products/product-03.svg",
    coverAlt: "Abstract placeholder artwork for Product Three",
    tags: ["SaaS", "Coming soon", "Placeholder"],
    overview: [
      "[Product overview placeholder — describe the idea, the audience and the problem it will solve.]",
      "[Second paragraph placeholder — explain what is being developed and how readers can follow progress.]",
    ],
    features: [
      {
        title: "[Planned feature one]",
        description: "[What it will do and why it matters.]",
      },
      {
        title: "[Planned feature two]",
        description: "[Describe the workflow it will improve.]",
      },
      {
        title: "[Planned feature three]",
        description: "[Describe the integration, insight or automation it will enable.]",
      },
      {
        title: "[Planned feature four]",
        description: "[Describe the reliability, security or support benefit.]",
      },
    ],
    screenshots: [
      {
        src: "/products/product-03-shot-1.svg",
        alt: "Placeholder concept screenshot for Product Three",
        caption: "Screenshot placeholder 1",
      },
      {
        src: "/products/product-03-shot-2.svg",
        alt: "Placeholder concept detail screenshot for Product Three",
        caption: "Screenshot placeholder 2",
      },
    ],
    metaDescription:
      "[Product meta description placeholder — summarise the upcoming product and its value.]",
  },
];

const svProducts: SiteContent["products"] = [
  {
    slug: "product-one",
    name: "Produkt ett",
    tagline: "[En rad som förklarar värdet med din första SaaS-produkt.]",
    status: "live",
    placeholder: true,
    cover: "/products/product-01.svg",
    coverAlt: "Abstrakt platshållarbild för Produkt ett",
    tags: ["SaaS", "Platshållare"],
    overview: [
      "[Översikt över produkten — förklara problemet den löser, vem den är för och vilket resultat den ger.]",
      "[Andra stycket — lägg till positionering, sammanhang eller ett kort belägg. Håll det koncist och konkret.]",
    ],
    features: [
      {
        title: "[Nyckelfunktion ett]",
        description: "[Vad den gör och varför den är viktig för användarna.]",
      },
      {
        title: "[Nyckelfunktion två]",
        description: "[Beskriv arbetsflödet den förbättrar eller friktionen den tar bort.]",
      },
      {
        title: "[Nyckelfunktion tre]",
        description: "[Beskriv integrationen, insikten eller automatiseringen den möjliggör.]",
      },
      {
        title: "[Nyckelfunktion fyra]",
        description: "[Beskriv nyttan inom tillförlitlighet, säkerhet eller support.]",
      },
    ],
    screenshots: [
      {
        src: "/products/product-01-shot-1.svg",
        alt: "Platshållarbild av översikten för Produkt ett",
        caption: "Skärmbildsplatshållare 1",
      },
      {
        src: "/products/product-01-shot-2.svg",
        alt: "Platshållarbild av detaljvyn för Produkt ett",
        caption: "Skärmbildsplatshållare 2",
      },
    ],
    metaDescription:
      "[Metabeskrivning för produkten — sammanfatta produkten och dess värde i en mening.]",
  },
  {
    slug: "product-two",
    name: "Produkt två",
    tagline: "[En rad som förklarar värdet med din andra SaaS-produkt.]",
    status: "beta",
    placeholder: true,
    cover: "/products/product-02.svg",
    coverAlt: "Abstrakt platshållarbild för Produkt två",
    tags: ["SaaS", "Beta", "Platshållare"],
    overview: [
      "[Översikt över produkten — beskriv kunden, kärnproblemet och vad som gör produkten användbar.]",
      "[Andra stycket — lägg till en kort notis om produktens nuvarande status eller plan.]",
    ],
    features: [
      {
        title: "[Nyckelfunktion ett]",
        description: "[Vad den gör och varför den är viktig för användarna.]",
      },
      {
        title: "[Nyckelfunktion två]",
        description: "[Beskriv arbetsflödet den förbättrar eller friktionen den tar bort.]",
      },
      {
        title: "[Nyckelfunktion tre]",
        description: "[Beskriv integrationen, insikten eller automatiseringen den möjliggör.]",
      },
      {
        title: "[Nyckelfunktion fyra]",
        description: "[Beskriv nyttan inom tillförlitlighet, säkerhet eller support.]",
      },
    ],
    screenshots: [
      {
        src: "/products/product-02-shot-1.svg",
        alt: "Platshållarbild av översikten för Produkt två",
        caption: "Skärmbildsplatshållare 1",
      },
      {
        src: "/products/product-02-shot-2.svg",
        alt: "Platshållarbild av detaljvyn för Produkt två",
        caption: "Skärmbildsplatshållare 2",
      },
    ],
    metaDescription:
      "[Metabeskrivning för produkten — sammanfatta produkten och dess värde i en mening.]",
  },
  {
    slug: "product-three",
    name: "Produkt tre",
    tagline: "[En rad som förklarar värdet med en kommande SaaS-produkt.]",
    status: "coming-soon",
    placeholder: true,
    cover: "/products/product-03.svg",
    coverAlt: "Abstrakt platshållarbild för Produkt tre",
    tags: ["SaaS", "Kommande", "Platshållare"],
    overview: [
      "[Översikt över produkten — beskriv idén, målgruppen och problemet den ska lösa.]",
      "[Andra stycket — förklara vad som utvecklas och hur läsaren kan följa arbetet.]",
    ],
    features: [
      {
        title: "[Planerad funktion ett]",
        description: "[Vad den ska göra och varför den är viktig.]",
      },
      {
        title: "[Planerad funktion två]",
        description: "[Beskriv arbetsflödet den ska förbättra.]",
      },
      {
        title: "[Planerad funktion tre]",
        description: "[Beskriv integrationen, insikten eller automatiseringen den ska möjliggöra.]",
      },
      {
        title: "[Planerad funktion fyra]",
        description: "[Beskriv nyttan inom tillförlitlighet, säkerhet eller support.]",
      },
    ],
    screenshots: [
      {
        src: "/products/product-03-shot-1.svg",
        alt: "Platshållarbild av konceptet för Produkt tre",
        caption: "Skärmbildsplatshållare 1",
      },
      {
        src: "/products/product-03-shot-2.svg",
        alt: "Platshållarbild av konceptdetaljen för Produkt tre",
        caption: "Skärmbildsplatshållare 2",
      },
    ],
    metaDescription:
      "[Metabeskrivning för den kommande produkten — sammanfatta idén och dess värde.]",
  },
];

export const content: Record<Locale, SiteContent> = {
  en: {
    meta: {
      title: "myfasset — Software that ships. Products that last.",
      description:
        "myfasset is a Swedish software company in Halmstad building and running SaaS products. Est. 2021. Clear design, reliable engineering and steady releases.",
      ogAlt: "myfasset — Swedish software company in Halmstad",
      ogImage: "/og-en.png",
      keywords: [
        "myfasset",
        "SaaS company Sweden",
        "software company Halmstad",
        "SaaS development",
        "Swedish software",
      ],
    },
    common: {
      skipToContent: "Skip to content",
      home: "myfasset — home",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      toggleTheme: "Toggle colour theme",
      language: "Language",
      primaryNav: "Primary navigation",
      logoAlt: "myfasset logo",
      newTab: "(opens in a new tab)",
    },
    languageSwitch: {
      label: "Language",
      en: "English",
      sv: "Svenska",
      toEn: "Switch to English",
      toSv: "Switch to Swedish",
    },
    nav: [
      { label: "About", href: "#about" },
      { label: "Strengths", href: "#strengths" },
      { label: "Products", href: "#products" },
      { label: "Process", href: "#process" },
      { label: "Leadership", href: "#leadership" },
      { label: "Contact", href: "#contact" },
    ],
    header: {
      cta: "Get in touch",
    },
    hero: {
      kicker: "Software company · Halmstad, Sweden",
      titleTop: "Software that ships.",
      titleBottom: "Products that last.",
      subheading:
        "We design, build and run SaaS products for teams that depend on them every day.",
      primaryCta: "View our products",
      secondaryCta: "Contact us",
      meta: "Est. 2021 · Halmstad, Sweden",
    },
    about: {
      kicker: "About us",
      title: "Who we are",
      body: [
        "myfasset is a software company based in Halmstad, Sweden. Since 2021 we have designed, built and shipped SaaS products for businesses and teams that rely on cloud software every day.",
        "We believe good software should be clear, dependable and easy to adopt. Our work is shaped by a Scandinavian approach to design: simple, functional and free of clutter.",
      ],
      missionLabel: "Our mission",
      mission:
        "To turn good ideas into reliable software products that people and teams are glad to use.",
      stats: [
        { value: "2021", label: "Founded" },
        { value: "SaaS", label: "Our focus" },
        { value: "SE", label: "Halmstad, Sweden" },
      ],
    },
    strengths: {
      kicker: "What we do",
      title: "Build. Ship. Run.",
      intro: "One team, from the first sketch to the product in production.",
      items: [
        {
          number: "01",
          title: "Build",
          description:
            "We design and engineer SaaS products from the first idea to a polished, working application, with clean architecture and a clear user experience.",
        },
        {
          number: "02",
          title: "Ship",
          description:
            "Small, frequent releases get real value to customers sooner. We automate testing and delivery so shipping is routine, not an event.",
        },
        {
          number: "03",
          title: "Run",
          description:
            "We operate what we build: monitoring, updates and support, so our products stay fast, available and secure over time.",
        },
      ],
    },
    principles: {
      kicker: "How we work",
      title: "Our principles",
      intro: "Four commitments that shape every product decision.",
      items: [
        {
          title: "Clarity",
          description:
            "Simple products and plain language. If it needs a manual, we keep refining it.",
          icon: "clarity",
        },
        {
          title: "Reliability",
          description:
            "Software people can depend on, every day, at any scale.",
          icon: "reliability",
        },
        {
          title: "Security",
          description:
            "Privacy and security are designed in from the start, not added later.",
          icon: "security",
        },
        {
          title: "Momentum",
          description:
            "We ship in small steps, learn quickly and keep improving.",
          icon: "momentum",
        },
      ],
    },
    productsSection: {
      kicker: "Our products",
      title: "Built in-house. Made to be used.",
      intro:
        "A focused portfolio of SaaS products, built and run by the same team. The three entries below are placeholders for real products.",
      placeholderNote:
        "Placeholder products — replace names, copy, tags and imagery in the content file.",
      learnMore: "Learn more",
      statusLabels: {
        live: "Live",
        beta: "Beta",
        "coming-soon": "Coming soon",
      },
      placeholderBadge: "Placeholder",
    },
    products: enProducts,
    productPage: {
      eyebrow: "Product",
      back: "Back to products",
      overview: "Overview",
      features: "Key features",
      screenshots: "Screenshots",
      details: "Product details",
      status: "Status",
      tags: "Tags",
      ctaTitle: "Want to know more?",
      ctaText:
        "This product page is a template. Real product details will be published when the product is ready.",
      ctaButton: "Talk to us",
      placeholderNote:
        "Placeholder content — replace this page in the content file.",
    },
    process: {
      kicker: "Our approach",
      title: "From idea to live product",
      intro: "A steady path from first conversation to continuous improvement.",
      steps: [
        {
          title: "Discover",
          description: "Understand the problem, the users and the goal.",
        },
        {
          title: "Design",
          description:
            "Shape the experience with simple, testable prototypes.",
        },
        {
          title: "Build",
          description:
            "Engineer in short cycles with automated quality checks.",
        },
        {
          title: "Launch",
          description: "Release safely, measure and listen to feedback.",
        },
        {
          title: "Improve",
          description: "Iterate continuously based on real usage.",
        },
      ],
    },
    why: {
      kicker: "Why myfasset",
      title: "What you can expect from us",
      intro:
        "A small, senior team with a long-term view and no unnecessary layers.",
      items: [
        {
          title: "A focused partner",
          description:
            "We do one thing well: building and shipping SaaS products.",
        },
        {
          title: "Nordic quality",
          description:
            "Careful design, honest communication and long-term thinking.",
        },
        {
          title: "Transparent delivery",
          description:
            "Regular releases and clear progress, with no surprises.",
        },
        {
          title: "Built to last",
          description:
            "Maintainable code and products designed to grow with you.",
        },
      ],
    },
    tech: {
      kicker: "Technology",
      title: "A pragmatic stack",
      description:
        "Tools selected for reliability, speed and long-term maintainability. Every product gets the stack it actually needs.",
      items: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Docker",
        "GitHub Actions",
        "Terraform",
        "Vercel",
      ],
    },
    leadership: {
      kicker: "Leadership",
      title: "A team close to the work",
      intro: "Small team, clear ownership and short lines of communication.",
      name: "Ashraful Alam",
      role: "CEO & Founder",
      location: "Halmstad, Sweden",
      bio: "[Short bio placeholder — introduce Ashraful's background, what he focuses on at myfasset and how to reach him.]",
      photoAlt: "Portrait of Ashraful Alam",
    },
    contact: {
      kicker: "Contact",
      title: "Let's build something together",
      intro:
        "Tell us what you are working on. We will get back to you as soon as we can.",
      companyLabel: "Company",
      companyName: "myfasset",
      companyMeta: "Software company · Est. 2021",
      addressLabel: "Address",
      addressCountry: "Sweden",
      emailLabel: "Email",
      phoneLabel: "Phone",
      mapLabel: "Open in Google Maps",
      formNote:
        "Template form — connect an email or form service before launch.",
      form: {
        formTitle: "Send a message",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "you@company.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell us about your project or idea.",
        submit: "Send message",
        sending: "Sending…",
        successTitle: "Thanks for reaching out.",
        successText:
          "Your message has been received. We will get back to you as soon as we can.",
        sendAnother: "Send another message",
        requiredHint: "All fields are required.",
        errors: {
          name: "Please enter your name (at least 2 characters).",
          email: "Please enter a valid email address.",
          message: "Please tell us a little more (at least 10 characters).",
        },
      },
    },
    footer: {
      tagline: "Software that ships. Products that last.",
      exploreLabel: "Explore",
      contactLabel: "Contact",
      addressLabel: "Address",
      copyright: "© 2026 myfasset",
      location: "Halmstad, Sweden",
    },
  },

  sv: {
    meta: {
      title: "myfasset — Mjukvara som levererar. Produkter som håller.",
      description:
        "myfasset är ett svenskt mjukvaruföretag i Halmstad som bygger och driver SaaS-produkter. Grundat 2021. Tydlig design, pålitlig teknik och regelbundna releaser.",
      ogAlt: "myfasset — svenskt mjukvaruföretag i Halmstad",
      ogImage: "/og-sv.png",
      keywords: [
        "myfasset",
        "SaaS-företag Sverige",
        "mjukvaruföretag Halmstad",
        "SaaS-utveckling",
        "svensk mjukvara",
      ],
    },
    common: {
      skipToContent: "Hoppa till innehållet",
      home: "myfasset — startsida",
      openMenu: "Öppna meny",
      closeMenu: "Stäng meny",
      toggleTheme: "Byt färgtema",
      language: "Språk",
      primaryNav: "Huvudmeny",
      logoAlt: "myfasset logotyp",
      newTab: "(öppnas i en ny flik)",
    },
    languageSwitch: {
      label: "Språk",
      en: "Engelska",
      sv: "Svenska",
      toEn: "Byt till engelska",
      toSv: "Byt till svenska",
    },
    nav: [
      { label: "Om oss", href: "#about" },
      { label: "Styrkor", href: "#strengths" },
      { label: "Produkter", href: "#products" },
      { label: "Process", href: "#process" },
      { label: "Ledarskap", href: "#leadership" },
      { label: "Kontakt", href: "#contact" },
    ],
    header: {
      cta: "Hör av dig",
    },
    hero: {
      kicker: "Mjukvaruföretag · Halmstad, Sverige",
      titleTop: "Mjukvara som levererar.",
      titleBottom: "Produkter som håller.",
      subheading:
        "Vi utformar, bygger och driver SaaS-produkter för team som är beroende av dem varje dag.",
      primaryCta: "Se våra produkter",
      secondaryCta: "Kontakta oss",
      meta: "Grundat 2021 · Halmstad, Sverige",
    },
    about: {
      kicker: "Om oss",
      title: "Vilka vi är",
      body: [
        "myfasset är ett mjukvaruföretag i Halmstad. Sedan 2021 har vi utformat, byggt och levererat SaaS-produkter till företag och team som använder molnbaserad mjukvara varje dag.",
        "Vi tror att bra mjukvara ska vara tydlig, pålitlig och lätt att ta till sig. Vårt arbete formas av en skandinavisk syn på design: enkel, funktionell och fri från krångel.",
      ],
      missionLabel: "Vårt uppdrag",
      mission:
        "Att förvandla goda idéer till pålitliga mjukvaruprodukter som människor och team gärna använder.",
      stats: [
        { value: "2021", label: "Grundat" },
        { value: "SaaS", label: "Vårt fokus" },
        { value: "SE", label: "Halmstad, Sverige" },
      ],
    },
    strengths: {
      kicker: "Det här gör vi",
      title: "Bygga. Leverera. Driva.",
      intro: "Ett team, från första skiss till produkt i drift.",
      items: [
        {
          number: "01",
          title: "Bygga",
          description:
            "Vi utformar och utvecklar SaaS-produkter från första idén till en polerad, fungerande applikation, med ren arkitektur och en tydlig användarupplevelse.",
        },
        {
          number: "02",
          title: "Leverera",
          description:
            "Små, täta releaser ger kunderna verkligt värde snabbare. Vi automatiserar testning och leverans så att releaser blir rutin, inte en händelse.",
        },
        {
          number: "03",
          title: "Driva",
          description:
            "Vi driver det vi bygger: övervakning, uppdateringar och support, så att våra produkter förblir snabba, tillgängliga och säkra över tid.",
        },
      ],
    },
    principles: {
      kicker: "Så arbetar vi",
      title: "Våra principer",
      intro: "Fyra åtaganden som formar varje produktbeslut.",
      items: [
        {
          title: "Tydlighet",
          description:
            "Enkla produkter och klart språk. Behövs en manual fortsätter vi att förfina.",
          icon: "clarity",
        },
        {
          title: "Pålitlighet",
          description:
            "Mjukvara som människor kan lita på, varje dag och i alla skalor.",
          icon: "reliability",
        },
        {
          title: "Säkerhet",
          description:
            "Integritet och säkerhet byggs in från start, inte i efterhand.",
          icon: "security",
        },
        {
          title: "Framfart",
          description:
            "Vi levererar i små steg, lär oss snabbt och förbättrar hela tiden.",
          icon: "momentum",
        },
      ],
    },
    productsSection: {
      kicker: "Våra produkter",
      title: "Byggda in-house. Skapade att användas.",
      intro:
        "En fokuserad portfölj av SaaS-produkter, byggda och drivna av samma team. De tre nedan är platshållare för riktiga produkter.",
      placeholderNote:
        "Platshållarprodukter — ersätt namn, text, taggar och bilder i innehållsfilen.",
      learnMore: "Läs mer",
      statusLabels: {
        live: "Live",
        beta: "Beta",
        "coming-soon": "Kommande",
      },
      placeholderBadge: "Platshållare",
    },
    products: svProducts,
    productPage: {
      eyebrow: "Produkt",
      back: "Tillbaka till produkter",
      overview: "Översikt",
      features: "Nyckelfunktioner",
      screenshots: "Skärmbilder",
      details: "Produktinformation",
      status: "Status",
      tags: "Taggar",
      ctaTitle: "Vill du veta mer?",
      ctaText:
        "Den här produktsidan är en mall. Riktig produktinformation publiceras när produkten är redo.",
      ctaButton: "Prata med oss",
      placeholderNote:
        "Platshållarinnehåll — uppdatera den här sidan i innehållsfilen.",
    },
    process: {
      kicker: "Vårt arbetssätt",
      title: "Från idé till lanserad produkt",
      intro: "En stadig väg från första samtal till kontinuerlig förbättring.",
      steps: [
        {
          title: "Upptäcka",
          description: "Förstå problemet, användarna och målet.",
        },
        {
          title: "Designa",
          description:
            "Forma upplevelsen med enkla, testbara prototyper.",
        },
        {
          title: "Bygga",
          description:
            "Utveckla i korta cykler med automatiserade kvalitetskontroller.",
        },
        {
          title: "Lansera",
          description: "Släpp tryggt, mät och lyssna på feedback.",
        },
        {
          title: "Förbättra",
          description: "Iterera kontinuerligt utifrån verklig användning.",
        },
      ],
    },
    why: {
      kicker: "Varför myfasset",
      title: "Det kan du förvänta dig av oss",
      intro:
        "Ett litet, erfaret team med långsiktig blick och utan onödiga lager.",
      items: [
        {
          title: "En fokuserad partner",
          description:
            "Vi gör en sak bra: bygger och levererar SaaS-produkter.",
        },
        {
          title: "Nordisk kvalitet",
          description:
            "Omsorgsfull design, ärlig kommunikation och långsiktigt tänkande.",
        },
        {
          title: "Transparent leverans",
          description:
            "Regelbundna releaser och tydliga framsteg, utan överraskningar.",
        },
        {
          title: "Byggt för att hålla",
          description:
            "Underhållbar kod och produkter som växer med dig.",
        },
      ],
    },
    tech: {
      kicker: "Teknik",
      title: "En pragmatisk teknikstack",
      description:
        "Verktyg valda för pålitlighet, fart och långsiktigt underhåll. Varje produkt får den stack den faktiskt behöver.",
      items: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Docker",
        "GitHub Actions",
        "Terraform",
        "Vercel",
      ],
    },
    leadership: {
      kicker: "Ledarskap",
      title: "Ett team nära arbetet",
      intro: "Litet team, tydligt ansvar och korta beslutsvägar.",
      name: "Ashraful Alam",
      role: "VD och grundare",
      location: "Halmstad, Sverige",
      bio: "[Kort biografi — presentera Ashrafuls bakgrund, vad han fokuserar på på myfasset och hur man når honom.]",
      photoAlt: "Porträtt av Ashraful Alam",
    },
    contact: {
      kicker: "Kontakt",
      title: "Låt oss bygga något tillsammans",
      intro:
        "Berätta vad du arbetar med. Vi återkommer så snart vi kan.",
      companyLabel: "Företag",
      companyName: "myfasset",
      companyMeta: "Mjukvaruföretag · Grundat 2021",
      addressLabel: "Adress",
      addressCountry: "Sverige",
      emailLabel: "E-post",
      phoneLabel: "Telefon",
      mapLabel: "Öppna i Google Maps",
      formNote:
        "Mallformulär — koppla till en e-post- eller formulärtjänst före lansering.",
      form: {
        formTitle: "Skicka ett meddelande",
        nameLabel: "Namn",
        namePlaceholder: "Ditt namn",
        emailLabel: "E-post",
        emailPlaceholder: "du@foretag.se",
        messageLabel: "Meddelande",
        messagePlaceholder: "Berätta om ditt projekt eller din idé.",
        submit: "Skicka meddelande",
        sending: "Skickar…",
        successTitle: "Tack för ditt meddelande.",
        successText:
          "Vi har tagit emot ditt meddelande och återkommer så snart vi kan.",
        sendAnother: "Skicka ett till meddelande",
        requiredHint: "Alla fält är obligatoriska.",
        errors: {
          name: "Ange ditt namn (minst 2 tecken).",
          email: "Ange en giltig e-postadress.",
          message: "Berätta lite mer (minst 10 tecken).",
        },
      },
    },
    footer: {
      tagline: "Mjukvara som levererar. Produkter som håller.",
      exploreLabel: "Utforska",
      contactLabel: "Kontakt",
      addressLabel: "Adress",
      copyright: "© 2026 myfasset",
      location: "Halmstad, Sverige",
    },
  },
};

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
