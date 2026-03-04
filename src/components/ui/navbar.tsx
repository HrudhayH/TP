
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-headline text-2xl tracking-tighter text-primary">
          VRIKSA<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#products" className="text-sm font-medium hover:text-accent transition-colors">Products</Link>
          <Link href="#about" className="text-sm font-medium hover:text-accent transition-colors">About</Link>
          <Link href="#export" className="text-sm font-medium hover:text-accent transition-colors">Global Export</Link>
          <Link href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</Link>
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white rounded-full px-6 transition-all">
            Inquire Now
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col space-y-4 md:hidden animate-in fade-in slide-in-from-top-4">
          <Link href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-headline">Products</Link>
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-headline">About</Link>
          <Link href="#export" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-headline">Global Export</Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-headline">Contact</Link>
          <Button className="bg-accent text-white w-full">Inquire Now</Button>
        </div>
      )}
    </nav>
  );
}
