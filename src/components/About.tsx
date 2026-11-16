import { SectionHeading } from "@/components/SectionHeading";
import { getContent, type Locale } from "@/lib/i18n";
import { revealDelay } from "@/lib/utils";

export function About({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-pad scroll-mt-24"
    >
      <div className="container-page">
        <div data-reveal>
          <SectionHeading
            id="about-title"
            kicker={t.about.kicker}
            title={t.about.title}
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          <div
            className="space-y-5 text-base leading-relaxed text-ink sm:text-lg"
            data-reveal
            style={revealDelay(1)}
          >
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div
            className="card relative overflow-hidden p-6 sm:p-8"
            data-reveal
            style={revealDelay(2)}
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1 bg-gold"
            />
            <p className="kicker">{t.about.missionLabel}</p>
            <p className="mt-4 font-display text-xl font-bold leading-snug text-heading sm:text-2xl">
              {t.about.mission}
            </p>
            <span
              aria-hidden="true"
              className="mt-6 block h-1 w-12 rounded-full bg-gold"
            />
          </div>
        </div>

        <dl
          className="mt-12 grid overflow-hidden rounded-xl border border-white/10 bg-navy text-white shadow-sm sm:grid-cols-3 sm:divide-x sm:divide-white/15"
          data-reveal
        >
          {t.about.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col px-6 py-7 text-center ${
                index > 0 ? "border-t border-white/15 sm:border-t-0" : ""
              }`}
            >
              <dt className="order-2 mt-1.5 text-sm font-medium text-white/70">
                {stat.label}
              </dt>
              <dd className="font-display text-3xl font-extrabold tracking-tight text-gold-light sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
