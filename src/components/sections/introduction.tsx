
"use client";

import React from "react";

export function Introduction() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="font-headline text-3xl md:text-5xl text-primary leading-tight">
              Rooted in tradition, <br />
              <span className="text-accent italic">committed to quality.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6">
            <p className="text-xl md:text-2xl text-primary/80 font-body leading-relaxed">
              At Vriksa, we believe that the journey from soil to shelf is a sacred one. As a premier agricultural export house, we partner directly with thousands of farmers across India to ensure every grain, spice, and fruit meets the highest global standards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our presence spans continents, but our heart remains in the rich agricultural landscape of India. By combining ancient farming wisdom with modern logistics, we deliver the authentic taste of premium nature to your doorstep, wherever in the world you may be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
