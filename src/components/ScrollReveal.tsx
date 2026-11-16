"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Adds a gentle fade-up to every [data-reveal] element when it enters the
 * viewport. Re-runs on client-side navigation so product pages and language
 * switches are observed too. Content stays visible without JavaScript and with
 * reduced motion.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    nodes.forEach((node) => {
      node.classList.add("is-visible");
      // Let elements below the fold animate in when they are reached.
      window.requestAnimationFrame(() => {
        if (node.getBoundingClientRect().top > window.innerHeight) {
          node.classList.remove("is-visible");
        }
        observer.observe(node);
      });
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
