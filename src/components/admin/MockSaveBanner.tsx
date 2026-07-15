"use client";

import { useCallback, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const DEFAULT_MESSAGE =
  "Saved via mock Supabase client. Connect real Supabase credentials to persist permanently.";

export function useMockSave() {
  const [message, setMessage] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const trigger = useCallback((msg: string = DEFAULT_MESSAGE) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMessage(msg);
    timeoutRef.current = setTimeout(() => setMessage(null), 4500);
  }, []);

  return { message, trigger };
}

export function MockSaveBanner({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div className="mb-6 flex items-start gap-2.5 rounded-xl border border-solar-yellow/40 bg-solar-cream px-4 py-3 text-sm font-medium text-solar-navy">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-solar-gold" />
      <span>{message}</span>
    </div>
  );
}
