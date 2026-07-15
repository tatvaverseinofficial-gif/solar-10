"use client";

import { Pencil, Plus, Trash2, UploadCloud } from "lucide-react";
import { useAdminMode, useAdminMutation } from "@/components/admin/AdminModeProvider";
import { useMockSave } from "@/components/admin/MockSaveBanner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ActionToast({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div className="fixed bottom-6 right-6 z-[80] max-w-sm rounded-xl border border-solar-yellow/40 bg-white px-4 py-3 text-sm font-medium text-solar-navy shadow-lg">
      {message}
    </div>
  );
}

export function AdminAddButton({
  label,
  table,
}: {
  label: string;
  table: string;
}) {
  const { canEdit } = useAdminMode();
  const { run } = useAdminMutation();
  const { message, trigger } = useMockSave();

  return (
    <>
      <ActionToast message={message} />
      <Button
        size="sm"
        variant="accent"
        disabled={!canEdit}
        title={
          canEdit
            ? `Add via mock Supabase (${table})`
            : "View-only — set DEMO=false in .env to edit"
        }
        onClick={async () => {
          const res = await run((supabase) =>
            supabase.from(table).insert({
              title: `New ${table.slice(0, -1)}`,
              created_at: new Date().toISOString(),
            })
          );
          trigger(res.message);
        }}
      >
        <Plus className="h-4 w-4" /> {label}
      </Button>
    </>
  );
}

export function AdminUploadButton({ label = "Upload" }: { label?: string }) {
  const { canEdit } = useAdminMode();
  const { run } = useAdminMutation();
  const { message, trigger } = useMockSave();

  return (
    <>
      <ActionToast message={message} />
      <Button
        size="sm"
        variant="accent"
        disabled={!canEdit}
        title={
          canEdit
            ? "Upload via mock Supabase storage"
            : "View-only — set DEMO=false in .env to edit"
        }
        onClick={async () => {
          const res = await run((supabase) =>
            supabase.storage.from("media").upload(`upload-${Date.now()}.jpg`, null)
          );
          trigger(res.message);
        }}
      >
        <UploadCloud className="h-4 w-4" /> {label}
      </Button>
    </>
  );
}

export function AdminRowActions({
  table,
  id,
  showDelete = true,
}: {
  table: string;
  id: string;
  showDelete?: boolean;
}) {
  const { canEdit } = useAdminMode();
  const { run } = useAdminMutation();
  const { message, trigger } = useMockSave();

  return (
    <>
      <ActionToast message={message} />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          disabled={!canEdit}
          title={canEdit ? "Edit (mock Supabase)" : "View-only mode"}
          className={cn(
            "inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground",
            canEdit
              ? "hover:bg-muted hover:text-solar-navy"
              : "cursor-not-allowed opacity-40"
          )}
          onClick={async () => {
            const res = await run((supabase) =>
              supabase.from(table).update({ id, updated_note: "Edited in admin" })
            );
            trigger(res.message);
          }}
        >
          <Pencil className="h-4 w-4" />
        </button>
        {showDelete && (
          <button
            type="button"
            disabled={!canEdit}
            title={canEdit ? "Delete (mock Supabase)" : "View-only mode"}
            className={cn(
              "inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground",
              canEdit
                ? "hover:bg-muted hover:text-destructive"
                : "cursor-not-allowed opacity-40"
            )}
            onClick={async () => {
              const res = await run((supabase) => supabase.from(table).delete(id));
              trigger(res.message);
            }}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        )}
      </div>
    </>
  );
}
