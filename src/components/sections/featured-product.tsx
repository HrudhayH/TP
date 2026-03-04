"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function FeaturedProduct() {
  const featuredImage = PlaceHolderImages.find(img => img.id === "rice-sacks-featured") || PlaceHolderImages.find(img => img.id === "rice-macro");
  useScrollReveal();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);

  return (
    <section className="py-32 md:py-64 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div className="space-y-12 order-2 lg:order-1 reveal-on-scroll">
            <div className="space-y-6">
              <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 rounded-full px-6 py-2 text-sm">Iconic Series</Badge>
              <h2 className="font-headline text-6xl md:text-9xl leading-[0.85] tracking-tighter">
                The Gold <br />
                <span className="italic text-accent">Basmati.</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-xl md:text-2xl text-white/70 font-body font-light leading-relaxed max-w-xl">
              <p>
                Hand-harvested in the shadow of the Himalayas, our aged Basmati represents the pinnacle of aromatic perfection.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-white/10">
                <div className="space-y-3">
                  <h4 className="font-headline text-2xl text-accent">99.9% Purity</h4>
                  <p className="text-sm md:text-base opacity-60">Rigorous selection process for consistent grain length and texture.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-headline text-2xl text-accent">2-Year Aged</h4>
                  <p className="text-sm md:text-base opacity-60">Slow-aged in climate-controlled environments for peak fragrance.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-headline text-2xl text-accent">Global QC</h4>
                  <p className="text-sm md:text-base opacity-60">Certified for USA, EU, and Gulf standard excellence.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-headline text-2xl text-accent">Fair Trade</h4>
                  <p className="text-sm md:text-base opacity-60">Direct-from-farm partnerships ensuring community prosperity.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            style={{ scale, y }}
            className="relative aspect-[3/4] md:aspect-square order-1 lg:order-2 rounded-[3rem] overflow-hidden shadow-2xl group"
          >
            <Image
              src={featuredImage?.imageUrl || ""}
              alt="Premium rice export packaging"
              fill
              className="object-cover transition-transform [transition-duration:20s] group-hover:scale-125"
              data-ai-hint={featuredImage?.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
