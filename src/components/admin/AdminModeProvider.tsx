"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { getSupabaseClient, type MockSupabaseClient } from "@/lib/supabase/client";

type AdminModeContextValue = {
  isDemo: boolean;
  canEdit: boolean;
  supabase: MockSupabaseClient | null;
};

const AdminModeContext = createContext<AdminModeContextValue>({
  isDemo: true,
  canEdit: false,
  supabase: null,
});

export function AdminModeProvider({
  isDemo,
  children,
}: {
  isDemo: boolean;
  children: ReactNode;
}) {
  const value = useMemo<AdminModeContextValue>(
    () => ({
      isDemo,
      canEdit: !isDemo,
      supabase: isDemo ? null : getSupabaseClient(),
    }),
    [isDemo]
  );

  return (
    <AdminModeContext.Provider value={value}>{children}</AdminModeContext.Provider>
  );
}

export function useAdminMode() {
  return useContext(AdminModeContext);
}

/** Convenience hook for mock Supabase mutations with demo guard */
export function useAdminMutation() {
  const { canEdit, isDemo, supabase } = useAdminMode();

  const run = useCallback(
    async <T,>(
      action: (client: MockSupabaseClient) => Promise<T>,
      fallbackMessage = "Action blocked in demo (view-only) mode."
    ): Promise<{ ok: boolean; result?: T; message: string }> => {
      if (!canEdit || !supabase) {
        return { ok: false, message: fallbackMessage };
      }
      try {
        const result = await action(supabase);
        return {
          ok: true,
          result,
          message:
            "Saved via mock Supabase client. Connect NEXT_PUBLIC_SUPABASE_URL to persist for real.",
        };
      } catch (error) {
        return {
          ok: false,
          message: error instanceof Error ? error.message : "Mock Supabase action failed.",
        };
      }
    },
    [canEdit, supabase]
  );

  return { run, canEdit, isDemo, supabase };
}
