"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, X, Maximize2, Monitor, Smartphone, Cpu } from "lucide-react";
import Link from "next/link";
import ALL_PROJECTS_RAW from "../../../public/data/projects.json";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  solution?: string;
  features?: string[];
  client: string;
  year: string;
  tech: string[];
}

const ALL_PROJECTS = ALL_PROJECTS_RAW as unknown as Project[];

export default function RealisationsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("Tous");

  const categories = useMemo(() => {
    const counts = ALL_PROJECTS.reduce((acc: any, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});
    
    return [
      { name: "Tous", count: ALL_PROJECTS.length, icon: null },
      { name: "Web", count: counts["Web"] || 0, icon: Monitor },
      { name: "Mobile", count: counts["Mobile"] || 0, icon: Smartphone },
      { name: "API", count: counts["API"] || 0, icon: Cpu },
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Tous") return ALL_PROJECTS;
    return ALL_PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-surface transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 md:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-secondary/60 hover:text-primary transition-colors mb-12 font-label text-xs uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none text-on-surface">
                Nos <br /><span className="text-primary italic">Réalisations</span>
              </h1>
              <p className="text-secondary dark:text-secondary/60 text-lg md:text-xl font-light max-w-xl leading-relaxed">
                De l'idée au produit fini — découvrez les projets que nous avons conçus, développés et livrés pour nos clients.
              </p>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-t lg:border-t-0 lg:border-l border-outline-variant/20 lg:pl-12 transition-colors">
              <div>
                <p className="text-4xl font-headline font-black text-on-surface mb-1">20+</p>
                <p className="text-[10px] uppercase tracking-widest text-secondary/40 font-bold">Projets livrés</p>
              </div>
              <div>
                <p className="text-4xl font-headline font-black text-primary mb-1">19</p>
                <p className="text-[10px] uppercase tracking-widest text-secondary/40 font-bold">Applications web</p>
              </div>
              <div>
                <p className="text-4xl font-headline font-black text-on-surface mb-1">15</p>
                <p className="text-[10px] uppercase tracking-widest text-secondary/40 font-bold">Apps mobiles</p>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 border-b border-outline-variant/10 pb-8 transition-colors">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveFilter(cat.name)}
                className={cn(
                  "px-6 py-2 rounded-full font-label text-[11px] uppercase tracking-widest transition-all border",
                  activeFilter === cat.name 
                    ? "bg-primary border-primary text-on-primary shadow-lg shadow-primary/20" 
                    : "bg-transparent border-outline-variant/30 text-secondary/60 hover:border-primary/50 hover:text-primary dark:text-secondary/60"
                )}
              >
                {cat.name}
                <span className={cn(
                    "ml-2 text-[9px] font-black transition-colors",
                    activeFilter === cat.name ? "text-on-primary" : "text-secondary/40"
                )}>
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-8 bg-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative aspect-[4/5] overflow-hidden bg-surface-container-low border border-outline-variant/10 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale blur-[1px] opacity-80 dark:opacity-60 group-hover:grayscale-0 group-hover:blur-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-left">
                    <div className="translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                      <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold mb-1 block">
                        {project.category}
                      </span>
                      <p className="font-headline text-lg font-bold text-white">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
                          <Maximize2 className="w-4 h-4" />
                      </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/98 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-surface-container-low border border-white/5 shadow-3xl flex flex-col scrollbar-hide rounded-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="fixed top-8 right-8 text-white hover:text-primary transition-colors p-3 z-[110] bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-primary/50"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full">
                <div className="aspect-video w-full overflow-hidden bg-black/40">
                    <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    />
                </div>
                
                <div className="p-8 md:p-16 bg-surface flex flex-col gap-12 transition-colors duration-500">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant/10 pb-12 text-left">
                    <div className="max-w-2xl">
                      <span className="font-label text-xs uppercase tracking-[0.4em] text-primary font-bold mb-6 block">
                        {selectedProject.category}
                      </span>
                      <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-on-surface leading-none">
                        {selectedProject.title}
                      </h2>
                    </div>
                    <div className="hidden lg:block text-right">
                       <p className="text-secondary/30 font-label text-[10px] uppercase tracking-widest leading-relaxed">
                          CodeLab Architect Studio<br />
                          Case Study — Ref.{selectedProject.id.toString().padStart(4, '0')}
                       </p>
                    </div>
                  </div>
                  
                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 text-left">
                    <div className="lg:col-span-8">
                        <div className="mb-12">
                            <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-primary font-black mb-6">Le Projet</h4>
                            <p className="text-on-surface text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
                                {selectedProject.description}
                            </p>
                        </div>

                        {/* Extra project details if they exist in JSON */}
                        {selectedProject.solution && (
                            <div className="mb-12">
                                <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-primary font-black mb-6">Notre Solution</h4>
                                <p className="text-secondary dark:text-secondary/70 text-lg font-light leading-relaxed">
                                    {selectedProject.solution}
                                </p>
                            </div>
                        )}

                        {selectedProject.features && (
                            <div>
                                <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-primary font-black mb-6">Caractéristiques</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {selectedProject.features.map((f: string) => (
                                        <li key={f} className="flex items-center gap-3 text-secondary dark:text-secondary/70 text-base font-light">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-10 lg:border-l border-outline-variant/10 lg:pl-12">
                        {selectedProject.client && (
                            <div>
                                <h4 className="font-label text-[10px] uppercase tracking-widest text-secondary/40 font-bold mb-3">Client</h4>
                                <p className="text-on-surface font-headline font-bold text-xl">{selectedProject.client}</p>
                            </div>
                        )}
                        {selectedProject.year && (
                            <div>
                                <h4 className="font-label text-[10px] uppercase tracking-widest text-secondary/40 font-bold mb-3">Période</h4>
                                <p className="text-on-surface font-headline font-bold text-xl">{selectedProject.year}</p>
                            </div>
                        )}
                        {selectedProject.tech && (
                            <div>
                                <h4 className="font-label text-[10px] uppercase tracking-widest text-secondary/40 font-bold mb-6">Stack Technologique</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((t: string) => (
                                        <span key={t} className="px-4 py-2 bg-surface-container-low text-secondary dark:text-secondary/60 text-[10px] font-label uppercase tracking-widest border border-outline-variant/20 transition-all hover:border-primary hover:text-primary">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        <div className="mt-8 pt-8 border-t border-outline-variant/10">
                            <button className="w-full btn-primary py-4 text-xs tracking-widest uppercase">
                                visiter le projet
                            </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
