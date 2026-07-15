"use client";

import { useEffect, useRef, useState } from "react";
import { company } from "@/data/company";
import { FadeIn } from "@/components/shared/Motion";

function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);
  return value;
}

function StatItem({
  label,
  suffix,
  numeric,
  display,
  start,
}: {
  label: string;
  suffix?: string;
  numeric?: number;
  display?: string;
  start: boolean;
}) {
  const count = useCountUp(numeric ?? 0, 1800, start && numeric !== undefined);
  return (
    <div className="relative px-1 text-center sm:px-2 md:px-4">
      <p className="font-display text-2xl font-bold tracking-tight text-solar-yellow sm:text-3xl md:text-4xl lg:text-[2.85rem]">
        {display ?? `${count.toLocaleString("en-IN")}${suffix ?? ""}`}
      </p>
      <p className="mt-2 text-[0.65rem] font-medium uppercase leading-snug tracking-[0.1em] text-white/55 sm:mt-2.5 sm:text-xs sm:tracking-[0.14em] md:text-[0.7rem]">
        {label}
      </p>
    </div>
  );
}

export function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-solar-navy py-12 sm:py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 mesh-pattern opacity-15" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-1/2 -translate-x-1/2 bg-solar-yellow/10 blur-3xl" />
      <div className="container-premium relative" ref={ref}>
        <FadeIn>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-10 md:grid-cols-4 md:gap-6 md:divide-x md:divide-white/10">
            <StatItem label="Installations" numeric={2500} suffix="+" start={start} />
            <StatItem label="Capacity Delivered" display={company.stats.capacityMw} start={start} />
            <StatItem label="Cities Served" numeric={40} suffix="+" start={start} />
            <StatItem label="Customer Satisfaction" display={company.stats.satisfaction} start={start} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
