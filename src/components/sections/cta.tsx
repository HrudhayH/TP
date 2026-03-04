
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function CTA() {
  useScrollReveal();

  return (
    <section id="contact" className="py-32 md:py-64 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center space-y-12 bg-primary py-32 md:py-48 px-8 md:px-24 rounded-[4rem] text-white relative overflow-hidden reveal-on-scroll">
        {/* Cinematic light effects */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
          <p className="font-headline text-accent uppercase tracking-[0.4em] text-xs md:text-sm">Initiate Partnership</p>
          <h2 className="font-headline text-5xl md:text-8xl leading-[0.9] tracking-tighter">
            The next harvest <br />awaits your market.
          </h2>
          <p className="text-white/60 text-xl md:text-2xl font-body font-light max-w-2xl mx-auto">
            Join Vriksa's elite global network of distributors and retailers. Experience agricultural export, refined.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
          <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-white rounded-full px-16 py-8 text-xl h-auto transition-all duration-500 hover:scale-110 active:scale-95">
            Become a Partner
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-16 py-8 text-xl h-auto transition-all">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
