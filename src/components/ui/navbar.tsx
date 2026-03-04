
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-6 md:px-12",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 px-6 py-3 rounded-full",
        isScrolled ? "glass-morphism" : "bg-transparent"
      )}>
        <Link href="/" className="font-headline text-3xl tracking-tighter text-primary group">
          VRIKSA<span className="text-accent group-hover:opacity-50 transition-opacity">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {["Products", "About", "Global Export", "Contact"].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className={cn(
                "text-sm uppercase tracking-widest font-medium hover:text-accent transition-all relative group",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
          <Button variant="outline" className={cn(
            "rounded-full px-8 transition-all border-accent text-accent hover:bg-accent hover:text-white",
            !isScrolled && "border-white/40 text-white hover:bg-white hover:text-primary hover:border-white"
          )}>
            Inquire Now
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className={cn("md:hidden transition-colors", isScrolled ? "text-primary" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 glass-morphism rounded-[2rem] p-8 flex flex-col space-y-6 md:hidden shadow-2xl"
          >
            {["Products", "About", "Global Export", "Contact"].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-2xl font-headline text-primary border-b border-primary/5 pb-2"
              >
                {item}
              </Link>
            ))}
            <Button className="bg-accent text-white w-full rounded-full py-6 text-lg">Inquire Now</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
