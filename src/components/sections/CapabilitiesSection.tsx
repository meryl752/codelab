"use client";

import { motion } from "framer-motion";
import { CAPABILITIES } from "@/lib/constants";

export default function CapabilitiesSection() {
  return (
    <section id="apropos" className="py-32 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Nos Compétences
          </h2>
          <p className="text-secondary font-body text-lg max-w-md font-light leading-relaxed">
            Nous combinons rigueur d'ingénierie et intuition créative pour livrer
            des produits qui ne se contentent pas de fonctionner — ils perdurent.
          </p>
        </div>
        <span className="font-label text-xs tracking-[0.2em] uppercase text-primary font-bold whitespace-nowrap">
          01 / Compétences
        </span>
      </div>

      {/* Cartes Longues & Séparées avec Effets de Lumière */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Le "Laser" de fibre optique - Traverse tout le container */}
        <motion.div 
          className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent z-20 pointer-events-none"
          initial={{ x: "-100%", width: "100%" }}
          animate={{ x: "100%" }}
          transition={{ 
            repeat: Infinity, 
            duration: 4, 
            ease: "easeInOut" 
          }}
          style={{ width: "200%" }}
        />

        {CAPABILITIES.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative p-10 md:py-32 bg-surface-container-low/40 backdrop-blur-sm border border-outline-variant/10 hover:border-primary/40 transition-all duration-500 flex flex-col justify-center"
          >
            {/* Arrière-plan subtile au survol - Light Aura */}
            <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="font-headline text-xl md:text-2xl font-semibold mb-6 tracking-tight">
                {cap.title}
              </h3>
              <p className="text-secondary text-sm md:text-base leading-relaxed font-body font-light opacity-80">
                {cap.description}
              </p>
            </div>

            {/* Ligne décorative discrète en bas */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
