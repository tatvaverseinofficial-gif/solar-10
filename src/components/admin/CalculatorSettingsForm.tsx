"use client";

import { Save } from "lucide-react";
import { AdminCard } from "@/components/admin/AdminCard";
import { useAdminMode, useAdminMutation } from "@/components/admin/AdminModeProvider";
import { MockSaveBanner, useMockSave } from "@/components/admin/MockSaveBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const tariffDefaults = [
  { key: "residential", label: "Residential", rate: 8.5, costPerKw: 65000 },
  { key: "commercial", label: "Commercial", rate: 10.5, costPerKw: 55000 },
  { key: "industrial", label: "Industrial", rate: 9.2, costPerKw: 48000 },
  { key: "institutional", label: "Institutional", rate: 9.0, costPerKw: 52000 },
];

export function CalculatorSettingsForm() {
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
          supabase.from("calculator_settings").upsert({
            id: "defaults",
            yield: form.get("yield-factor"),
            panelWattage: form.get("panel-wattage"),
            offset: form.get("offset"),
          })
        );
        trigger(res.message);
      }}
      className="space-y-6"
    >
      <MockSaveBanner message={message} />

      <AdminCard padded>
        <h2 className="font-display text-base font-bold text-solar-navy">
          Tariff Rate by Property Type
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Used to estimate monthly units consumed from a customer&apos;s bill amount (₹ per unit).
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {tariffDefaults.map((item) => (
            <div key={item.key} className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor={`rate-${item.key}`}>{item.label} rate (₹/unit)</Label>
                <Input
                  id={`rate-${item.key}`}
                  type="number"
                  step="0.1"
                  defaultValue={item.rate}
                  readOnly={!canEdit}
                  disabled={!canEdit}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor={`cost-${item.key}`}>{item.label} cost / kW (₹)</Label>
                <Input
                  id={`cost-${item.key}`}
                  type="number"
                  step="1000"
                  defaultValue={item.costPerKw}
                  readOnly={!canEdit}
                  disabled={!canEdit}
                />
              </div>
            </div>
          ))}
        </div>
      </AdminCard>

      <AdminCard padded>
        <h2 className="font-display text-base font-bold text-solar-navy">
          Generation & Sizing
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Core assumptions used to size a system and estimate yield across the calculator.
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          <div className="space-y-1.5">
            <Label htmlFor="yield-factor">Yield factor (kWh / kW / year)</Label>
            <Input
              id="yield-factor"
              name="yield-factor"
              type="number"
              step="10"
              defaultValue={1450}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="panel-wattage">Panel wattage (W)</Label>
            <Input
              id="panel-wattage"
              name="panel-wattage"
              type="number"
              step="5"
              defaultValue={550}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="offset">Target consumption offset (%)</Label>
            <Input
              id="offset"
              name="offset"
              type="number"
              step="1"
              defaultValue={80}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
        </div>
      </AdminCard>

      <AdminCard padded>
        <h2 className="font-display text-base font-bold text-solar-navy">
          Subsidy (PM Surya Ghar style, illustrative)
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          For demo purposes only — always defer to the official government portal for live subsidy rules.
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          <div className="space-y-1.5">
            <Label htmlFor="subsidy-2kw">Cap up to 2 kW (₹)</Label>
            <Input
              id="subsidy-2kw"
              type="number"
              step="1000"
              defaultValue={30000}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="subsidy-3kw">Cap up to 3 kW (₹)</Label>
            <Input
              id="subsidy-3kw"
              type="number"
              step="1000"
              defaultValue={60000}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="subsidy-max">Cap above 3 kW (₹)</Label>
            <Input
              id="subsidy-max"
              type="number"
              step="1000"
              defaultValue={78000}
              readOnly={!canEdit}
              disabled={!canEdit}
            />
          </div>
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
