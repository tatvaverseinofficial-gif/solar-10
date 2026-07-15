"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero/hero-main.jpg"
        alt="Premium rooftop solar installation across an Indian residence"
        fill
        priority
        className="object-cover object-[center_30%] sm:object-[center_35%] scale-105"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-solar-navy-deep/70 via-solar-navy-deep/75 to-solar-navy-deep sm:bg-gradient-to-r sm:from-solar-navy-deep sm:via-solar-navy-deep/88 sm:to-solar-navy/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-solar-navy-deep via-transparent to-transparent opacity-80 sm:opacity-100" />
      <div className="pointer-events-none absolute inset-0 mesh-pattern opacity-20" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 hidden h-[420px] w-[420px] rounded-full bg-solar-yellow/15 blur-3xl sm:block"
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-premium relative flex min-h-[100svh] flex-col justify-end pb-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] pt-24 sm:pb-20 sm:pt-28 md:justify-center md:pb-28 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-solar-yellow sm:mb-5 sm:text-sm sm:tracking-[0.28em] md:text-[0.95rem]"
          >
            Aarohan Solar
          </motion.p>

          <h1 className="font-display text-[2.05rem] font-bold leading-[1.08] tracking-tight text-white xs:text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[4.35rem] text-balance">
            Power that pays for itself —
            <span className="block text-white/90">designed for India</span>
          </h1>

          <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-white/78 sm:mt-6 sm:text-base md:text-lg md:leading-relaxed">
            Precision rooftop and industrial solar with transparent economics,
            subsidy guidance, and care that lasts decades.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button asChild variant="accent" size="lg" className="h-12 w-full min-h-12 sm:h-[3.35rem] sm:w-auto">
              <Link href="/contact">
                Get Free Site Survey
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="white" size="lg" className="h-12 w-full min-h-12 sm:h-[3.35rem] sm:w-auto">
              <Link href="/calculator">
                Estimate Your Savings
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
