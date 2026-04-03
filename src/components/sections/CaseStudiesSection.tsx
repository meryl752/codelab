"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

import ALL_PROJECTS from "../../../public/data/projects.json";

const SELECTED_PROJECTS = ALL_PROJECTS.slice(0, 3);

export default function CaseStudiesSection() {
  return (
    <section id="realisations" className="py-32 px-6 md:px-8 bg-surface transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="font-label text-sm tracking-[0.3em] uppercase text-primary mb-6 font-bold block">
              03 / RÉALISATIONS
            </span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none text-on-surface">
              Nos Réalisations
            </h2>
            <p className="text-secondary dark:text-secondary/60 text-lg md:text-xl font-light leading-relaxed opacity-80">
              Découvrez nos solutions phares, conçues pour propulser nos partenaires vers l&apos;excellence numérique.
            </p>
          </div>
          
          <Link 
            href="/realisations" 
            className="group flex items-center gap-3 px-8 py-4 bg-[#0a192f] dark:bg-primary text-white font-headline font-bold uppercase tracking-widest text-xs transition-all duration-300 border border-[#0a192f] dark:border-primary hover:bg-transparent hover:text-[#0a192f] dark:hover:text-primary"
          >
            Voir plus
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-16">
          {SELECTED_PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className="relative h-[500px] w-full overflow-hidden border border-outline-variant/10 group shadow-lg"
            >
              {/* Image (Permanently Blurred & Grayscale) */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover filter grayscale blur-[3px] scale-105 opacity-80 dark:opacity-40 transition-opacity duration-500"
              />
              
              {/* Static Overlay Content (Always Visible) */}
              <div className="absolute inset-0 bg-black/50 dark:bg-black/70 flex flex-col justify-end p-8 z-20">
                <div className="text-left">
                    <span className="font-label text-[10px] uppercase tracking-widest text-primary font-black mb-3 block">
                        {project.category}
                    </span>
                    <h3 className="font-headline text-3xl font-bold text-white mb-4">
                        {project.title}
                    </h3>
                    <p className="text-white/80 dark:text-white/60 text-sm leading-relaxed font-light mb-2 max-w-[90%]">
                        {project.description}
                    </p>
                </div>
              </div>

              {/* Minimalist Top Left Index (Always visible) */}
              <div className="absolute top-8 left-8 text-white z-20">
                <span className="font-label text-[10px] uppercase tracking-[0.5em] font-black opacity-30">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden relative -mx-6 px-6 mb-16">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 scrollbar-hide">
            {SELECTED_PROJECTS.map((project, index) => (
              <div
                key={`mobile-${project.title}`}
                className="relative h-[450px] w-[85vw] max-w-[300px] flex-shrink-0 snap-center overflow-hidden border border-outline-variant/10 group shadow-lg"
              >
                {/* Image (Permanently Blurred & Grayscale) */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover filter grayscale blur-[3px] scale-105 opacity-80 dark:opacity-60 transition-opacity duration-500"
                />
                
                {/* Static Overlay Content (Always Visible) */}
                <div className="absolute inset-0 bg-black/60 dark:bg-black/70 flex flex-col justify-end p-8 z-20">
                  <div className="text-left">
                      <span className="font-label text-[10px] uppercase tracking-widest text-primary font-black mb-3 block">
                          {project.category}
                      </span>
                      <h3 className="font-headline text-2xl font-bold text-white mb-4">
                          {project.title}
                      </h3>
                      <p className="text-white/80 dark:text-white/60 text-sm leading-relaxed font-light mb-2">
                          {project.description}
                      </p>
                  </div>
                </div>

                {/* Minimalist Top Left Index (Always visible) */}
                <div className="absolute top-6 left-6 text-white z-20">
                  <span className="font-label text-[10px] uppercase tracking-[0.5em] font-black opacity-40">
                    0{index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
