import { SectionHeading } from "@/components/SectionHeading";
import { getContent, type Locale } from "@/lib/i18n";
import { revealDelay } from "@/lib/utils";

export function Strengths({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return (
    <section
      id="strengths"
      aria-labelledby="strengths-title"
      className="section-pad scroll-mt-24"
    >
      <div className="container-page">
        <div data-reveal>
          <SectionHeading
            id="strengths-title"
            kicker={t.strengths.kicker}
            title={t.strengths.title}
            intro={t.strengths.intro}
          />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
          {t.strengths.items.map((item, index) => (
            <article
              key={item.number}
              className="card group relative overflow-hidden p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-navy/5 sm:p-7"
              data-reveal
              style={revealDelay(index)}
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1 bg-gold transition-colors group-hover:bg-gold-light"
              />
              <span
                aria-hidden="true"
                className="font-display text-sm font-extrabold tracking-[0.16em] text-gold-ink"
              >
                {item.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-heading sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
