import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/data/content";
import { getContent, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const addressLine = `${site.address.postalCode} ${site.address.city}, ${t.contact.addressCountry}`;

  return (
    <footer className="bg-navy-deep text-white">
      <div className="h-1 w-full bg-gold" aria-hidden="true" />
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.7fr_1fr] lg:gap-14">
          <div>
            <Logo
              alt={t.common.logoAlt}
              className="rounded-xl p-4 shadow-lg shadow-black/10 sm:p-5"
              imageClassName="h-auto w-[200px] max-w-full sm:w-[240px]"
            />
            <p className="mt-6 max-w-xs font-display text-xl font-bold leading-snug text-white">
              {t.footer.tagline}
            </p>
            <span
              className="mt-5 block h-1 w-12 rounded-full bg-gold"
              aria-hidden="true"
            />
          </div>

          <nav aria-label={t.common.primaryNav}>
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-gold-light">
              {t.footer.exploreLabel}
            </h2>
            <ul className="mt-5 space-y-3">
              {t.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="group inline-flex items-start gap-2.5 text-sm text-white/75 transition-colors hover:text-gold-light"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 block h-1.5 w-1.5 shrink-0 bg-gold"
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-gold-light">
              {t.footer.contactLabel}
            </h2>
            <address className="mt-5 space-y-5 text-sm not-italic text-white/75">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  {t.footer.addressLabel}
                </p>
                <p className="mt-1.5 leading-relaxed">
                  {site.address.street}
                  <br />
                  {addressLine}
                </p>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-gold-light underline decoration-gold/50 underline-offset-4 hover:decoration-gold-light"
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
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  {t.contact.emailLabel}
                </p>
                <a className="mt-1.5 block hover:text-gold-light" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  {t.contact.phoneLabel}
                </p>
                <a className="mt-1.5 block hover:text-gold-light" href={`tel:${site.phone}`}>
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  {t.contact.companyLabel}
                </p>
                <p className="mt-1.5">{t.contact.companyMeta}</p>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.location}</p>
        </div>
      </div>
    </footer>
  );
}

