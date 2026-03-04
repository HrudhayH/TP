
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1.15, 1.0]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);

  const isInView = useInView(sectionRef, { once: true });

  // Staggered text animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 80, opacity: 0, rotateX: 50 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeUpVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (delay: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const heroWords1 = "Purely".split("");
  const heroWords2 = "Nature.".split("");
  const heroWords3 = "Global reach.".split("");

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary grain-overlay"
    >
      {/* Cinematic Background with Parallax */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/hero-rice-field.mp4" type="video/mp4" />
        </video>
        {/* Multi-layered cinematic gradient */}
        <div className="cinematic-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-12 w-px h-24 bg-gradient-to-b from-transparent via-accent/40 to-transparent z-10 hidden md:block" />
      <div className="absolute bottom-1/3 left-12 w-16 h-16 border border-white/10 z-10 hidden md:block" />

      {/* Content with text parallax */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-12"
      >
        <div className="space-y-6" style={{ perspective: "800px" }}>
          {/* Tagline */}
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
            className="font-headline text-accent uppercase text-xs md:text-sm tracking-[0.3em]"
          >
            <span className="inline-block px-6 py-2 border border-accent/50 rounded-full backdrop-blur-sm bg-black/30 text-accent">
              Nurtured by Nature • Exported with Excellence
            </span>
          </motion.p>

          {/* Main Heading - Character by character reveal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="overflow-hidden"
          >
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tighter">
              <span className="block overflow-hidden">
                {heroWords1.map((char, i) => (
                  <motion.span
                    key={`w1-${i}`}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                {" "}
                {heroWords2.map((char, i) => (
                  <motion.span
                    key={`w2-${i}`}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden italic font-light mt-2">
                {heroWords3.map((char, i) => (
                  <motion.span
                    key={`w3-${i}`}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1.2}
            className="text-white/80 text-lg md:text-2xl font-light max-w-2xl mx-auto font-body leading-relaxed"
          >
            Bridging India&apos;s fertile soils with premium international markets.
            Experience the gold standard of Vriksa Global.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1.5}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white rounded-full px-12 py-8 text-xl h-auto magnetic-btn"
          >
            Explore Collection
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/5 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-primary rounded-full px-12 py-8 text-xl h-auto magnetic-btn"
          >
            Our Legacy
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.span className="text-white/30 text-xs uppercase tracking-[0.3em] font-light">
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-white/40 cursor-pointer hover:text-accent transition-colors"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
