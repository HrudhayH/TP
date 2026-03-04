"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerChild } from "@/components/ui/animated-text";

export function FeaturedProduct() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const videoY = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
  const videoRotate = useTransform(scrollYProgress, [0, 0.5], [3, 0]);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-64 bg-primary text-white overflow-hidden relative grain-overlay"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50" />
      {/* Decorative floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-white/5 rounded-full hidden lg:block" />
      <div className="absolute bottom-40 left-10 w-20 h-20 border border-white/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          <div className="space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              <FadeIn>
                <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 rounded-full px-6 py-2 text-sm">Iconic Series</Badge>
              </FadeIn>
              <FadeIn delay={0.15}>
                <h2 className="font-headline text-6xl md:text-9xl leading-[0.85] tracking-tighter">
                  The Gold <br />
                  <span className="italic text-shimmer">Basmati.</span>
                </h2>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <div className="space-y-8 text-xl md:text-2xl text-white/70 font-body font-light leading-relaxed max-w-xl">
                <p>
                  Hand-harvested in the shadow of the Himalayas, our aged Basmati represents the pinnacle of aromatic perfection.
                </p>

                <StaggerContainer staggerDelay={0.12} delay={0.5} className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-white/10">
                  <StaggerChild>
                    <div className="space-y-3 group">
                      <h4 className="font-headline text-2xl text-accent group-hover:text-white transition-colors duration-500">99.9% Purity</h4>
                      <p className="text-sm md:text-base opacity-60">Rigorous selection process for consistent grain length and texture.</p>
                    </div>
                  </StaggerChild>
                  <StaggerChild>
                    <div className="space-y-3 group">
                      <h4 className="font-headline text-2xl text-accent group-hover:text-white transition-colors duration-500">2-Year Aged</h4>
                      <p className="text-sm md:text-base opacity-60">Slow-aged in climate-controlled environments for peak fragrance.</p>
                    </div>
                  </StaggerChild>
                  <StaggerChild>
                    <div className="space-y-3 group">
                      <h4 className="font-headline text-2xl text-accent group-hover:text-white transition-colors duration-500">Global QC</h4>
                      <p className="text-sm md:text-base opacity-60">Certified for USA, EU, and Gulf standard excellence.</p>
                    </div>
                  </StaggerChild>
                  <StaggerChild>
                    <div className="space-y-3 group">
                      <h4 className="font-headline text-2xl text-accent group-hover:text-white transition-colors duration-500">Fair Trade</h4>
                      <p className="text-sm md:text-base opacity-60">Direct-from-farm partnerships ensuring community prosperity.</p>
                    </div>
                  </StaggerChild>
                </StaggerContainer>
              </div>
            </FadeIn>
          </div>

          <motion.div
            style={{ scale: videoScale, y: videoY, rotateZ: videoRotate }}
            className="relative aspect-[3/4] md:aspect-square order-1 lg:order-2 rounded-[3rem] overflow-hidden shadow-2xl group"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover transition-transform [transition-duration:20s] group-hover:scale-125"
            >
              <source src="/assets/rice-export-sacks.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
