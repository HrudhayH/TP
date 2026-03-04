
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CATEGORIES = [
  { id: "rice", name: "Premium Rice", image: "rice-macro", description: "Aged long-grain Basmati varieties." },
  { id: "millets", name: "Ancient Millets", image: "millets-category", description: "Gluten-free organic grains." },
  { id: "pulses", name: "Organic Pulses", image: "pulses-category", description: "Protein-rich handpicked legumes." },
  { id: "spices", name: "Noble Spices", image: "spices-category", description: "The authentic soul of Indian flavor." },
  { id: "dry-fruits", name: "Elite Dry Fruits", image: "dry-fruits-category", description: "Nature's handpicked energy gems." },
];

export function ProductCategories() {
  useScrollReveal();

  return (
    <section id="products" className="py-32 md:py-56 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8 reveal-on-scroll">
          <div className="space-y-6 max-w-2xl">
            <p className="font-headline text-accent uppercase tracking-[0.2em] text-sm">Curation</p>
            <h2 className="font-headline text-5xl md:text-8xl text-primary leading-none tracking-tighter">
              Nurtured by <br />Heritage.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-xl md:text-2xl font-light leading-relaxed">
            Our portfolio is a selection of India's finest agricultural exports, chosen for purity and traditional value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((category, index) => {
            const img = PlaceHolderImages.find(i => i.id === category.image);
            return (
              <motion.div
                key={category.id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="reveal-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="group relative overflow-hidden border-none bg-transparent cursor-pointer rounded-[2rem]">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4.5] overflow-hidden">
                      <Image
                        src={img?.imageUrl || ""}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        data-ai-hint={img?.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white font-headline text-2xl md:text-3xl">{category.name}</h3>
                          <div className="bg-accent p-3 rounded-full text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <ArrowUpRight size={20} />
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
