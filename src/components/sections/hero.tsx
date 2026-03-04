
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-rice-field");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || ""}
          alt={heroImage?.description || "Rice field sunrise"}
          fill
          priority
          className="object-cover scale-105 animate-pulse-slow transition-transform duration-[10s] ease-out hover:scale-100"
          data-ai-hint={heroImage?.imageHint}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
        <div className="space-y-4 animate-fade-in-up">
          <p className="font-headline text-accent uppercase tracking-[0.3em] text-sm md:text-base">
            Agricultural Excellence
          </p>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight">
            From Indian Farms <br />
            <span className="italic">to Global Markets</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto font-body">
            Vriksa exports the finest premium agricultural products, bridging the gap between local quality and international standards.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up [animation-delay:400ms]">
          <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-10 py-6 text-lg transition-all hover:scale-105">
            Explore Collection
          </Button>
          <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-primary rounded-full px-10 py-6 text-lg transition-all">
            Our Story
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/60">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
