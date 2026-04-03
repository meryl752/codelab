"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/BackgroundEffects";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden transition-colors duration-500">
      
      {/* ─── NEW: Subtile Blue-White Linear Gradient Base ─── */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-white dark:from-primary/5 dark:via-surface dark:to-surface -z-20" />
      
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(0, 76, 237, 0.15)" />
      
      {/* ─── Architectural Grid Background ─── */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.12] dark:opacity-[0.08] pointer-events-none transition-opacity duration-300" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 76, 237, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 76, 237, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)"
        }} 
      />
      
      {/* Smooth Blue Wash (More visible) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0, 76, 237, 0.12),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Bold Headline & Subheadline */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-headline text-5xl md:text-7xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-on-surface mb-10 uppercase">
                Transformez vos <br />
                <span className="text-primary italic">idées en réalité</span> <br />
                technologique
              </h1>
              
              <p className="text-secondary dark:text-secondary/60 text-2xl md:text-3xl font-semibold max-w-lg leading-tight tracking-tight">
                Expertise en ingénierie logicielle, formations de pointe et solutions sur mesure pour propulser votre entreprise vers l'avenir numérique.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Vision Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* The "Flat" Vision Card with Grid */}
            <div className="bg-white/80 dark:bg-surface-container-low/80 backdrop-blur-sm rounded-[3rem] p-10 md:p-16 relative z-20 overflow-hidden border border-outline-variant/20 shadow-xl shadow-primary/5">
              
              {/* Vision Card Grid Pattern (Traits Paper Look) */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none" 
                   style={{ 
                     backgroundImage: 'linear-gradient(var(--on-surface) 1px, transparent 1px), linear-gradient(90deg, var(--on-surface) 1px, transparent 1px)', 
                     backgroundSize: '40px 40px' 
                   }} 
              />
              
              <div className="relative z-10">
                <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-8 block">
                  Notre Vision
                </span>
                
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-8 leading-tight tracking-tighter">
                  Qui sommes-nous ?
                </h2>
                
                <p className="text-on-surface text-xl md:text-2xl font-light leading-snug tracking-tight mb-10">
                  Créer un écosystème <span className="text-primary font-semibold italic">technopédagogique</span> où l'apprentissage continu et l'innovation se rencontrent pour façonner l'avenir numérique des entreprises et des individus.
                </p>
                
                <div className="border-l-4 border-primary/30 pl-8 transition-colors">
                  <p className="text-secondary dark:text-secondary/60 text-lg leading-relaxed font-light italic">
                    "Nous croyons que la technologie doit être accessible, compréhensible et transformatrice."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
