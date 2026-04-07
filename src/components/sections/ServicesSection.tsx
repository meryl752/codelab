"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, SERVICES_TITLE, SERVICES_SUBTITLE } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BRUTE_SHAPES = [
  "polygon(1% 2%, 99% 0%, 100% 98%, 2% 100%)",
  "polygon(0% 0%, 100% 3%, 98% 100%, 1% 97%)",
  "polygon(2% 1%, 100% 0%, 97% 99%, 0% 100%)",
  "polygon(0% 2%, 98% 0%, 100% 100%, 3% 98%)",
];

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function ServicesSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = SERVICES.length;

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  const prev = () => go(Math.max(0, index - 1));
  const next = () => go(Math.min(total - 1, index + 1));

  const svc = SERVICES[index];

  return (
    <section id="solutions" className="py-24 md:py-32 bg-surface transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="font-label text-xs tracking-[0.2em] uppercase text-primary mb-4 block font-bold">
            02 / Services
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter leading-none text-on-surface">
              {SERVICES_TITLE}<span className="text-primary">.</span>
            </h2>
            <p className="text-secondary dark:text-secondary/60 text-base md:text-lg font-light leading-relaxed max-w-xl opacity-80">
              {SERVICES_SUBTITLE}
            </p>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex gap-2 mb-8">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="h-[3px] rounded-full transition-all duration-500 focus:outline-none"
              style={{
                width: i === index ? "2.5rem" : "0.75rem",
                backgroundColor: i === index ? "var(--color-primary)" : "var(--color-outline-variant)",
                opacity: i === index ? 1 : 0.4,
              }}
              aria-label={`Service ${i + 1}`}
            />
          ))}
        </div>

        {/* Card area */}
        <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="w-full"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">

                {/* Main card */}
                <div
                  className="relative w-full md:w-3/5 p-8 md:p-12 bg-surface-container-high dark:bg-surface-container-low border border-outline-variant/10 shadow-ambient overflow-hidden"
                  style={{ clipPath: BRUTE_SHAPES[index % BRUTE_SHAPES.length] }}
                >
                  <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#1a1f4a] dark:bg-white z-10" />
                  <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#1a1f4a] dark:bg-white z-10" />
                  <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-[#1a1f4a] dark:bg-white z-10" />
                  <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-[#1a1f4a] dark:bg-white z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                  <span className="text-primary/20 font-headline font-black text-8xl absolute top-4 right-6 select-none leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-headline text-2xl md:text-4xl font-bold mb-6 tracking-tighter text-on-surface relative z-10">
                    {svc.title}
                  </h3>
                  <p className="text-secondary dark:text-secondary/70 text-base md:text-xl leading-relaxed max-w-lg relative z-10">
                    {svc.description}
                  </p>
                </div>

                {/* Features card */}
                <div className="relative w-full md:w-2/5 p-8 border border-dashed border-primary/20 bg-surface-container-lowest shadow-ambient">
                  <div className="absolute top-0 right-0 w-8 h-[2px] bg-[#1a1f4a] dark:bg-white z-10" />
                  <div className="absolute top-0 right-0 w-[2px] h-8 bg-[#1a1f4a] dark:bg-white z-10" />
                  <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#1a1f4a] dark:bg-white z-10" />
                  <div className="absolute bottom-0 left-0 w-[2px] h-8 bg-[#1a1f4a] dark:bg-white z-10" />
                  <ul className="space-y-4">
                    {svc.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-primary/50 mt-2 flex-shrink-0" />
                        <span className="text-sm md:text-base text-on-surface/80 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 mt-10">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center disabled:opacity-20 text-on-surface hover:bg-primary/5 hover:border-primary transition-all active:scale-95"
            aria-label="Service précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="text-sm text-secondary font-medium tabular-nums">
            {index + 1} / {total}
          </span>
          <button
            onClick={next}
            disabled={index === total - 1}
            className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center disabled:opacity-20 text-on-surface hover:bg-primary/5 hover:border-primary transition-all active:scale-95"
            aria-label="Service suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
