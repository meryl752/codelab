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
        scrolled
          ? "bg-white/70 dark:bg-surface backdrop-blur-[24px] shadow-ambient"
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
            className="md:hidden flex flex-col gap-1.5 p-1"
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
      {menuOpen && (
        <div className="md:hidden glass border-t border-outline-variant/20 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-headline text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
