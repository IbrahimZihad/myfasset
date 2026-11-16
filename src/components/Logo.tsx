import Image from "next/image";
import { site } from "@/data/content";
import { cn } from "@/lib/utils";

interface LogoProps {
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

export function Logo({
  alt,
  priority = false,
  className,
  imageClassName,
}: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-white ring-1 ring-navy/5",
        className,
      )}
    >
      <Image
        src={site.logo}
        alt={alt}
        width={320}
        height={169}
        priority={priority}
        className={cn(imageClassName)}
      />
    </span>
  );
}
