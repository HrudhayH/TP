
"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  { id: "rice", name: "Premium Rice", image: "rice-macro", description: "Long-grain Basmati and aromatic varieties." },
  { id: "millets", name: "Ancient Millets", image: "millets-category", description: "Gluten-free nutrient powerhouses." },
  { id: "pulses", name: "Organic Pulses", image: "pulses-category", description: "Protein-rich legumes sourced responsibly." },
  { id: "spices", name: "Authentic Spices", image: "spices-category", description: "The soul of flavor from Indian soils." },
  { id: "dry-fruits", name: "Premium Dry Fruits", image: "dry-fruits-category", description: "Nature's handpicked energy snacks." },
];

export function ProductCategories() {
  return (
    <section id="products" className="py-24 md:py-40 px-6 md:px-12 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <p className="font-headline text-accent uppercase tracking-widest text-sm">Our Portfolio</p>
            <h2 className="font-headline text-4xl md:text-6xl text-primary">Nurtured by Nature</h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg">
            Explore our diverse range of high-quality agricultural exports, each selected for its purity and nutritional value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {CATEGORIES.map((category) => {
            const img = PlaceHolderImages.find(i => i.id === category.image);
            return (
              <Card key={category.id} className="group relative overflow-hidden border-none bg-transparent hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                    <Image
                      src={img?.imageUrl || ""}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={img?.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-headline text-2xl">{category.name}</h3>
                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>
                      <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
