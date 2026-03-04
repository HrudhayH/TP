"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Globe, ShieldCheck, Truck, Leaf, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function GlobalPresence() {
  const logisticsImage = PlaceHolderImages.find(img => img.id === "export-logistics");
  useScrollReveal();

  return (
    <section id="export" className="py-32 md:py-64 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background Stylized Map Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1000 500" className="w-full h-full text-primary fill-current">
          <circle cx="200" cy="150" r="2" />
          <circle cx="400" cy="250" r="3" />
          <circle cx="600" cy="100" r="2" />
          <circle cx="800" cy="350" r="4" />
          <path d="M200 150 Q 400 250 600 100 T 800 350" stroke="currentColor" fill="none" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <div className="lg:col-span-7 space-y-16 reveal-on-scroll">
            <div className="space-y-6">
              <p className="font-headline text-accent uppercase tracking-[0.3em] text-sm">Logistics</p>
              <h2 className="font-headline text-5xl md:text-8xl text-primary leading-[0.9] tracking-tighter">
                Boundaries <br />are relative.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl font-light leading-relaxed">
                Vriksa operates a digital-first export engine serving over 24 nations, ensuring farm-to-door freshness.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="flex gap-6 group">
                <div className="bg-primary/5 p-5 rounded-[1.5rem] h-fit group-hover:bg-accent/10 transition-colors">
                  <Globe className="text-accent" size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline text-2xl text-primary">Global Node</h3>
                  <p className="text-muted-foreground font-light">Deep presence in EU, Middle East, and North America.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="bg-primary/5 p-5 rounded-[1.5rem] h-fit group-hover:bg-accent/10 transition-colors">
                  <Truck className="text-accent" size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline text-2xl text-primary">Smart Chain</h3>
                  <p className="text-muted-foreground font-light">Advanced cold-chain tracking for zero-loss delivery.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="bg-primary/5 p-5 rounded-[1.5rem] h-fit group-hover:bg-accent/10 transition-colors">
                  <ShieldCheck className="text-accent" size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline text-2xl text-primary">Certifications</h3>
                  <p className="text-muted-foreground font-light">Compliant with FDA, FSSAI, and European standards.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="bg-primary/5 p-5 rounded-[1.5rem] h-fit group-hover:bg-accent/10 transition-colors">
                  <MapPin className="text-accent" size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline text-2xl text-primary">Regional Hubs</h3>
                  <p className="text-muted-foreground font-light">Localized distribution centers for faster transit.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] group">
              <Image
                src={logisticsImage?.imageUrl || ""}
                alt="Logistics and shipping"
                fill
                className="object-cover transition-transform [transition-duration:15s] group-hover:scale-125"
                data-ai-hint={logisticsImage?.imageHint}
              />
              <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
              <div className="absolute bottom-12 left-12 right-12 p-10 glass-morphism rounded-[2.5rem]">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-headline text-6xl text-primary leading-none tracking-tighter">24+</p>
                    <p className="text-sm font-medium text-primary/50 uppercase tracking-widest mt-2">Nations Served</p>
                  </div>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="w-4 h-4 rounded-full bg-accent" 
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
