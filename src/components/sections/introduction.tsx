
"use client";

import React from "react";
import { AnimatedText, FadeIn, CountUp } from "@/components/ui/animated-text";

export function Introduction() {
  return (
    <section id="about" className="py-32 md:py-64 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Subtle decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          <div className="lg:col-span-5">
            <FadeIn direction="left" duration={1}>
              <h2 className="font-headline text-5xl md:text-8xl text-primary leading-[0.9] tracking-tighter">
                Legacy <br />in every <br />
                <span className="text-shimmer italic font-light">grain.</span>
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-7 space-y-10">
            <FadeIn delay={0.2}>
              <p className="text-2xl md:text-4xl text-primary font-body font-light leading-tight">
                Soil is sacred. We believe the journey from the lush Indian plains to your global table should be as pure as the earth itself.
              </p>
            </FadeIn>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              <FadeIn delay={0.35}>
                <p>
                  As India&apos;s premier export house, Vriksa isn&apos;t just a logistics partner—we are stewards of tradition. We collaborate with over 5,000 small-scale farmers, merging ancient agricultural wisdom with the rigor of modern certification.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p>
                  Our reach is global, but our pulse is local. From hand-selecting the finest aged Basmati to sourcing nutrient-dense ancient millets, we deliver more than produce. We deliver the authentic essence of a land rich in history and flavor.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.65}>
              <div className="pt-8 flex gap-12">
                <div>
                  <CountUp end={35} suffix="+" className="font-headline text-4xl text-primary block" />
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Years of Legacy</p>
                </div>
                <div>
                  <CountUp end={5} suffix="k+" className="font-headline text-4xl text-primary block" />
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Partner Farmers</p>
                </div>
                <div>
                  <CountUp end={100} suffix="%" className="font-headline text-4xl text-primary block" />
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Organic Sourced</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
