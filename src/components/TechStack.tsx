import { getContent, type Locale } from "@/lib/i18n";

export function TechStack({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return (
    <section
      id="technology"
      aria-labelledby="technology-title"
      className="pb-16 scroll-mt-24 sm:pb-20 lg:pb-24"
    >
      <div className="container-page">
        <div
          className="card relative overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-10"
          data-reveal
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1 bg-gold"
          />
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
            <div>
              <p className="kicker">{t.tech.kicker}</p>
              <h2
                id="technology-title"
                className="mt-2 font-display text-2xl font-extrabold tracking-tight text-heading sm:text-3xl"
              >
                {t.tech.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                {t.tech.description}
              </p>
            </div>

            <ul className="flex flex-wrap gap-2.5">
              {t.tech.items.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-md border border-line bg-page px-3 py-1.5 text-sm font-medium text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="block h-1.5 w-1.5 bg-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
