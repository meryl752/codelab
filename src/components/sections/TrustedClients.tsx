"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Importing logo assets
// Using public paths since Next.js can resolve them if they are in public/ or directly in src/assets with appropriate loader
// We'll use the listed filenames
const CLIENT_LOGOS = [
  { name: "Blaffa", src: "/images/clients/blaffa.png" },
  { name: "Djofo", src: "/images/clients/djofo.png" },
  { name: "Flowmoney", src: "/images/clients/flowmoney.png" },
  { name: "Indigo", src: "/images/clients/indigo.png" },
  { name: "Lamedcash", src: "/images/clients/lamedcash.webp" },
  { name: "Minfo", src: "/images/clients/minfo.avif" },
  { name: "Yutu", src: "/images/clients/yutu.png" },
];

export default function TrustedClients() {
  // Doubling the logos for infinite marquee effect
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative py-24 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Title */}
        <span className="font-label text-[10px] uppercase tracking-[0.4em] text-secondary/40 font-bold mb-12 block text-center">
          Ils nous font confiance
        </span>

        {/* Marquee Container */}
        <div className="relative space-y-6">
          <style>{`
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes scroll-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-scroll-left {
              animation: scroll-left 50s linear infinite;
              will-change: transform;
            }
            .animate-scroll-right {
              animation: scroll-right 50s linear infinite;
              will-change: transform;
            }
            .pause-on-hover:hover .animate-scroll-left,
            .pause-on-hover:hover .animate-scroll-right {
              animation-play-state: paused;
            }
          `}</style>

          {/* Row 1 - Scroll Left */}
          <div 
            className="relative overflow-hidden w-full group"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
            }}
          >
            <div className="flex gap-4 items-center animate-scroll-left w-max group-hover:pause-on-hover px-4">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
                <div
                  key={`${logo.name}-row1-${index}`}
                  className="flex items-center gap-4 px-10 py-6 border border-outline-variant/30 bg-surface-container-low dark:bg-surface-container-high transition-colors shadow-sm text-on-surface/80 rounded-none text-base font-bold hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-10 w-auto object-contain"
                  />
                  <span className="tracking-tighter uppercase">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scroll Right */}
          <div 
            className="relative overflow-hidden w-full group"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
            }}
          >
            <div className="flex gap-4 items-center animate-scroll-right w-max group-hover:pause-on-hover px-4">
              {[...[...CLIENT_LOGOS].reverse(), ...[...CLIENT_LOGOS].reverse()].map((logo, index) => (
                <div
                  key={`${logo.name}-row2-${index}`}
                  className="flex items-center gap-4 px-10 py-6 border border-outline-variant/30 bg-surface-container-low dark:bg-surface-container-high transition-colors shadow-sm text-on-surface/80 rounded-none text-base font-bold hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-10 w-auto object-contain"
                  />
                  <span className="tracking-tighter uppercase">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
