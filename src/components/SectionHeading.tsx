import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  kicker: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  id,
  kicker,
  title,
  intro,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className={cn("kicker", light && "text-gold-light")}>{kicker}</p>
      <h2
        id={id}
        className={cn("section-title", light && "text-white")}
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={cn("gold-rule", align === "center" && "mx-auto")}
      />
      {intro ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
            align === "center" && "mx-auto",
            light && "text-white/75",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
