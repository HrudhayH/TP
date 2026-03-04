"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ChevronDown, ArrowUpRight, ShieldCheck, Award, Users } from "lucide-react";
import Link from "next/link";

// ─── Video helper ─────────────────────────────────────────────────────────────
function CinematicVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────
const RICE_VARIETIES = [
  {
    id: "basmati",
    name: "Basmati Supreme",
    benefit: "Aromatic long grain rice ideal for premium cuisine",
    video: "/assets/rice-macro.mp4",
  },
  {
    id: "sona-masoori",
    name: "Sona Masoori",
    benefit: "Lightweight and perfect for daily healthy meals",
    video: "/assets/rice-macro.mp4",
  },
  {
    id: "brown",
    name: "Brown Rice",
    benefit: "High fiber whole grain for balanced nutrition",
    video: "/assets/rice-macro.mp4",
  },
  {
    id: "jeera-samba",
    name: "Jeera Samba",
    benefit: "Small aromatic grains perfect for biryanis",
    video: "/assets/rice-macro.mp4",
  },
  {
    id: "ponni",
    name: "Ponni Rice",
    benefit: "Soft cooking rice widely loved in South India",
    video: "/assets/rice-macro.mp4",
  },
];

const EXPORT_FEATURES = [
  {
    icon: ShieldCheck,
    title: "100% Export Grade",
    description:
      "Every batch undergoes 12-point inspection before packaging for international shipment.",
  },
  {
    icon: Award,
    title: "International Quality Standards",
    description:
      "Certified by APEDA, HACCP, FDA, FSSAI, and European food safety authorities.",
  },
  {
    icon: Users,
    title: "Partner Farmers Network",
    description:
      "Sourced directly from 5,000+ partner farms across India's most fertile rice-growing regions.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function RicePage() {
  useScrollReveal();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 220]);
  const heroScale = useTransform(scrollY, [0, 600], [1.1, 1]);
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ── 1. HERO ── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <CinematicVideo
            src="/assets/hero-rice-field.mp4"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-background" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-10"
        >
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-headline text-accent uppercase text-xs md:text-sm tracking-[0.3em]"
            >
              Vriksa Global · Premium Rice Collection
            </motion.p>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tighter">
              Premium <br />
              <span className="italic font-light">Indian Rice.</span>
            </h1>
            <p className="text-white/75 text-lg md:text-2xl font-light max-w-2xl mx-auto font-body leading-relaxed">
              From fertile Indian plains to global kitchens.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-12 py-8 text-xl h-auto transition-all hover:scale-105 active:scale-95"
            >
              Explore Varieties
            </Button>
            <Link href="/#contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/5 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-primary rounded-full px-12 py-8 text-xl h-auto transition-all"
              >
                Request Sample
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white/40"
        >
          <ChevronDown size={40} strokeWidth={1} />
        </motion.div>
      </section>

      {/* ── 2. RICE VARIETY GRID ── */}
      <section className="py-32 md:py-56 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8 reveal-on-scroll">
            <div className="space-y-6 max-w-2xl">
              <p className="font-headline text-accent uppercase tracking-[0.2em] text-sm">
                Varieties
              </p>
              <h2 className="font-headline text-5xl md:text-8xl text-primary leading-none tracking-tighter">
                Every grain, <br />a story.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground text-xl md:text-2xl font-light leading-relaxed">
              Five distinct varieties, each cultivated in a unique terroir and
              selected for export-grade perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {RICE_VARIETIES.map((variety, index) => (
              <motion.div
                key={variety.id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="reveal-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group relative overflow-hidden cursor-pointer rounded-[2rem] bg-transparent">
                  <div className="relative aspect-[3/4.5] overflow-hidden rounded-[2rem]">
                    <CinematicVideo
                      src={variety.video}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-headline text-2xl">
                          {variety.name}
                        </h3>
                        <div className="bg-accent p-3 rounded-full text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                      <p className="text-white/60 text-sm font-light opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-2 group-hover:translate-y-0">
                        {variety.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. BENEFITS — cinematic split ── */}
      <BenefitsSection />

      {/* ── 4. EXPORT QUALITY ── */}
      <ExportQualitySection />

      {/* ── 5. CTA ── */}
      <section id="contact" className="py-32 md:py-64 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-12 bg-primary py-32 md:py-48 px-8 md:px-24 rounded-[4rem] text-white relative overflow-hidden reveal-on-scroll">
          <CinematicVideo
            src="/assets/cta-farm-sunset.mp4"
            className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-[4rem]"
          />
          <div className="absolute inset-0 bg-primary/70 rounded-[4rem] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
            <p className="font-headline text-accent uppercase tracking-[0.4em] text-xs md:text-sm">
              Partner With Us
            </p>
            <h2 className="font-headline text-5xl md:text-8xl leading-[0.9] tracking-tighter">
              Bring authentic Indian <br />rice to your market.
            </h2>
            <p className="text-white/60 text-xl md:text-2xl font-body font-light max-w-2xl mx-auto">
              Join Vriksa's global network of premium distributors. Farm-direct,
              certified, and delivered with care.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-accent hover:text-white rounded-full px-16 py-8 text-xl h-auto transition-all duration-500 hover:scale-110 active:scale-95"
            >
              Inquire Now
            </Button>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-16 py-8 text-xl h-auto transition-all"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ─── Benefits Section ─────────────────────────────────────────────────────────
function BenefitsSection() {
  useScrollReveal();
  const { scrollYProgress } = useScroll();
  const videoScale = useTransform(scrollYProgress, [0.4, 0.7], [0.85, 1]);
  const videoY = useTransform(scrollYProgress, [0.4, 0.7], [80, 0]);

  return (
    <section className="py-32 md:py-64 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Text */}
          <div className="space-y-12 order-2 lg:order-1 reveal-on-scroll">
            <div className="space-y-6">
              <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 rounded-full px-6 py-2 text-sm">
                Why Our Rice
              </Badge>
              <h2 className="font-headline text-6xl md:text-8xl leading-[0.85] tracking-tighter">
                Crafted by soil. <br />
                <span className="italic text-accent">Perfected by tradition.</span>
              </h2>
            </div>

            <div className="space-y-8 text-xl md:text-2xl text-white/70 font-body font-light leading-relaxed max-w-xl">
              <p>
                Our rice is sourced from small-batch farmers who have mastered their craft over generations. Every grain carries the legacy of Indian agriculture.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
                <div className="space-y-3">
                  <h4 className="font-headline text-2xl text-accent">Extra Long Grain</h4>
                  <p className="text-sm md:text-base opacity-60">Minimum 8.4mm grain length on select Basmati varieties.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-headline text-2xl text-accent">2-Year Aged</h4>
                  <p className="text-sm md:text-base opacity-60">Slow-aged in climate-controlled storage for peak aroma.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-headline text-2xl text-accent">99.9% Purity</h4>
                  <p className="text-sm md:text-base opacity-60">Rigorous colour-sorting and stone-removal processes.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-headline text-2xl text-accent">Fair Trade</h4>
                  <p className="text-sm md:text-base opacity-60">Direct farm partnerships with transparent profit-sharing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <motion.div
            style={{ scale: videoScale, y: videoY }}
            className="relative aspect-[3/4] md:aspect-square order-1 lg:order-2 rounded-[3rem] overflow-hidden shadow-2xl group"
          >
            <CinematicVideo
              src="/assets/rice-macro.mp4"
              className="absolute inset-0 w-full h-full object-cover transition-transform [transition-duration:20s] group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── Export Quality Section ───────────────────────────────────────────────────
function ExportQualitySection() {
  useScrollReveal();

  return (
    <section className="py-32 md:py-56 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-32 space-y-6 reveal-on-scroll">
          <p className="font-headline text-accent uppercase tracking-widest text-sm">
            Export Standards
          </p>
          <h2 className="font-headline text-5xl md:text-7xl text-primary tracking-tighter">
            Global quality, <br />Indian soul.
          </h2>
          <p className="text-xl text-muted-foreground font-light font-body">
            Every shipment meets the highest international benchmarks before it
            leaves our facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {EXPORT_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="group p-10 rounded-[2.5rem] bg-muted/30 border border-transparent hover:border-accent/10 hover:bg-white hover:shadow-2xl transition-all duration-500 reveal-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-8 p-5 bg-white rounded-2xl w-fit shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-headline text-2xl text-primary mb-4 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
