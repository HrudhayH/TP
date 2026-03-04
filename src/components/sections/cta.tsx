
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/animated-text";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const containerScale = useTransform(scrollYProgress, [0, 0.4], [0.92, 1]);

  return (
    <section ref={sectionRef} id="contact" className="py-32 md:py-64 px-6 md:px-12 bg-white relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <motion.div
        style={{ scale: containerScale }}
        className="max-w-7xl mx-auto text-center space-y-12 bg-primary py-32 md:py-48 px-8 md:px-24 rounded-[4rem] text-white relative overflow-hidden grain-overlay"
      >
        {/* Cinematic background video with parallax */}
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover opacity-30 scale-110"
          >
            <source src="/assets/cta-farm-sunset.mp4" type="video/mp4" />
          </video>
        </motion.div>
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-primary/70 pointer-events-none" />
        {/* Cinematic light effects */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"
        />

        <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
          <FadeIn>
            <p className="font-headline text-accent uppercase tracking-[0.4em] text-xs md:text-sm">Initiate Partnership</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="font-headline text-5xl md:text-8xl leading-[0.9] tracking-tighter">
              The next harvest <br />awaits your market.
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-white/60 text-xl md:text-2xl font-body font-light max-w-2xl mx-auto">
              Join Vriksa&apos;s elite global network of distributors and retailers. Experience agricultural export, refined.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.45}>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
            <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-white rounded-full px-16 py-8 text-xl h-auto transition-all duration-500 magnetic-btn shadow-lg shadow-white/10">
              Become a Partner
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-16 py-8 text-xl h-auto magnetic-btn">
              Contact Sales
            </Button>
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}
