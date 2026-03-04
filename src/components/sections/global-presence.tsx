"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, ShieldCheck, Truck, MapPin } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerChild } from "@/components/ui/animated-text";

export function GlobalPresence() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);

  return (
    <section
      ref={sectionRef}
      id="export"
      className="py-32 md:py-64 px-6 md:px-12 bg-background relative overflow-hidden"
    >
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

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-accent/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">

          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-6">
              <FadeIn>
                <p className="font-headline text-accent uppercase tracking-[0.3em] text-sm">Logistics</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-headline text-5xl md:text-8xl text-primary leading-[0.9] tracking-tighter">
                  Boundaries <br />are relative.
                </h2>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-xl font-light leading-relaxed">
                  Vriksa operates a digital-first export engine serving over 24 nations, ensuring farm-to-door freshness.
                </p>
              </FadeIn>
            </div>

            <StaggerContainer staggerDelay={0.1} delay={0.3} className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <StaggerChild>
                <div className="flex gap-6 group cursor-pointer">
                  <div className="bg-primary/5 p-5 rounded-[1.5rem] h-fit group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-500">
                    <Globe className="text-accent" size={32} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-headline text-2xl text-primary group-hover:text-accent transition-colors duration-500">Global Node</h3>
                    <p className="text-muted-foreground font-light">Deep presence in EU, Middle East, and North America.</p>
                  </div>
                </div>
              </StaggerChild>
              <StaggerChild>
                <div className="flex gap-6 group cursor-pointer">
                  <div className="bg-primary/5 p-5 rounded-[1.5rem] h-fit group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-500">
                    <Truck className="text-accent" size={32} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-headline text-2xl text-primary group-hover:text-accent transition-colors duration-500">Smart Chain</h3>
                    <p className="text-muted-foreground font-light">Advanced cold-chain tracking for zero-loss delivery.</p>
                  </div>
                </div>
              </StaggerChild>
              <StaggerChild>
                <div className="flex gap-6 group cursor-pointer">
                  <div className="bg-primary/5 p-5 rounded-[1.5rem] h-fit group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-500">
                    <ShieldCheck className="text-accent" size={32} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-headline text-2xl text-primary group-hover:text-accent transition-colors duration-500">Certifications</h3>
                    <p className="text-muted-foreground font-light">Compliant with FDA, FSSAI, and European standards.</p>
                  </div>
                </div>
              </StaggerChild>
              <StaggerChild>
                <div className="flex gap-6 group cursor-pointer">
                  <div className="bg-primary/5 p-5 rounded-[1.5rem] h-fit group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-500">
                    <MapPin className="text-accent" size={32} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-headline text-2xl text-primary group-hover:text-accent transition-colors duration-500">Regional Hubs</h3>
                    <p className="text-muted-foreground font-light">Localized distribution centers for faster transit.</p>
                  </div>
                </div>
              </StaggerChild>
            </StaggerContainer>
          </div>

          <div className="lg:col-span-5">
            <FadeIn direction="right" delay={0.2} duration={1}>
              <motion.div
                style={{ y: videoY, scale: videoScale }}
                className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] group"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform [transition-duration:15s] group-hover:scale-125"
                >
                  <source src="/assets/global-export-port.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
                <div className="absolute bottom-12 left-12 right-12 p-10 glass-morphism rounded-[2.5rem]">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-headline text-6xl text-primary leading-none tracking-tighter">24+</p>
                      <p className="text-sm font-medium text-primary/50 uppercase tracking-widest mt-2">Nations Served</p>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                      className="w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50"
                    />
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
