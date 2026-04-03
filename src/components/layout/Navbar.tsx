"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "bg-surface/95 dark:bg-black/95 backdrop-blur-[24px] shadow-ambient border-b border-outline-variant/10"
          : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <img src="/images/logo.png" alt="CodeLab Logo" className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110" />
          <span className="text-2xl font-bold tracking-tighter text-on-surface font-headline group-hover:text-primary transition-colors">
            CodeLab
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "font-headline tracking-tight text-sm transition-colors uppercase",
                link.label === "fr"
                  ? "text-primary font-bold opacity-60 hover:opacity-100"
                  : "text-secondary dark:text-secondary/60 hover:text-primary font-medium"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Theme Toggle & Mobile hamburger */}
        <div className="flex gap-4 items-center">
          <ThemeToggle />
          
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 relative z-[60]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "w-5 h-0.5 bg-on-surface transition-all",
                menuOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "w-5 h-0.5 bg-on-surface transition-all",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "w-5 h-0.5 bg-on-surface transition-all",
                menuOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 top-[72px] bg-white/95 dark:bg-black/95 backdrop-blur-3xl px-6 py-10 flex flex-col gap-6 transition-all duration-300 z-40 transform h-[calc(100vh-72px)] overflow-y-auto",
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        {NAV_LINKS.map((link, idx) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-headline text-3xl font-bold uppercase tracking-tight text-on-surface hover:text-primary transition-colors border-b border-outline-variant/10 pb-4"
            style={{ transitionDelay: `${menuOpen ? idx * 50 : 0}ms` }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
