
"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Introduction() {
  useScrollReveal();

  return (
    <section id="about" className="py-32 md:py-64 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          <div className="lg:col-span-5 reveal-on-scroll">
            <h2 className="font-headline text-5xl md:text-8xl text-primary leading-[0.9] tracking-tighter">
              Legacy <br />in every <br />
              <span className="text-accent italic font-light">grain.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-10 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <p className="text-2xl md:text-4xl text-primary font-body font-light leading-tight">
              Soil is sacred. We believe the journey from the lush Indian plains to your global table should be as pure as the earth itself.
            </p>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              <p>
                As India's premier export house, Vriksa isn't just a logistics partner—we are stewards of tradition. We collaborate with over 5,000 small-scale farmers, merging ancient agricultural wisdom with the rigor of modern certification.
              </p>
              <p>
                Our reach is global, but our pulse is local. From hand-selecting the finest aged Basmati to sourcing nutrient-dense ancient millets, we deliver more than produce. We deliver the authentic essence of a land rich in history and flavor.
              </p>
            </div>
            <div className="pt-8 flex gap-12">
              <div>
                <p className="font-headline text-4xl text-primary">35+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Years of Legacy</p>
              </div>
              <div>
                <p className="font-headline text-4xl text-primary">5k+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Partner Farmers</p>
              </div>
              <div>
                <p className="font-headline text-4xl text-primary">100%</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Organic Sourced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
