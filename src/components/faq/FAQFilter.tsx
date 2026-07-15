"use client";

import { useMemo, useState } from "react";
import { faqs } from "@/data/faqs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import type { FAQ } from "@/types";

const categories: { label: string; value: "all" | FAQ["category"] }[] = [
  { label: "All", value: "all" },
  { label: "General", value: "general" },
  { label: "Cost", value: "cost" },
  { label: "Installation", value: "installation" },
  { label: "Subsidy", value: "subsidy" },
  { label: "Maintenance", value: "maintenance" },
  { label: "Technical", value: "technical" },
];

export function FAQFilter() {
  const [category, setCategory] = useState<"all" | FAQ["category"]>("all");
  const items = useMemo(
    () =>
      category === "all" ? faqs : faqs.filter((f) => f.category === category),
    [category]
  );

  return (
    <div>
      <div className="chip-scroll mb-8 justify-start sm:justify-center">
        {categories.map((c) => (
          <button
            key={c.value}
            type="button"
            onClick={() => setCategory(c.value)}
            className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
              category === c.value
                ? "bg-solar-navy text-white shadow-[var(--shadow-sm)]"
                : "border border-solar-line bg-white text-muted-foreground hover:border-solar-navy/30"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="mx-auto max-w-3xl rounded-[1.25rem] border border-solar-line bg-white px-4 shadow-[var(--shadow-sm)] sm:rounded-[1.75rem] sm:px-5 md:px-9">
        <FAQAccordion items={items} />
      </div>
    </div>
  );
}
