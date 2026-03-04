
"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

export function FeaturedProduct() {
  const riceImage = PlaceHolderImages.find(img => img.id === "rice-macro");

  return (
    <section className="py-24 md:py-40 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 rounded-full px-4 py-1">Featured Product</Badge>
              <h2 className="font-headline text-5xl md:text-7xl leading-tight">
                The Gold Standard <br />
                <span className="italic text-accent">of Basmati</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-white/80 font-body leading-relaxed">
              <p>
                Grown in the foothills of the Himalayas, our premium Basmati rice is aged to perfection. Each long, slender grain carries a distinctive aroma that transforms a meal into a sensory experience.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <h4 className="font-headline text-xl text-accent">Purity Assured</h4>
                  <p className="text-sm">99.9% purity grade with zero additives or artificial coloring.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-headline text-xl text-accent">Aromatic Profile</h4>
                  <p className="text-sm">Natural fragrance that intensifies upon cooking, a hallmark of aged rice.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-headline text-xl text-accent">Export Grade</h4>
                  <p className="text-sm">Meeting stringent quality certifications for USA, Europe, and Middle East.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-headline text-xl text-accent">Sustainable</h4>
                  <p className="text-sm">Ethically sourced using water-efficient farming techniques.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] md:aspect-square order-1 lg:order-2 rounded-[2rem] overflow-hidden group">
            <Image
              src={riceImage?.imageUrl || ""}
              alt="Macro rice grains"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              data-ai-hint={riceImage?.imageHint}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
          </div>

        </div>
      </div>
    </section>
  );
}
