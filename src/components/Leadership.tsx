import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/content";
import { getContent, type Locale } from "@/lib/i18n";

export function Leadership({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-title"
      className="section-pad scroll-mt-24 bg-surface"
    >
      <div className="container-page">
        <div data-reveal>
          <SectionHeading
            id="leadership-title"
            kicker={t.leadership.kicker}
            title={t.leadership.title}
            intro={t.leadership.intro}
          />
        </div>

        <div
          className="card relative mt-10 overflow-hidden p-6 sm:p-9 lg:p-10"
          data-reveal
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1 bg-gold"
          />
          <div className="grid items-center gap-8 sm:grid-cols-[auto_1fr] sm:gap-10">
            <div className="relative mx-auto w-fit sm:mx-0">
              <div className="rounded-full p-1.5 ring-1 ring-gold/60">
                <Image
                  src={site.ceoPhoto}
                  alt={t.leadership.photoAlt}
                  width={600}
                  height={600}
                  className="h-44 w-44 rounded-full object-cover ring-4 ring-navy sm:h-48 sm:w-48"
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute -bottom-1 -right-1 h-5 w-5 bg-gold"
              />
            </div>

            <div>
              <p className="kicker">{t.leadership.kicker}</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-heading sm:text-3xl">
                {t.leadership.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-gold-ink">
                {t.leadership.role}
              </p>
              <p className="mt-1 text-sm text-muted">
                {t.leadership.location}
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {t.leadership.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
