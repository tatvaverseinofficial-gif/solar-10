"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, PiggyBank, Sun, Timer } from "lucide-react";
import { calculateSolarSavings } from "@/lib/calculator";
import { formatCurrency } from "@/lib/utils";
import type { PropertyType, RoofType } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(4500);
  const [propertyType, setPropertyType] = useState<PropertyType>("residential");
  const [roofType, setRoofType] = useState<RoofType>("rcc");

  const result = useMemo(
    () => calculateSolarSavings({ monthlyBill, propertyType, roofType }),
    [monthlyBill, propertyType, roofType]
  );

  const billProgress = Math.min(((monthlyBill - 1000) / (50000 - 1000)) * 100, 100);

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      <div className="rounded-[1.75rem] border border-solar-line bg-white p-6 shadow-[var(--shadow-md)] md:p-9">
        <p className="eyebrow text-solar-blue">Demo calculator</p>
        <h2 className="mt-3 font-display text-2xl font-bold text-solar-navy md:text-3xl">
          Estimate your solar savings
        </h2>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
          Illustrative only — not a formal quotation. Final design follows a site survey.
        </p>

        <div className="mt-9 space-y-7">
          <div>
            <div className="mb-2 flex items-end justify-between">
              <Label htmlFor="bill">Monthly electricity bill</Label>
              <span className="font-display text-lg font-bold text-solar-navy">
                {formatCurrency(monthlyBill)}
              </span>
            </div>
            <Input
              id="bill"
              type="number"
              min={500}
              max={500000}
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value) || 0)}
            />
            <div className="relative mt-4">
              <div className="h-2 overflow-hidden rounded-full bg-solar-mist">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-solar-yellow to-solar-gold transition-all duration-300"
                  style={{ width: `${billProgress}%` }}
                />
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={Math.min(monthlyBill, 50000)}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="absolute inset-0 h-2 w-full cursor-pointer opacity-0"
                aria-label="Adjust monthly bill"
              />
            </div>
          </div>

          <div>
            <Label>Property type</Label>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              {(
                [
                  ["residential", "Residential"],
                  ["commercial", "Commercial"],
                  ["industrial", "Industrial"],
                  ["institutional", "Institutional"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setPropertyType(value)}
                  className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition ${
                    propertyType === value
                      ? "border-solar-navy bg-solar-navy text-white shadow-[var(--shadow-sm)]"
                      : "border-solar-line bg-white text-muted-foreground hover:border-solar-blue/35 hover:text-solar-navy"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label>Roof type</Label>
            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {(
                [
                  ["rcc", "RCC"],
                  ["metal", "Metal"],
                  ["tiled", "Tiled"],
                  ["ground", "Ground"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRoofType(value)}
                  className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition ${
                    roofType === value
                      ? "border-solar-yellow bg-solar-cream text-solar-navy"
                      : "border-solar-line bg-white text-muted-foreground hover:border-solar-yellow/50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.75rem] bg-solar-navy p-6 text-white shadow-[var(--shadow-lg)] md:p-9">
        <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-solar-yellow/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-solar-green/20 blur-3xl" />

        <p className="eyebrow relative text-solar-yellow">Your estimate</p>
        <div className="relative mt-6 grid gap-3.5 sm:grid-cols-2">
          <ResultCard icon={Sun} label="Recommended size" value={`${result.systemSizeKw} kW`} />
          <ResultCard
            icon={PiggyBank}
            label="Est. annual savings"
            value={formatCurrency(result.estimatedSavingsAnnual)}
          />
          <ResultCard icon={Timer} label="Est. payback" value={`${result.paybackYears} years`} />
          <ResultCard
            icon={Leaf}
            label="CO₂ reduced / year"
            value={`${result.co2ReductionTons} tonnes`}
          />
        </div>

        <div className="relative mt-6 space-y-3.5 rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-sm backdrop-blur-sm">
          <Row label="Monthly savings (est.)" value={formatCurrency(result.estimatedSavingsMonthly)} />
          <Row label="Panels required (approx.)" value={`${result.panelsRequired} × 550W`} />
          <Row label="Roof area needed" value={`${result.roofAreaRequired} sq. ft.`} />
          <Row label="Indicative system cost" value={formatCurrency(result.estimatedCost)} />
          <AnimatePresence>
            {result.subsidyEstimate > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <Row
                  label="Indicative subsidy (residential demo)"
                  value={formatCurrency(result.subsidyEstimate)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="relative mt-4 text-xs leading-relaxed text-white/45">
          Demo calculations use generalised Indian tariff and yield assumptions. Subsidy figures
          are illustrative and subject to government policy.
        </p>

        <Button asChild variant="accent" className="relative mt-7 w-full sm:w-auto">
          <Link href="/contact">Get an accurate site survey</Link>
        </Button>
      </div>
    </div>
  );
}

function ResultCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm transition hover:bg-white/[0.1]">
      <Icon className="h-5 w-5 text-solar-yellow" />
      <p className="mt-3 text-[11px] uppercase tracking-wider text-white/50">{label}</p>
      <AnimatePresence mode="wait">
        <motion.p
          key={value}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="mt-1 font-display text-xl font-bold"
        >
          {value}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-white/60">{label}</span>
      <span className="font-semibold tracking-tight">{value}</span>
    </div>
  );
}
