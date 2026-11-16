import { SectionHeading } from "@/components/SectionHeading";
import { getContent, type Locale } from "@/lib/i18n";
import { revealDelay } from "@/lib/utils";

export function Process({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="section-pad scroll-mt-24"
    >
      <div className="container-page">
        <div data-reveal>
          <SectionHeading
            id="process-title"
            kicker={t.process.kicker}
            title={t.process.title}
            intro={t.process.intro}
          />
        </div>

        <ol className="relative mt-12 grid gap-8 md:grid-cols-5 md:gap-4">
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-6 top-4 w-px bg-gold/70 md:bottom-auto md:left-[10%] md:right-[10%] md:top-6 md:h-0.5 md:w-auto"
          />

          {t.process.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex gap-5 md:block"
              data-reveal
              style={revealDelay(index)}
            >
              <span
                aria-hidden="true"
                className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-navy-deep font-display text-lg font-extrabold text-gold-light md:mx-auto"
              >
                {index + 1}
              </span>
              <div className="pb-1 md:mt-6 md:text-center">
                <h3 className="font-display text-lg font-bold text-heading sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted md:mx-auto">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
