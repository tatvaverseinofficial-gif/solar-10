import type { LucideIcon } from "lucide-react";

export function StatCard({
  label,
  value,
  icon: Icon,
  hint,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  hint?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-solar-cream text-solar-navy">
          <Icon className="h-4.5 w-4.5" />
        </span>
      </div>
      <p className="mt-3 font-display text-2xl font-bold text-solar-navy">{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
