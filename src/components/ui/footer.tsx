
"use client";

import React from "react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerChild } from "@/components/ui/animated-text";

export function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 bg-background border-t border-border relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-40 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <StaggerContainer staggerDelay={0.1} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <StaggerChild className="space-y-6 col-span-1 md:col-span-1">
          <Link href="/" className="font-headline text-3xl tracking-tighter text-primary inline-block group">
            VRIKSA<span className="text-accent group-hover:opacity-50 transition-opacity">.</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Exporting excellence from the heart of India to the global stage. Committed to sustainability, quality, and traditional wisdom.
          </p>
        </StaggerChild>

        <StaggerChild className="space-y-6">
          <h4 className="font-headline text-lg uppercase tracking-widest text-primary">Products</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-accent transition-colors duration-300 nav-underline">Basmati Rice</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors duration-300 nav-underline">Organic Millets</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors duration-300 nav-underline">Pulses &amp; Grains</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors duration-300 nav-underline">Indian Spices</Link></li>
          </ul>
        </StaggerChild>

        <StaggerChild className="space-y-6">
          <h4 className="font-headline text-lg uppercase tracking-widest text-primary">Company</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-accent transition-colors duration-300 nav-underline">Our Story</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors duration-300 nav-underline">Quality Control</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors duration-300 nav-underline">Sustainability</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors duration-300 nav-underline">Careers</Link></li>
          </ul>
        </StaggerChild>

        <StaggerChild className="space-y-6">
          <h4 className="font-headline text-lg uppercase tracking-widest text-primary">Newsletter</h4>
          <p className="text-sm text-muted-foreground">Stay updated with our latest harvests and export news.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white border border-border px-4 py-2 rounded-full text-sm flex-1 outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-300"
            />
            <button className="bg-primary text-white text-sm px-6 py-2 rounded-full hover:bg-accent transition-colors duration-300 magnetic-btn">Join</button>
          </div>
        </StaggerChild>
      </StaggerContainer>

      <FadeIn delay={0.5}>
        <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Vriksa Global. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</Link>
            <Link href="#" className="hover:text-accent transition-colors duration-300">Cookie Policy</Link>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
