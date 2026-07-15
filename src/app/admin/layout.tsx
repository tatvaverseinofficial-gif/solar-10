import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminModeProvider } from "@/components/admin/AdminModeProvider";
import { AdminModeBanner, AdminModeBadge } from "@/components/admin/AdminModeBanner";
import { isDemoMode } from "@/lib/admin-mode";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Admin",
  description: "Aarohan Solar internal admin console.",
  noIndex: true,
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDemo = isDemoMode();

  return (
    <AdminModeProvider isDemo={isDemo}>
      <div className="min-h-screen bg-muted/40">
        <AdminSidebar />

        <div className="lg:pl-64">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-white/90 px-4 backdrop-blur-md md:px-8">
            <div className="flex items-center gap-3 pl-12 lg:pl-0">
              <div>
                <span className="font-display text-base font-bold tracking-tight text-solar-navy md:text-lg">
                  Admin
                </span>
                <span className="ml-2 hidden text-xs text-muted-foreground sm:inline">
                  Aarohan Solar console
                </span>
              </div>
              <AdminModeBadge />
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-solar-navy"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to site</span>
            </Link>
          </header>

          <main className="px-4 py-8 md:px-8">
            <AdminModeBanner />
            {children}
          </main>
        </div>
      </div>
    </AdminModeProvider>
  );
}
