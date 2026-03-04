
"use client";

import React from "react";
import { ShieldCheck, Truck, Leaf, Globe, Zap, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const FEATURES = [
  { 
    icon: ShieldCheck, 
    title: "Unyielding Quality", 
    description: "Every shipment undergoes a 12-point inspection to ensure global compliance." 
  },
  { 
    icon: Truck, 
    title: "Precision Logistics", 
    description: "Seamless door-to-port delivery with real-time tracking across 24 countries." 
  },
  { 
    icon: Leaf, 
    title: "Sustainable Soil", 
    description: "Our farmers use regenerative techniques to preserve India's rich topsoil." 
  },
  { 
    icon: Globe, 
    title: "Global Compliance", 
    description: "Fully certified by APEDA, HACCP, and international food safety bodies." 
  },
  { 
    icon: Zap, 
    title: "Direct Sourcing", 
    description: "Eliminating middlemen ensures freshness and better value for our partners." 
  },
  { 
    icon: Users, 
    title: "Farmer-First", 
    description: "We reinvest a portion of every sale into rural farming infrastructure." 
  }
];

export function WhyChoose() {
  useScrollReveal();

  return (
    <section className="py-32 md:py-56 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-32 space-y-6 reveal-on-scroll">
          <p className="font-headline text-accent uppercase tracking-widest text-sm">The Vriksa Advantage</p>
          <h2 className="font-headline text-5xl md:text-7xl text-primary tracking-tighter">
            Why the world <br />chooses us.
          </h2>
          <p className="text-xl text-muted-foreground font-light font-body">
            Combining traditional agricultural wisdom with futuristic global logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="group p-10 rounded-[2.5rem] bg-muted/30 border border-transparent hover:border-accent/10 hover:bg-white hover:shadow-2xl transition-all duration-500 reveal-on-scroll"
              style={{ transitionDelay: `${index * 50}ms` }}
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
