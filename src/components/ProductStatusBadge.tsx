import type { ProductStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const statusStyles: Record<ProductStatus, string> = {
  live: "bg-gold text-navy-deep",
  beta: "bg-navy text-gold-light ring-1 ring-white/25",
  "coming-soon": "bg-white text-navy ring-1 ring-navy/10",
};

export function ProductStatusBadge({
  status,
  label,
  className,
}: {
  status: ProductStatus;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wider shadow-sm",
        statusStyles[status],
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "block h-1.5 w-1.5",
          status === "live" ? "bg-navy-deep" : "bg-gold",
        )}
      />
      {label}
    </span>
  );
}
