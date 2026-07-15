import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "accent" | "outline" | "secondary" | "soft";
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-primary text-primary-foreground",
    accent: "bg-accent text-accent-foreground shadow-sm",
    outline: "border border-border/80 bg-white/70 text-foreground backdrop-blur-sm",
    secondary: "bg-secondary text-secondary-foreground",
    soft: "bg-solar-green-soft text-solar-green",
  };
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em]",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };
