
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-6 md:px-12",
        isScrolled ? "py-3" : "py-6"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 px-6 py-3 rounded-full",
        isScrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-lg shadow-black/5 border border-white/50"
          : "bg-transparent"
      )}>
        <Link href="/" className="font-headline text-3xl tracking-tighter group relative">
          <span className={cn(
            "transition-colors duration-500",
            isScrolled ? "text-primary" : "text-white"
          )}>VRIKSA</span>
          <span className="text-accent group-hover:opacity-50 transition-opacity">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {["Products", "About", "Global Export", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            >
              <Link
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={cn(
                  "text-sm uppercase tracking-widest font-medium hover:text-accent transition-all nav-underline",
                  isScrolled ? "text-primary" : "text-white"
                )}
              >
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button variant="outline" className={cn(
              "rounded-full px-8 transition-all duration-500 magnetic-btn",
              isScrolled
                ? "border-accent text-accent hover:bg-accent hover:text-white"
                : "border-white/40 text-white hover:bg-white hover:text-primary hover:border-white"
            )}>
              Inquire Now
            </Button>
          </motion.div>
        </div>

        {/* Mobile Nav Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={cn("md:hidden transition-colors", isScrolled ? "text-primary" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-6 right-6 mt-4 bg-white/90 backdrop-blur-2xl rounded-[2rem] p-8 flex flex-col space-y-6 md:hidden shadow-2xl border border-white/50"
          >
            {["Products", "About", "Global Export", "Contact"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <Link
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-headline text-primary border-b border-primary/5 pb-2 hover:text-accent transition-colors block"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <Button className="bg-accent text-white w-full rounded-full py-6 text-lg magnetic-btn">Inquire Now</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
