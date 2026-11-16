import Link from "next/link";
import { getContent, type Locale } from "@/lib/i18n";

function HeroOrnaments() {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 760 760"
        className="pointer-events-none absolute -right-40 top-1/2 hidden w-[720px] -translate-y-1/2 md:block lg:-right-24 lg:w-[780px]"
      >
        <circle
          cx="420"
          cy="360"
          r="270"
          fill="none"
          stroke="#C8962A"
          strokeWidth="1.5"
          opacity="0.55"
        />
        <circle
          cx="420"
          cy="360"
          r="205"
          fill="none"
          stroke="#F3D77A"
          strokeWidth="1"
          opacity="0.22"
        />
        <circle
          cx="420"
          cy="360"
          r="340"
          fill="none"
          stroke="#C8962A"
          strokeWidth="1"
          opacity="0.18"
        />
        <path
          d="M190 525A270 270 0 0 1 650 210"
          fill="none"
          stroke="#F3D77A"
          strokeWidth="2"
          opacity="0.35"
        />
        <rect x="596" y="92" width="28" height="28" fill="#C8962A" opacity="0.9" />
        <rect x="634" y="130" width="18" height="18" fill="#C8962A" opacity="0.65" />
        <rect x="660" y="158" width="10" height="10" fill="#F3D77A" opacity="0.7" />
        <rect x="76" y="624" width="16" height="16" fill="#C8962A" opacity="0.5" />
      </svg>

      <svg
        aria-hidden="true"
        viewBox="0 0 220 220"
        className="pointer-events-none absolute -right-8 top-14 w-44 opacity-70 sm:hidden"
      >
        <circle
          cx="130"
          cy="110"
          r="88"
          fill="none"
          stroke="#C8962A"
          strokeWidth="1.5"
          opacity="0.55"
        />
        <rect x="160" y="32" width="16" height="16" fill="#C8962A" />
        <rect x="182" y="54" width="10" height="10" fill="#F3D77A" opacity="0.7" />
      </svg>
    </>
  );
}

export function Hero({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <HeroOrnaments />
      <div className="container-page relative z-10 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="max-w-3xl">
          <p className="kicker text-gold-light">{t.hero.kicker}</p>
          <h1 className="mt-5 font-display text-[clamp(2.65rem,7.2vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-white">
            {t.hero.titleTop}
            <br />
            {t.hero.titleBottom}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#c9d4ea] sm:mt-7 sm:text-lg">
            {t.hero.subheading}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={`/${locale}#products`} className="btn btn-primary">
              {t.hero.primaryCta}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href={`/${locale}#contact`}
              className="btn btn-outline-light"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-3 text-sm text-white/55">
            <span aria-hidden="true" className="block h-2 w-2 bg-gold" />
            <span>{t.hero.meta}</span>
          </div>
        </div>
      </div>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 block h-px bg-gold/25"
      />
    </section>
  );
}


