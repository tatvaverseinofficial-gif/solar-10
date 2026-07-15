import type { CalculatorInput, CalculatorResult, PropertyType, RoofType } from "@/types";

const RATE_PER_UNIT: Record<PropertyType, number> = {
  residential: 8.5,
  commercial: 10.5,
  industrial: 9.2,
  institutional: 9.0,
};

const COST_PER_KW: Record<PropertyType, number> = {
  residential: 65_000,
  commercial: 55_000,
  industrial: 48_000,
  institutional: 52_000,
};

const GENERATION_PER_KW_YEAR = 1_450; // kWh/year typical for most Indian regions
const PANEL_WATTAGE = 550;
const SQFT_PER_KW: Record<RoofType, number> = {
  rcc: 100,
  metal: 90,
  tiled: 110,
  ground: 120,
};

const SUBSIDY_CAP_RESIDENTIAL = 78_000; // illustrative PM Surya Ghar style cap for demo

export function calculateSolarSavings(input: CalculatorInput): CalculatorResult {
  const bill = Math.max(500, input.monthlyBill);
  const rate = RATE_PER_UNIT[input.propertyType];
  const monthlyUnits = bill / rate;
  const annualUnits = monthlyUnits * 12;

  // Cover ~80% of consumption for a practical system size
  const rawKw = (annualUnits * 0.8) / GENERATION_PER_KW_YEAR;
  const systemSizeKw = Math.min(Math.max(Math.round(rawKw * 2) / 2, 1), 500);

  const annualGeneration = systemSizeKw * GENERATION_PER_KW_YEAR;
  const estimatedSavingsAnnual = Math.round(annualGeneration * rate * 0.95);
  const estimatedSavingsMonthly = Math.round(estimatedSavingsAnnual / 12);

  const grossCost = systemSizeKw * COST_PER_KW[input.propertyType];
  let subsidyEstimate = 0;
  if (input.propertyType === "residential" && systemSizeKw <= 10) {
    if (systemSizeKw <= 2) subsidyEstimate = 30_000;
    else if (systemSizeKw <= 3) subsidyEstimate = 60_000;
    else subsidyEstimate = Math.min(SUBSIDY_CAP_RESIDENTIAL, 78_000);
  }

  const netCost = Math.max(grossCost - subsidyEstimate, grossCost * 0.4);
  const paybackYears = Math.round((netCost / estimatedSavingsAnnual) * 10) / 10;

  const co2ReductionTons = Math.round(annualGeneration * 0.00082 * 10) / 10;
  const panelsRequired = Math.ceil((systemSizeKw * 1000) / PANEL_WATTAGE);
  const roofAreaRequired = Math.round(systemSizeKw * SQFT_PER_KW[input.roofType]);

  return {
    systemSizeKw,
    estimatedSavingsAnnual,
    estimatedSavingsMonthly,
    paybackYears,
    co2ReductionTons,
    panelsRequired,
    roofAreaRequired,
    estimatedCost: Math.round(grossCost),
    subsidyEstimate,
  };
}
