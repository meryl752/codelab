"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { SERVICES, SERVICES_TITLE, SERVICES_SUBTITLE } from "@/lib/constants";

const ACCENT_COLORS = [
  "rgba(0, 76, 237, 0.05)",
  "rgba(0, 76, 237, 0.03)",
  "rgba(0, 76, 237, 0.06)",
  "rgba(0, 76, 237, 0.04)",
];

const BRUTE_SHAPES = [
  "polygon(1% 2%, 99% 0%, 100% 98%, 2% 100%)",
  "polygon(0% 0%, 100% 3%, 98% 100%, 1% 97%)",
  "polygon(2% 1%, 100% 0%, 97% 99%, 0% 100%)",
  "polygon(0% 2%, 98% 0%, 100% 100%, 3% 98%)",
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
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
    <section
      id="solutions"
      ref={sectionRef}
      className="relative"
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
                      {/* Big background number */}
                      <span className="absolute -top-12 -left-6 md:-top-16 md:-left-10 font-headline text-7xl md:text-8xl font-black text-primary opacity-[0.08] select-none leading-none z-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="relative h-full flex flex-col md:flex-row gap-8 items-center md:items-stretch">
                        {/* Main Info Card */}
                        <div
                          className="relative z-10 w-full md:w-3/5 p-8 md:p-12 transition-all duration-500 shadow-ambient backdrop-blur-md border border-outline-variant/10 bg-surface-container-low/40 dark:bg-surface-container-high/20"
                          style={{ 
                            clipPath: BRUTE_SHAPES[i % BRUTE_SHAPES.length],
                          }}
                        >
                          {/* Inner Radiant Glow */}
                          {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                          )}
                          
                          <h3 className="font-headline text-2xl md:text-3xl font-semibold mb-6 tracking-tighter text-on-surface">
                            {svc.title}
                          </h3>
                          <p className="text-secondary dark:text-secondary/60 text-base md:text-lg leading-relaxed max-w-lg">
                            {svc.description}
                          </p>
                        </div>

                        {/* Features Box */}
                        <motion.div 
                          className="w-full md:w-2/5 p-8 border-2 border-dashed border-primary/20 bg-surface-container-lowest/40 dark:bg-surface-container-low/40 shadow-ambient backdrop-blur-sm"
                          initial={false}
                          animate={isActive ? { x: 20, y: 30, opacity: 1 } : { x: 0, y: 0, opacity: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
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
  );
}
