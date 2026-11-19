import type { Locale, SiteContent } from "@/lib/types";

/**
 * ---------------------------------------------------------------------------
 * EDITABLE SITE CONTENT
 * ---------------------------------------------------------------------------
 * Everything shown on the website lives in this one file: navigation, copy,
 * products, strengths, principles, process, tech stack, leadership and contact
 * details. Update English and Swedish together. Each product uses a cover image
 * and links straight to its live site.
 * ---------------------------------------------------------------------------
 */

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://myfasset.se"
).replace(/\/$/, "");

export const site = {
  name: "MYFASSET",
  url: siteUrl,
  founded: "2021",
  logo: "/myfasset-logo.png",
  logoAlt: "MYFASSET logo",
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
    slug: "saloon-sweden",
    name: "Saloon Sweden",
    tagline:
      "A calm oasis in the heart of the city — Scandinavian precision, care for detail and time for you.",
    status: "live",
    cover: "/products/saloon-sweden.jpg",
    coverAlt:
      "Saloon Sweden website showing a monochrome salon interior and the heading “The art of feeling good”",
    tags: ["Website", "Online booking", "Hair salon"],
    url: "https://saloon-sweden.vercel.app/",
  },
  {
    slug: "my-sweet-desserts",
    name: "My Sweet Desserts",
    tagline:
      "Small-batch celebration cakes, baked in Brunswick — order online, then pick up boxed and chilled.",
    status: "live",
    cover: "/products/my-sweet-desserts.jpg",
    coverAlt:
      "My Sweet Desserts website with a pink gradient card and the heading “A cake worth clearing your calendar for”",
    tags: ["Website", "Online ordering", "Bakery"],
    url: "https://my-sweet-desserts.onrender.com/",
  },
];

const svProducts: SiteContent["products"] = [
  {
    slug: "saloon-sweden",
    name: "Saloon Sweden",
    tagline:
      "En lugn oas i hjärtat av staden — skandinavisk precision, omtanke om detaljer och tid för dig.",
    status: "live",
    cover: "/products/saloon-sweden.jpg",
    coverAlt:
      "Saloon Swedens webbplats med en monokrom salongsmiljö och rubriken “The art of feeling good”",
    tags: ["Webbplats", "Onlinebokning", "Frisörsalong"],
    url: "https://saloon-sweden.vercel.app/",
  },
  {
    slug: "my-sweet-desserts",
    name: "My Sweet Desserts",
    tagline:
      "Tårtor bakade i små satser i Brunswick — beställ online och hämta, packade och kylda.",
    status: "live",
    cover: "/products/my-sweet-desserts.jpg",
    coverAlt:
      "My Sweet Desserts webbplats med ett rosa gradientkort och rubriken “A cake worth clearing your calendar for”",
    tags: ["Webbplats", "Onlinebeställning", "Bageri"],
    url: "https://my-sweet-desserts.onrender.com/",
  },
];

export const content: Record<Locale, SiteContent> = {
  en: {
    meta: {
      title: "MYFASSET — Software that ships. Products that last.",
      description:
        "MYFASSET is a Swedish software company in Halmstad building and running SaaS products. Est. 2021. Clear design, reliable engineering and steady releases.",
      ogAlt: "MYFASSET — Swedish software company in Halmstad",
      ogImage: "/og-en.png",
      keywords: [
        "MYFASSET",
        "SaaS company Sweden",
        "software company Halmstad",
        "SaaS development",
        "Swedish software",
      ],
    },
    common: {
      skipToContent: "Skip to content",
      home: "MYFASSET — home",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      toggleTheme: "Toggle colour theme",
      language: "Language",
      primaryNav: "Primary navigation",
      logoAlt: "MYFASSET logo",
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
        "MYFASSET is a software company based in Halmstad, Sweden. Since 2021 we have designed, built and shipped SaaS products for businesses and teams that rely on cloud software every day.",
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
        "A focused portfolio of digital products, built and run by the same team. Visit each live site to see it in action.",
      visitSite: "Visit website",
      statusLabels: {
        live: "Live",
        beta: "Beta",
        "coming-soon": "Coming soon",
      },
    },
    products: enProducts,
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
      kicker: "Why MYFASSET",
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
      bio: "As the Founder & CEO of MYFASSET, my vision is to build innovative technology solutions that empower businesses to grow and succeed in the digital world. We focus on SaaS development, web applications, mobile apps and custom software solutions. Our mission is to simplify business operations through smart, scalable and user-friendly technology. At MYFASSET, we turn ideas into digital solutions for a smarter future.",
      photoAlt: "Portrait of Ashraful Alam",
    },
    contact: {
      kicker: "Contact",
      title: "Let's build something together",
      intro:
        "Tell us what you are working on. We will get back to you as soon as we can.",
      companyLabel: "Company",
      companyName: "MYFASSET",
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
      copyright: "© 2026 MYFASSET",
      location: "Halmstad, Sweden",
    },
  },

  sv: {
    meta: {
      title: "MYFASSET — Mjukvara som levererar. Produkter som håller.",
      description:
        "MYFASSET är ett svenskt mjukvaruföretag i Halmstad som bygger och driver SaaS-produkter. Grundat 2021. Tydlig design, pålitlig teknik och regelbundna releaser.",
      ogAlt: "MYFASSET — svenskt mjukvaruföretag i Halmstad",
      ogImage: "/og-sv.png",
      keywords: [
        "MYFASSET",
        "SaaS-företag Sverige",
        "mjukvaruföretag Halmstad",
        "SaaS-utveckling",
        "svensk mjukvara",
      ],
    },
    common: {
      skipToContent: "Hoppa till innehållet",
      home: "MYFASSET — startsida",
      openMenu: "Öppna meny",
      closeMenu: "Stäng meny",
      toggleTheme: "Byt färgtema",
      language: "Språk",
      primaryNav: "Huvudmeny",
      logoAlt: "MYFASSET logotyp",
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
        "MYFASSET är ett mjukvaruföretag i Halmstad. Sedan 2021 har vi utformat, byggt och levererat SaaS-produkter till företag och team som använder molnbaserad mjukvara varje dag.",
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
        "En fokuserad portfölj av digitala produkter, byggda och drivna av samma team. Besök varje live-sajt för att se den i praktiken.",
      visitSite: "Besök webbplatsen",
      statusLabels: {
        live: "Live",
        beta: "Beta",
        "coming-soon": "Kommande",
      },
    },
    products: svProducts,
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
      kicker: "Varför MYFASSET",
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
      bio: "Som grundare och VD för MYFASSET är min vision att utveckla innovativa teknologilösningar som hjälper företag att växa och lyckas i den digitala världen. Vi fokuserar på SaaS-utveckling, webbapplikationer, mobilappar och skräddarsydda mjukvarulösningar. Vårt uppdrag är att förenkla affärsverksamheten genom smart, skalbar och användarvänlig teknik. På MYFASSET förvandlar vi idéer till digitala lösningar för en smartare framtid.",
      photoAlt: "Porträtt av Ashraful Alam",
    },
    contact: {
      kicker: "Kontakt",
      title: "Låt oss bygga något tillsammans",
      intro:
        "Berätta vad du arbetar med. Vi återkommer så snart vi kan.",
      companyLabel: "Företag",
      companyName: "MYFASSET",
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
      copyright: "© 2026 MYFASSET",
      location: "Halmstad, Sverige",
    },
  },
};

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
