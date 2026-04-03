"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { value: "100+", label: "Projets réalisés" },
    { value: "200+", label: "Étudiants formés" },
    { value: "98%", label: "Satisfaction client!" },
  ];

  return (
    <section className="py-10 px-6 md:px-8 relative overflow-visible">
      <div className="max-w-7xl mx-auto relative">
        {/*
          Forme brute irrégulière — un blob asymétrique découpé via clip-path.
          Bleu uni léger, pas de gradient. Forme osée et non conventionnelle.
        */}
        <div
          className="relative px-8 md:px-16 py-16 md:py-20"
          style={{
            backgroundColor: 'rgba(0, 76, 237, 0.07)',
            clipPath: 'polygon(0% 12%, 4% 0%, 15% 5%, 30% 1%, 45% 8%, 55% 2%, 70% 6%, 82% 0%, 92% 4%, 100% 10%, 99% 30%, 100% 50%, 98% 70%, 100% 88%, 96% 100%, 85% 96%, 70% 100%, 55% 95%, 42% 100%, 28% 97%, 15% 100%, 5% 95%, 0% 100%, 1% 75%, 0% 55%, 2% 35%)',
          }}
        >
          {/* Stats content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-center">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center group"
              >
                <span className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none">
                  {stat.value}
                </span>
                <p className="font-label text-xs uppercase tracking-[0.2em] text-secondary mt-3 font-bold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
