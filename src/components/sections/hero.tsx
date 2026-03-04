
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-rice-field");
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1.1, 1]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
      {/* Cinematic Background with Parallax */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={heroImage?.imageUrl || ""}
          alt={heroImage?.description || "Rice field sunrise"}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage?.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-12"
      >
        <div className="space-y-6">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-headline text-accent uppercase text-xs md:text-sm tracking-[0.3em]"
          >
            Since 1984 • Global Agricultural Excellence
          </motion.p>
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tighter">
            Purely Nature.<br />
            <span className="italic font-light">Global reach.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-light max-w-2xl mx-auto font-body leading-relaxed">
            Bridging Indian fertile soils with premium international markets. 
            Experience the standard of Vriksa.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-12 py-8 text-xl h-auto transition-all hover:scale-105 active:scale-95">
            Explore Collection
          </Button>
          <Button size="lg" variant="outline" className="bg-white/5 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-primary rounded-full px-12 py-8 text-xl h-auto transition-all">
            Our Legacy
          </Button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white/40 cursor-pointer hover:text-accent transition-colors"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown size={40} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
