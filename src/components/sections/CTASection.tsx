"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="contact" className="relative px-6 md:px-8 py-24 overflow-hidden bg-surface transition-colors duration-500">
      
      {/* ─── Static Subtle Background ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Static Glows instead of animated blobs */}
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary/10 blur-3xl opacity-40" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-secondary/5 blur-3xl opacity-30" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" 
             style={{ backgroundImage: 'linear-gradient(var(--on-surface) 1px, transparent 1px), linear-gradient(90deg, var(--on-surface) 1px, transparent 1px)', backgroundSize: '80px 80px' }} 
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative bg-[#0a192f] rounded-[3rem] p-12 md:py-16 md:px-20 overflow-hidden shadow-2xl border border-white/5">
          
          <div className="relative z-20 flex flex-col items-center text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-none"
            >
              Prêt à transformer votre <br />
              <span className="text-primary italic">vision en réalité ?</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed"
            >
              Discutons de votre projet et définissons ensemble la stratégie qui propulsera votre entreprise vers le succès.
            </motion.p>

            <div>
              <Link 
                href="#contact" 
                className="relative px-10 py-5 bg-primary text-on-primary font-headline font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-lg shadow-primary/20 rounded-none transition-colors hover:bg-primary/90"
              >
                <span>Démarrer votre projet</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
