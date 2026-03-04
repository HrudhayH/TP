
"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Globe, ShieldCheck, Truck, Leaf } from "lucide-react";

export function GlobalPresence() {
  const logisticsImage = PlaceHolderImages.find(img => img.id === "export-logistics");

  return (
    <section id="export" className="py-24 md:py-40 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <p className="font-headline text-accent uppercase tracking-widest text-sm">Our Network</p>
              <h2 className="font-headline text-4xl md:text-6xl text-primary leading-tight">
                Crossing Borders, <br />Connecting Cultures.
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl font-body">
                Vriksa currently serves over 24 countries worldwide, ensuring timely delivery and impeccable quality through a sophisticated multi-modal logistics network.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex gap-4">
                <div className="bg-accent/10 p-4 rounded-2xl h-fit">
                  <Globe className="text-accent" size={28} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-xl text-primary">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">Extensive presence in Europe, GCC, and North America.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent/10 p-4 rounded-2xl h-fit">
                  <Truck className="text-accent" size={28} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-xl text-primary">Smart Logistics</h3>
                  <p className="text-sm text-muted-foreground">Cold-chain and specialized packaging for lasting freshness.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent/10 p-4 rounded-2xl h-fit">
                  <ShieldCheck className="text-accent" size={28} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-xl text-primary">Quality Control</h3>
                  <p className="text-sm text-muted-foreground">Rigorous multi-point inspections before dispatch.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent/10 p-4 rounded-2xl h-fit">
                  <Leaf className="text-accent" size={28} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-xl text-primary">Sustainable Sourcing</h3>
                  <p className="text-sm text-muted-foreground">Supporting small-scale farmers with fair-trade practices.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={logisticsImage?.imageUrl || ""}
                alt="Logistics and shipping"
                fill
                className="object-cover"
                data-ai-hint={logisticsImage?.imageHint}
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
              <div className="absolute bottom-10 left-10 p-8 glass-morphism rounded-2xl max-w-xs">
                <p className="font-headline text-3xl text-primary">24+</p>
                <p className="text-sm font-medium text-primary/70">Countries Served Annually</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
