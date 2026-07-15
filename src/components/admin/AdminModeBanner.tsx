"use client";

import { Eye, PenLine, Database } from "lucide-react";
import { useAdminMode } from "@/components/admin/AdminModeProvider";
import { getAdminModeDescription } from "@/lib/admin-mode";
import { cn } from "@/lib/utils";

export function AdminModeBanner({ className }: { className?: string }) {
  const { isDemo, canEdit } = useAdminMode();

  return (
    <div
      className={cn(
        "mb-6 flex flex-wrap items-start gap-3 rounded-xl border px-4 py-3",
        isDemo
          ? "border-border bg-muted/70 text-muted-foreground"
          : "border-solar-yellow/40 bg-solar-cream text-solar-navy",
        className
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide",
          isDemo
            ? "bg-white text-muted-foreground border border-border"
            : "bg-solar-navy text-white"
        )}
      >
        {isDemo ? (
          <>
            <Eye className="h-3.5 w-3.5" /> View only
          </>
        ) : (
          <>
            <PenLine className="h-3.5 w-3.5" /> Edit mode
          </>
        )}
      </span>
      <p className="min-w-0 flex-1 text-sm leading-relaxed">
        {getAdminModeDescription(isDemo)}
        {!isDemo && (
          <span className="mt-1 flex items-center gap-1.5 text-xs opacity-80">
            <Database className="h-3.5 w-3.5" />
            Persistence: mock Supabase{canEdit ? " · ready for real credentials" : ""}
          </span>
        )}
      </p>
    </div>
  );
}

export function AdminModeBadge() {
  const { isDemo } = useAdminMode();
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide",
        isDemo
          ? "bg-muted text-muted-foreground"
          : "bg-solar-cream text-solar-navy"
      )}
    >
      {isDemo ? (
        <>
          <Eye className="h-3 w-3" /> View only
        </>
      ) : (
        <>
          <PenLine className="h-3 w-3" /> Editable
        </>
      )}
    </span>
  );
}
