import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileCheck, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/Motion";

export function SubsidyHighlight() {
  return (
    <section className="section-pad">
      <div className="container-premium">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-solar-navy shadow-[var(--shadow-lg)]">
            <div className="pointer-events-none absolute inset-0 mesh-pattern opacity-20" />
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[300px] lg:min-h-full">
                <Image
                  src="/images/misc/subsidy.jpg"
                  alt="Documents and consultation for solar subsidy"
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-solar-navy/20 to-solar-navy lg:bg-gradient-to-r lg:from-transparent lg:to-solar-navy" />
              </div>
              <div className="relative p-8 md:p-12 lg:p-16">
                <p className="eyebrow text-solar-yellow">Government support</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl text-balance">
                  Residential subsidy guidance, explained clearly
                </h2>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Eligible homes may receive central financial assistance under schemes such as
                  PM Surya Ghar. We help you understand documents, portal steps, and DISCOM
                  coordination — without promising amounts the government alone controls.
                </p>
                <ul className="mt-7 space-y-3.5 text-sm text-white/80">
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-solar-yellow/15 text-solar-yellow">
                      <Landmark className="h-4 w-4" />
                    </span>
                    Eligibility overview for homeowners
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-solar-yellow/15 text-solar-yellow">
                      <FileCheck className="h-4 w-4" />
                    </span>
                    Document checklist & application flow
                  </li>
                </ul>
                <Button asChild variant="accent" className="mt-9">
                  <Link href="/government-subsidy">
                    Explore subsidy guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
