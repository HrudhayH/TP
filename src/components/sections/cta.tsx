
"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center space-y-12 bg-primary p-12 md:p-24 rounded-[3rem] text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
          <p className="font-headline text-accent uppercase tracking-widest text-sm">Get in Touch</p>
          <h2 className="font-headline text-4xl md:text-6xl leading-tight">
            Ready to bring the finest Indian produce to your market?
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-body">
            Join our global network of partners. Whether you're a distributor, retailer, or industrial buyer, we offer tailored solutions to meet your needs.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-12 py-7 text-lg h-auto transition-all hover:scale-105">
            Partner with Us
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-12 py-7 text-lg h-auto">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
