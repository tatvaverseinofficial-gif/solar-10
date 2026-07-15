"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export function WhatsAppButton() {
  const href = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hi Aarohan Solar, I’d like a solar consultation."
  )}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1fad55] text-white shadow-[0_12px_32px_rgba(31,173,85,0.35)] transition active:scale-95 sm:bottom-7 sm:right-7 sm:h-14 sm:w-auto sm:overflow-hidden sm:pr-0 sm:hover:pr-5 group"
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
        right: "max(1rem, env(safe-area-inset-right))",
      }}
      aria-label="Chat on WhatsApp"
    >
      <span className="flex h-14 w-14 items-center justify-center">
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </span>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 sm:inline-block sm:group-hover:max-w-[140px] sm:group-hover:opacity-100">
        Chat with us
      </span>
    </Link>
  );
}
