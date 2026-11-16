"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname() || "";
  const swedish = pathname.startsWith("/sv");
  const copy = swedish
    ? {
        kicker: "404",
        title: "Sidan hittades inte",
        text: "Sidan du letar efter finns inte eller har flyttats.",
        home: "Till startsidan",
        contact: "Kontakta oss",
      }
    : {
        kicker: "404",
        title: "Page not found",
        text: "The page you are looking for does not exist or has moved.",
        home: "Back to home",
        contact: "Contact us",
      };
  const locale = swedish ? "sv" : "en";

  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <p className="kicker">{copy.kicker}</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-heading sm:text-5xl">
            {copy.title}
          </h1>
          <span
            aria-hidden="true"
            className="mx-auto mt-5 block h-1.5 w-16 rounded-full bg-gold"
          />
          <p className="mt-5 text-base leading-relaxed text-muted">
            {copy.text}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={`/${locale}`} className="btn btn-primary">
              {copy.home}
            </Link>
            <Link
              href={`/${locale}#contact`}
              className="btn border border-line bg-surface text-heading hover:border-gold"
            >
              {copy.contact}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
