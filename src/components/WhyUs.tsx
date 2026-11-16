import { SectionHeading } from "@/components/SectionHeading";
import { getContent, type Locale } from "@/lib/i18n";
import { revealDelay } from "@/lib/utils";

export function WhyUs({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return (
    <section
      id="why"
      aria-labelledby="why-title"
      className="section-pad scroll-mt-24"
    >
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div data-reveal>
            <SectionHeading
              id="why-title"
              kicker={t.why.kicker}
              title={t.why.title}
              intro={t.why.intro}
            />
          </div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {t.why.items.map((item, index) => (
              <div
                key={item.title}
                className="border-t border-line pt-5"
                data-reveal
                style={revealDelay(index)}
              >
                <span
                  aria-hidden="true"
                  className="block h-3 w-3 bg-gold"
                />
                <h3 className="mt-4 font-display text-lg font-bold text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
