import { createMetadata } from "@/lib/seo";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminAddButton, AdminRowActions } from "@/components/admin/AdminActions";
import { Badge } from "@/components/ui/badge";
import { isDemoMode } from "@/lib/admin-mode";

export const metadata = createMetadata({
  title: "Users",
  description: "Manage admin console users for Aarohan Solar.",
  noIndex: true,
});

const users = [
  { id: "1", name: "Vikram Shah", email: "vikram@aarohansolar.in", role: "Owner", status: "Active", lastLogin: "2026-07-15" },
  { id: "2", name: "Priya Nair", email: "priya@aarohansolar.in", role: "Editor", status: "Active", lastLogin: "2026-07-14" },
  { id: "3", name: "Karthik Rao", email: "karthik@aarohansolar.in", role: "Editor", status: "Active", lastLogin: "2026-07-12" },
  { id: "4", name: "Sneha Kulkarni", email: "sneha@aarohansolar.in", role: "O&M Staff", status: "Active", lastLogin: "2026-07-10" },
  { id: "5", name: "Amit Deshmukh", email: "amit@aarohansolar.in", role: "Viewer", status: "Invited", lastLogin: "—" },
  { id: "6", name: "Rohan Kapoor", email: "rohan@aarohansolar.in", role: "Viewer", status: "Suspended", lastLogin: "2026-05-02" },
];

const statusStyles: Record<string, string> = {
  Active: "bg-primary text-primary-foreground",
  Invited: "bg-solar-cream text-solar-gold",
  Suspended: "bg-destructive/10 text-destructive",
};

export default function AdminUsersPage() {
  const isDemo = isDemoMode();

  return (
    <div>
      <AdminPageHeader
        title="Users"
        description={
          isDemo
            ? "View-only mock user list. Set DEMO=false in .env to enable invite / edit via mock Supabase."
            : "Edit mode enabled. User mutations use the mock Supabase layer (auth not wired yet)."
        }
        action={<AdminAddButton label="Invite User" table="users" />}
      />

      <AdminCard>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Email</th>
                <th className="px-5 py-3 font-medium">Role</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Last Login</th>
                <th className="px-5 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                  <td className="px-5 py-3 font-medium text-foreground">{user.name}</td>
                  <td className="px-5 py-3 text-muted-foreground">{user.email}</td>
                  <td className="px-5 py-3">
                    <Badge variant="outline">{user.role}</Badge>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[user.status]}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{user.lastLogin}</td>
                  <td className="px-5 py-3">
                    <AdminRowActions table="users" id={user.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminCard>
    </div>
  );
}
