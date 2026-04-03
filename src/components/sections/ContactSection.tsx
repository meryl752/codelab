"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Rocket } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 bg-surface transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-outline-variant/20 shadow-xl overflow-hidden">
          
          {/* Left Column: Info - Dark Theme Accent */}
          <div className="lg:col-span-5 bg-[#0a192f] dark:bg-[#051120] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden min-h-[500px] border-r border-white/5">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary font-bold mb-6 block">
                Contactez-nous
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter mb-6 leading-tight">
                Prêt à démarrer<br />votre projet ?
              </h2>
              <p className="text-white/60 text-base font-light leading-relaxed mb-8 max-w-sm">
                Discutons de vos besoins et trouvons ensemble la solution parfaite pour votre entreprise.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-label text-[9px] uppercase tracking-widest text-white/30 mb-0.5">Email</p>
                    <a href="mailto:hello@codelab.bj" className="text-base font-medium hover:text-primary transition-colors">hello@codelab.bj</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-label text-[9px] uppercase tracking-widest text-white/30 mb-0.5">Téléphone</p>
                    <a href="tel:+2290147030588" className="text-base font-medium hover:text-primary transition-colors">+229 01 47 03 05 88</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-label text-[9px] uppercase tracking-widest text-white/30 mb-0.5">Adresse</p>
                    <p className="text-base font-medium leading-tight">Immeuble en face de l'école Bakhita, Abomey-Calavi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Block */}
            <div className="relative z-10 bg-white/5 border border-white/10 p-6 backdrop-blur-sm group hover:border-primary/50 transition-colors">
              <h4 className="font-headline text-lg font-bold mb-3 flex items-center gap-3">
                Consultation gratuite
              </h4>
              <p className="text-white/50 text-xs leading-relaxed mb-0">
                Bénéficiez d'une consultation gratuite de 30 minutes pour discuter de votre projet et recevoir nos premiers conseils d'experts.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 flex flex-col justify-center transition-colors">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-label text-[10px] uppercase tracking-widest text-secondary dark:text-secondary/60">Nom complet *</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Votre nom" 
                    className="w-full bg-transparent border-b border-outline-variant/40 py-3 focus:border-primary focus:outline-none text-on-surface transition-colors text-sm placeholder:text-secondary/30"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-label text-[10px] uppercase tracking-widest text-secondary dark:text-secondary/60">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="votre.email@exemple.com" 
                    className="w-full bg-transparent border-b border-outline-variant/40 py-3 focus:border-primary focus:outline-none text-on-surface transition-colors text-sm placeholder:text-secondary/30"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="company" className="font-label text-[10px] uppercase tracking-widest text-secondary dark:text-secondary/60">Entreprise</label>
                <input 
                  type="text" 
                  id="company" 
                  placeholder="Nom de votre entreprise" 
                  className="w-full bg-transparent border-b border-outline-variant/40 py-3 focus:border-primary focus:outline-none text-on-surface transition-colors text-sm placeholder:text-secondary/30"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="font-label text-[10px] uppercase tracking-widest text-secondary dark:text-secondary/60">Message *</label>
                <textarea 
                  id="message" 
                  rows={3} 
                  placeholder="Décrivez votre projet ou vos besoins..." 
                  className="w-full bg-transparent border-b border-outline-variant/40 py-3 focus:border-primary focus:outline-none text-on-surface transition-colors resize-none text-sm placeholder:text-secondary/30"
                  required
                />
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  className="group relative w-full md:w-max px-10 py-4 bg-[#0a192f] dark:bg-primary text-white font-headline font-bold uppercase tracking-[0.2em] text-xs overflow-hidden flex items-center justify-center gap-3 transition-all hover:pr-14"
                >
                  <span className="relative z-10 transition-colors">Envoyer le message</span>
                  <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Send className="w-4 h-4" />
                  </div>
                  <div className="absolute inset-0 bg-primary dark:bg-surface-container-high transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
