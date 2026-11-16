import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/content";
import { getContent, type Locale } from "@/lib/i18n";
import { revealDelay } from "@/lib/utils";

export function Contact({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const addressLine = `${site.address.postalCode} ${site.address.city}, ${t.contact.addressCountry}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-pad scroll-mt-24 bg-surface"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <div data-reveal>
              <SectionHeading
                id="contact-title"
                kicker={t.contact.kicker}
                title={t.contact.title}
                intro={t.contact.intro}
              />
            </div>

            <div
              className="relative mt-8 overflow-hidden rounded-xl bg-navy p-6 text-white sm:p-8"
              data-reveal
              style={revealDelay(1)}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full border border-gold/25"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-8 top-8 h-3 w-3 bg-gold"
              />

              <div className="relative">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-gold-light">
                  {t.contact.companyLabel}
                </p>
                <p className="mt-2 font-display text-2xl font-extrabold text-white">
                  {t.contact.companyName}
                </p>
                <p className="mt-1 text-sm text-white/65">
                  {t.contact.companyMeta}
                </p>

                <div className="mt-6 border-t border-white/15 pt-6">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-gold-light">
                    {t.contact.addressLabel}
                  </p>
                  <address className="mt-2 text-sm not-italic leading-relaxed text-white/85">
                    {site.address.street}
                    <br />
                    {addressLine}
                  </address>
                  <a
                    href={site.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light underline decoration-gold/40 underline-offset-4 hover:decoration-gold-light"
                  >
                    {t.contact.mapLabel}
                    <span className="sr-only"> {t.common.newTab}</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M14 4h6v6M20 4l-9 9M10 5H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5" />
                    </svg>
                  </a>
                </div>

                <div className="mt-6 grid gap-5 border-t border-white/15 pt-6 sm:grid-cols-2">
                  <div>
                    <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-gold-light">
                      {t.contact.emailLabel}
                    </p>
                    <p className="mt-2 text-sm text-white/85">{site.email}</p>
                  </div>
                  <div>
                    <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-gold-light">
                      {t.contact.phoneLabel}
                    </p>
                    <p className="mt-2 text-sm text-white/85">{site.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-reveal style={revealDelay(2)}>
            <ContactForm copy={t.contact.form} note={t.contact.formNote} />
          </div>
        </div>
      </div>
    </section>
  );
}
