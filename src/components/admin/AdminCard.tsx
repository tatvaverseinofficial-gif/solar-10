import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function AdminCard({
  children,
  className,
  padded = false,
}: {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-white shadow-sm",
        padded && "p-5 md:p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
