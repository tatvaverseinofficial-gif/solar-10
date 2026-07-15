"use client";

import { Save } from "lucide-react";
import { company } from "@/data/company";
import { AdminCard } from "@/components/admin/AdminCard";
import { useAdminMode, useAdminMutation } from "@/components/admin/AdminModeProvider";
import { MockSaveBanner, useMockSave } from "@/components/admin/MockSaveBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function CompanySettingsForm() {
  const { canEdit, isDemo } = useAdminMode();
  const { run } = useAdminMutation();
  const { message, trigger } = useMockSave();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!canEdit) {
          trigger("View-only mode — set DEMO=false in .env to enable saving.");
          return;
        }
        const form = new FormData(e.currentTarget);
        const res = await run((supabase) =>
          supabase.from("settings").upsert({
            id: "company",
            name: form.get("company-name"),
            legalName: form.get("legal-name"),
            tagline: form.get("tagline"),
            description: form.get("description"),
            phone: form.get("phone"),
            email: form.get("email"),
          })
        );
        trigger(res.message);
      }}
      className="space-y-6"
    >
      <MockSaveBanner message={message} />

      <AdminCard padded>
        <h2 className="font-display text-base font-bold text-solar-navy">Company Profile</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Basic identity shown across the site&apos;s header, footer, and metadata.
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="company-name">Display name</Label>
            <Input
              id="company-name"
              name="company-name"
              defaultValue={company.name}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="legal-name">Legal name</Label>
            <Input
              id="legal-name"
              name="legal-name"
              defaultValue={company.legalName}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="tagline">Tagline</Label>
            <Input
              id="tagline"
              name="tagline"
              defaultValue={company.tagline}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={company.description}
              rows={3}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
        </div>
      </AdminCard>

      <AdminCard padded>
        <h2 className="font-display text-base font-bold text-solar-navy">Contact Details</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Used across contact forms, header, and footer.
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              defaultValue={company.phone}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              defaultValue={company.email}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="whatsapp">WhatsApp number</Label>
            <Input
              id="whatsapp"
              name="whatsapp"
              defaultValue={company.whatsapp}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="gst">GST number</Label>
            <Input
              id="gst"
              name="gst"
              defaultValue={company.gst}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
        </div>
      </AdminCard>

      <AdminCard padded>
        <h2 className="font-display text-base font-bold text-solar-navy">Registered Address</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="addr-line1">Address line 1</Label>
            <Input
              id="addr-line1"
              defaultValue={company.address.line1}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="addr-line2">Address line 2</Label>
            <Input
              id="addr-line2"
              defaultValue={company.address.line2}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              defaultValue={company.address.city}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              defaultValue={company.address.state}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="pincode">Pincode</Label>
            <Input
              id="pincode"
              defaultValue={company.address.pincode}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              defaultValue={company.address.country}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
        </div>
      </AdminCard>

      <AdminCard padded>
        <h2 className="font-display text-base font-bold text-solar-navy">Social Links</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {Object.entries(company.social).map(([key, value]) => (
            <div key={key} className="space-y-1.5">
              <Label htmlFor={`social-${key}`} className="capitalize">
                {key}
              </Label>
              <Input
                id={`social-${key}`}
                defaultValue={value}
                readOnly={!canEdit}
                disabled={!canEdit}
              />
            </div>
          ))}
        </div>
      </AdminCard>

      <div className="flex justify-end">
        <Button type="submit" variant="accent" disabled={!canEdit}>
          <Save className="h-4 w-4" />
          {isDemo ? "Save disabled (view only)" : "Save via mock Supabase"}
        </Button>
      </div>
    </form>
  );
}
