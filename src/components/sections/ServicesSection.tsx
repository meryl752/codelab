"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { SERVICES, SERVICES_TITLE, SERVICES_SUBTITLE } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BRUTE_SHAPES = [
  "polygon(1% 2%, 99% 0%, 100% 98%, 2% 100%)",
  "polygon(0% 0%, 100% 3%, 98% 100%, 1% 97%)",
  "polygon(2% 1%, 100% 0%, 97% 99%, 0% 100%)",
  "polygon(0% 2%, 98% 0%, 100% 100%, 3% 98%)",
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const totalCards = SERVICES.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const adjustedProgress = Math.max(0, Math.min(1, (latest - 0.08) / 0.84));
    const newIndex = Math.min(
      totalCards - 1,
      Math.floor(adjustedProgress * totalCards)
    );
    setActiveIndex(newIndex);
  });

  return (
    <div id="solutions" className="relative w-full overflow-hidden">
      
      {/* ─── DESKTOP VIEW (Sticky Scroll) ─── */}
      <section
        ref={sectionRef}
        className="relative hidden md:block"
        style={{ height: `${(totalCards + 1) * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-surface transition-colors duration-500">
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-8">
            <div className="max-w-7xl mx-auto w-full">
              {/* Section header */}
              <div className="mb-10 md:mb-16">
                <motion.span
                  className="font-label text-xs tracking-[0.2em] uppercase text-primary mb-4 block font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  02 / Services
                </motion.span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter leading-none mb-4 text-on-surface">
                  {SERVICES_TITLE}
                  <span className="text-primary">.</span>
                </h2>
                <p className="text-secondary dark:text-secondary/60 text-base md:text-lg font-light leading-relaxed max-w-2xl opacity-80">
                  {SERVICES_SUBTITLE}
                </p>
              </div>

              {/* Card carousel area */}
              <div className="relative">
                {/* Cards stack */}
                <div className="relative h-[480px] md:h-[420px]">
                  {SERVICES.map((svc, i) => {
                    const isActive = i === activeIndex;
                    const isPast = i < activeIndex;
                    const isFuture = i > activeIndex;

                    return (
                      <motion.div
                        key={svc.title}
                        className="absolute inset-0"
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          x: isPast ? -30 : isFuture ? 30 : 0,
                          y: isPast ? -15 : isFuture ? 15 : 0,
                          scale: isActive ? 1 : 0.96,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 180,
                          damping: 25,
                        }}
                        style={{ pointerEvents: isActive ? "auto" : "none" }}
                      >
                        {/* Big background number removed */}

                        <div className="relative h-full flex flex-col md:flex-row gap-8 items-center md:items-stretch">
                          {/* Main Info Card */}
                          <div
                            className="relative z-10 w-full md:w-3/5 p-8 md:p-12 transition-all duration-500 shadow-ambient border border-outline-variant/10 bg-surface-container-high dark:bg-surface-container-low overflow-hidden group"
                            style={{ 
                              clipPath: BRUTE_SHAPES[i % BRUTE_SHAPES.length],
                            }}
                          >
                            {/* ─── Corner Accents ─── */}
                            <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#1a1f4a] dark:bg-white z-20 transition-colors" />
                            <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#1a1f4a] dark:bg-white z-20 transition-colors" />
                            <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-[#1a1f4a] dark:bg-white z-20 transition-colors" />
                            <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-[#1a1f4a] dark:bg-white z-20 transition-colors" />

                            {/* Inner Radiant Glow */}
                            {isActive && (
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                            )}
                            
                            <h3 className="font-headline text-2xl md:text-4xl font-bold mb-6 tracking-tighter text-on-surface">
                              {svc.title}
                            </h3>
                            <p className="text-secondary dark:text-secondary/70 text-base md:text-xl leading-relaxed max-w-lg">
                              {svc.description}
                            </p>
                          </div>

                          {/* Features Box */}
                          <motion.div 
                            className="relative w-full md:w-2/5 p-8 border border-dashed border-primary/20 bg-surface-container-lowest dark:bg-surface-container-lowest shadow-ambient transition-colors overflow-hidden"
                            initial={false}
                            animate={isActive ? { x: 20, y: 30, opacity: 1 } : { x: 0, y: 0, opacity: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                          >
                            {/* ─── Corner Accents ─── */}
                            <div className="absolute top-0 right-0 w-8 h-[2px] bg-[#1a1f4a] dark:bg-white z-20 transition-colors" />
                            <div className="absolute top-0 right-0 w-[2px] h-8 bg-[#1a1f4a] dark:bg-white z-20 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#1a1f4a] dark:bg-white z-20 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-[2px] h-8 bg-[#1a1f4a] dark:bg-white z-20 transition-colors" />
                            <ul className="space-y-4">
                              {svc.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 bg-primary/40 mt-2 flex-shrink-0" />
                                  <span className="text-sm md:text-base text-on-surface/80 font-medium">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MOBILE VIEW (Horizontal Carousel) ─── */}
      <section className="block md:hidden py-24 bg-surface transition-colors duration-500 relative">
        <div className="px-6 mb-12">
          <span className="font-label text-xs tracking-[0.2em] uppercase text-primary mb-4 block font-bold">
            02 / Services
          </span>
          <h2 className="font-headline text-4xl font-bold tracking-tighter leading-none mb-4 text-on-surface">
            {SERVICES_TITLE}
            <span className="text-primary">.</span>
          </h2>
          <p className="text-secondary dark:text-secondary/60 text-base font-light leading-relaxed opacity-80">
            {SERVICES_SUBTITLE}
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div 
            className="flex"
            animate={{ x: `-${mobileIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {SERVICES.map((svc, i) => (
              <div key={`mobile-${svc.title}`} className="w-full flex-shrink-0 px-6">
                <div 
                  className="bg-surface-container-high dark:bg-surface-container-low border border-outline-variant/10 p-8 md:p-10 shadow-ambient relative overflow-hidden transition-all duration-300"
                  style={{ clipPath: BRUTE_SHAPES[i % BRUTE_SHAPES.length] }}
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-[2px] bg-[#1a1f4a] dark:bg-white/40" />
                  <div className="absolute top-0 left-0 w-[2px] h-6 bg-[#1a1f4a] dark:bg-white/40" />
                  <div className="absolute bottom-0 right-0 w-6 h-[2px] bg-[#1a1f4a] dark:bg-white/40" />
                  <div className="absolute bottom-0 right-0 w-[2px] h-6 bg-[#1a1f4a] dark:bg-white/40" />

                  {/* Number watermark removed */}

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="font-headline text-3xl font-bold mb-4 tracking-tighter text-on-surface">
                        {svc.title}
                      </h3>
                      <p className="text-secondary dark:text-secondary/70 text-base leading-relaxed mb-8">
                        {svc.description}
                      </p>
                    </div>

                    <div className="border-t border-dashed border-primary/20 pt-6 mt-auto">
                      <ul className="space-y-4">
                        {svc.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-primary/60 mt-1.5 flex-shrink-0" />
                            <span className="text-sm text-on-surface/90 font-medium">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center gap-6 mt-12 px-6">
          <button 
            onClick={() => setMobileIndex(prev => Math.max(0, prev - 1))}
            disabled={mobileIndex === 0}
            className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center disabled:opacity-20 text-on-surface hover:bg-primary/5 hover:border-primary transition-all active:scale-95"
            aria-label="Service précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setMobileIndex(prev => Math.min(totalCards - 1, prev + 1))}
            disabled={mobileIndex === totalCards - 1}
            className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center disabled:opacity-20 text-on-surface hover:bg-primary/5 hover:border-primary transition-all active:scale-95"
            aria-label="Service suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
      </section>

    </div>
  );
}

