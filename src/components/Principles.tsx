import { SectionHeading } from "@/components/SectionHeading";
import { getContent, type Locale } from "@/lib/i18n";
import type { PrincipleIcon as PrincipleIconName } from "@/lib/types";
import { revealDelay } from "@/lib/utils";

function PrincipleIcon({
  name,
  className,
}: {
  name: PrincipleIconName;
  className?: string;
}) {
  const shared = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  if (name === "clarity") {
    return (
      <svg {...shared}>
        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  if (name === "reliability") {
    return (
      <svg {...shared}>
        <path d="M12 3 4.5 6v5.3c0 4.6 3.2 8.2 7.5 9.7 4.3-1.5 7.5-5.1 7.5-9.7V6L12 3Z" />
        <path d="m8.5 12 2.3 2.3 4.7-4.8" />
      </svg>
    );
  }

  if (name === "security") {
    return (
      <svg {...shared}>
        <rect x="4.5" y="10" width="15" height="10.5" rx="2" />
        <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
        <path d="M12 14v2.5" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path d="M4 16.5 9.5 11l3.5 3.5L20 7.5" />
      <path d="M14.5 7.5H20V13" />
    </svg>
  );
}

export function Principles({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return (
    <section
      id="principles"
      aria-labelledby="principles-title"
      className="section-pad scroll-mt-24 bg-surface"
    >
      <div className="container-page">
        <div data-reveal>
          <SectionHeading
            id="principles-title"
            kicker={t.principles.kicker}
            title={t.principles.title}
            intro={t.principles.intro}
          />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {t.principles.items.map((item, index) => (
            <article
              key={item.title}
              className="card relative overflow-hidden p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-navy/5 sm:p-8"
              data-reveal
              style={revealDelay(index)}
            >
              <span
                aria-hidden="true"
                className="block h-1.5 w-10 rounded-full bg-gold"
              />
              <div className="mt-6 flex items-center gap-3">
                <PrincipleIcon
                  name={item.icon}
                  className="h-5 w-5 shrink-0 text-gold"
                />
                <h3 className="font-display text-xl font-bold text-heading">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
