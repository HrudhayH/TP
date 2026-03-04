

"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/animated-text";

type Category = {
  id: string;
  name: string;
  description: string;
  video: string;
  href?: string;
};

const CATEGORIES: Category[] = [
  { id: "rice",       name: "Premium Rice",    video: "/assets/rice-macro.mp4",  description: "Aged long-grain Basmati varieties.",    href: "/products/rice" },
  { id: "millets",    name: "Ancient Millets", video: "/assets/millets.mp4",     description: "Gluten-free organic grains." },
  { id: "pulses",     name: "Organic Pulses",  video: "/assets/pulses.mp4",      description: "Protein-rich handpicked legumes." },
  { id: "spices",     name: "Noble Spices",    video: "/assets/spices.mp4",      description: "The authentic soul of Indian flavor." },
  { id: "dry-fruits", name: "Elite Dry Fruits",video: "/assets/dry-fruits.mp4",  description: "Nature's handpicked energy gems." },
];

function CategoryCard({ category, index }: { category: Category; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <FadeIn delay={index * 0.1} direction="up">
      <motion.div
        ref={ref}
        whileHover={{ y: -12 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card className="group relative overflow-hidden border-none bg-transparent cursor-pointer rounded-[2rem]">
          <CardContent className="p-0">
            <div className="relative aspect-[3/4.5] overflow-hidden rounded-[2rem]">
              <motion.div style={{ y }} className="absolute inset-0">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                >
                  <source src={category.video} type="video/mp4" />
                </video>
              </motion.div>
              {/* Gradient overlay with enhanced hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-75" />

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-700" />

              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-headline text-2xl md:text-3xl">{category.name}</h3>
                  <div className="bg-accent p-3 rounded-full text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out shadow-lg shadow-accent/20">
                    {category.href ? (
                      <Link href={category.href} aria-label={`View ${category.name}`}>
                        <ArrowUpRight size={20} />
                      </Link>
                    ) : (
                      <ArrowUpRight size={20} />
                    )}
                  </div>
                </div>
                <p className="text-white/60 text-sm md:text-base font-light opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-2 group-hover:translate-y-0">
                  {category.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </FadeIn>
  );
}

export function ProductCategories() {
  return (
    <section id="products" className="py-32 md:py-56 px-6 md:px-12 bg-white relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
          <div className="space-y-6 max-w-2xl">
            <FadeIn>
              <p className="font-headline text-accent uppercase tracking-[0.2em] text-sm">Curation</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-headline text-5xl md:text-8xl text-primary leading-none tracking-tighter">
                Nurtured by <br />Heritage.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.3} direction="right">
            <p className="max-w-md text-muted-foreground text-xl md:text-2xl font-light leading-relaxed">
              Our portfolio is a selection of India&apos;s finest agricultural exports, chosen for purity and traditional value.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
