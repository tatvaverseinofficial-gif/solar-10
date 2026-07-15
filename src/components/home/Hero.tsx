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
        className="object-cover object-[center_35%] scale-105"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-solar-navy-deep via-solar-navy-deep/88 to-solar-navy/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-solar-navy-deep via-transparent to-solar-navy-deep/30" />
      <div className="pointer-events-none absolute inset-0 mesh-pattern opacity-20" />

      {/* Soft solar orb accent — atmospheric, not a sticker */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-solar-yellow/15 blur-3xl"
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-premium relative flex min-h-[100svh] flex-col justify-end pb-20 pt-28 md:justify-center md:pb-28 md:pt-24">
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
            className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.28em] text-solar-yellow md:text-[0.95rem]"
          >
            Aarohan Solar
          </motion.p>

          <h1 className="font-display text-[2.65rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.35rem] text-balance">
            Power that pays for itself —
            <span className="block text-white/90">designed for India</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/78 md:text-lg md:leading-relaxed">
            Precision rooftop and industrial solar with transparent economics,
            subsidy guidance, and care that lasts decades.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button asChild variant="accent" size="lg" className="w-full sm:w-auto">
              <Link href="/contact">
                Get Free Site Survey
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="white" size="lg" className="w-full sm:w-auto">
              <Link href="/calculator">
                Estimate Your Savings
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
          aria-hidden
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-solar-yellow"
              animate={{ y: [0, 12, 0], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
