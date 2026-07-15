"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Wrench,
  Newspaper,
  Quote,
  Images,
  HelpCircle,
  Calculator,
  Users,
  FolderOpen,
  Settings,
  Sun,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/services", label: "Services", icon: Wrench },
  { href: "/admin/blogs", label: "Blogs", icon: Newspaper },
  { href: "/admin/testimonials", label: "Testimonials", icon: Quote },
  { href: "/admin/gallery", label: "Gallery", icon: Images },
  { href: "/admin/faqs", label: "FAQs", icon: HelpCircle },
  { href: "/admin/calculator", label: "Calculator Settings", icon: Calculator },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/media", label: "Media Library", icon: FolderOpen },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open admin menu"
        className="fixed left-4 top-4 z-40 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-solar-navy text-white shadow-sm lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-solar-navy-deep/50 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-solar-navy-deep transition-transform duration-300 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between gap-2 border-b border-white/10 px-5">
          <Link href="/admin" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-solar-yellow text-solar-navy-deep">
              <Sun className="h-4.5 w-4.5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-base font-bold tracking-tight text-white">
              Aarohan<span className="text-solar-yellow"> Admin</span>
            </span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close admin menu"
            className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
          {navItems.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-solar-yellow text-solar-navy-deep shadow-sm"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon className="h-4.5 w-4.5 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-5 py-4">
          <p className="text-xs text-white/40">Aarohan Solar Console</p>
          <p className="text-xs text-white/40">Mode controlled by DEMO in .env</p>
        </div>
      </aside>
    </>
  );
}
