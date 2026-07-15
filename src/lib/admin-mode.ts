/**
 * Admin access mode.
 *
 * DEMO=true  → view-only admin (safe for portfolios / client demos)
 * DEMO=false → edit mode with mocked Supabase persistence layer
 *
 * Set in `.env` (server) — passed to the client via AdminModeProvider.
 */
export function isDemoMode(): boolean {
  const value = process.env.DEMO ?? process.env.NEXT_PUBLIC_DEMO ?? "true";
  return ["true", "1", "yes"].includes(value.trim().toLowerCase());
}

export function canEditAdmin(): boolean {
  return !isDemoMode();
}

export function getAdminModeLabel(isDemo: boolean): string {
  return isDemo ? "View only" : "Edit mode";
}

export function getAdminModeDescription(isDemo: boolean): string {
  return isDemo
    ? "Demo mode is on. Admin is read-only — set DEMO=false in .env to enable editing with the mock Supabase layer."
    : "Edit mode is on. Changes call the mock Supabase client (no live database yet). Connect real Supabase credentials when ready.";
}
