
"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6 col-span-1 md:col-span-1">
          <Link href="/" className="font-headline text-3xl tracking-tighter text-primary">
            VRIKSA<span className="text-accent">.</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Exporting excellence from the heart of India to the global stage. Committed to sustainability, quality, and traditional wisdom.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline text-lg uppercase tracking-widest text-primary">Products</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-accent transition-colors">Basmati Rice</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Organic Millets</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Pulses & Grains</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Indian Spices</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline text-lg uppercase tracking-widest text-primary">Company</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Quality Control</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Sustainability</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline text-lg uppercase tracking-widest text-primary">Newsletter</h4>
          <p className="text-sm text-muted-foreground">Stay updated with our latest harvests and export news.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white border border-border px-4 py-2 rounded-full text-sm flex-1 outline-none focus:ring-1 focus:ring-accent"
            />
            <button className="bg-primary text-white text-sm px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Vriksa Global. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-accent transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
