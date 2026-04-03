"use client";

import { motion } from "framer-motion";

const API_TOKEN = "pk_ZA97lKVUS1mi1Ieid-zhHg";

const TECH_STACK = [
  { name: "React", domain: "react.dev" },
  { name: "Next.js", domain: "nextjs.org" },
  { name: "Angular", domain: "angular.io" },
  { name: "Vue.js", domain: "vuejs.org" },
  { name: "Spring", domain: "spring.io" },
  { name: "Django", domain: "djangoproject.com" },
  { name: "Node.js", domain: "nodejs.org" },
  { name: "FastAPI", domain: "fastapi.tiangolo.com" },
  { name: ".NET", domain: "dotnet.microsoft.com" },
  { name: "Flutter", domain: "flutter.dev" },
  { name: "React Native", domain: "reactnative.dev" },
  { name: "Swift", domain: "swift.org" },
  { name: "Kotlin", domain: "kotlinlang.org" },
  { name: "AWS", domain: "aws.amazon.com" },
  { name: "Azure", domain: "azure.microsoft.com" },
  { name: "Google Cloud", domain: "cloud.google.com" },
  { name: "Docker", domain: "docker.com" },
  { name: "Kubernetes", domain: "kubernetes.io" },
  { name: "TensorFlow", domain: "tensorflow.org" },
  { name: "PyTorch", domain: "pytorch.org" },
  { name: "Hugging Face", domain: "huggingface.co" },
  { name: "Power BI", domain: "powerbi.microsoft.com" },
  { name: "Solidity", domain: "soliditylang.org" },
  { name: "Laravel", domain: "laravel.com" },
  { name: "Symfony", domain: "symfony.com" },
  { name: "Ruby on Rails", domain: "rubyonrails.org" }
];

const VALUES = [
  {
    title: "Mission",
    description: "Démocratiser l'accès aux technologies de pointe et accompagner la transformation digitale des entreprises avec expertise et innovation."
  },
  {
    title: "Équipe",
    description: "Une équipe multidisciplinaire d'experts passionnés, développeurs seniors et formateurs certifiés avec plus de 10 ans d'expérience collective."
  },
  {
    title: "Innovation",
    description: "Toujours à l'avant-garde des dernières technologies pour vous offrir des solutions innovantes et performantes adaptées aux enjeux actuels."
  },
  {
    title: "Excellence",
    description: "Engagement qualité dans chaque projet avec un taux de satisfaction client de 98% et une approche centrée sur les résultats mesurables."
  }
];

export default function AboutSection() {
  return (
    <section id="a-propos" className="relative py-32 px-6 md:px-8 overflow-hidden bg-surface transition-colors duration-300">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none transition-colors" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="font-label text-sm tracking-widest text-primary mb-4 font-bold">
            04 / À PROPOS
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-on-surface">
            À propos de CodeLab
          </h2>
          <p className="text-secondary dark:text-secondary/60 text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-90">
            Transformons ensemble les défis technologiques en opportunités de croissance
          </p>
        </div>

        {/* Top Content: History Only (Vision moved to Hero) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          {/* History Section: Modernized Architectural Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-12 bg-white dark:bg-surface-container-low border border-outline-variant/20 relative overflow-hidden p-8 md:p-20 group rounded-[2rem] shadow-ambient"
          >
            {/* Architectural Grid Background for Card */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
                 style={{ 
                   backgroundImage: 'linear-gradient(var(--on-surface) 1px, transparent 1px), linear-gradient(90deg, var(--on-surface) 1px, transparent 1px)', 
                   backgroundSize: '30px 30px' 
                 }} 
            />
            
            {/* Decorative Background Text */}
            <div className="absolute -bottom-10 -right-10 font-headline text-[12rem] md:text-[20rem] font-black text-primary/[0.03] dark:text-primary/[0.05] select-none pointer-events-none leading-none uppercase">
              Story
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side: Accent & Title */}
              <div className="lg:col-span-4 border-l-4 border-primary pl-8">
                <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4 block">
                  Genèse
                </span>
                <h3 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface leading-none">
                  Notre <br />
                  <span className="text-primary italic">Histoire</span>
                </h3>
              </div>

              {/* Right Side: Content */}
              <div className="lg:col-span-8 space-y-8">
                <p className="text-secondary dark:text-secondary/60 text-xl md:text-2xl font-light leading-relaxed">
                  Fondée en 2020, CodeLab est née de la vision audacieuse de démocratiser l&apos;accès aux technologies de pointe. Nous avons identifié le besoin crucial de combler le fossé entre l&apos;innovation technologique et son adoption pratique.
                </p>
                <div className="h-px w-24 bg-primary/20" />
                <p className="text-secondary dark:text-secondary/60 text-lg md:text-xl leading-relaxed font-light italic opacity-80">
                  Aujourd&apos;hui, nous combinons une expertise technique de haut niveau avec une pédagogie innovante pour transformer les défis les plus complexes en opportunités de croissance durable.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {VALUES.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="group relative p-12 bg-surface-container-low border border-outline-variant/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30 rounded-none overflow-hidden"
            >
              <div className="relative z-10 h-full flex flex-col">
                <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary/30 font-bold mb-8 block group-hover:text-primary transition-colors">
                  Pratique 0{i + 1}
                </span>
                <h4 className="font-headline text-2xl font-bold mb-6 tracking-tighter text-on-surface">
                  {val.title}
                </h4>
                <p className="text-secondary dark:text-secondary/60 text-sm leading-relaxed font-light">
                  {val.description}
                </p>
                <div className="mt-12 mt-auto">
                    <div className="w-8 h-0.5 bg-primary/10 group-hover:w-full group-hover:bg-primary/40 transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <div>
          <div className="flex flex-col mb-8 text-center md:text-left">
            <h3 className="font-headline text-2xl font-bold mb-2 text-on-surface">
              Notre Arsenal Technologique
            </h3>
            <p className="text-secondary dark:text-secondary/60 opacity-70">
              Une maîtrise complète des outils modernes pour répondre à tous vos besoins.
            </p>
          </div>

          <div className="relative space-y-6 py-10">
            {/* CSS Animation for smooth scrolling */}
            <style>{`
              @keyframes tech-scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              @keyframes tech-scroll-right {
                0% { transform: translateX(-50%); }
                100% { transform: translateX(0); }
              }
              .animate-tech-scroll-left {
                animation: tech-scroll-left 45s linear infinite;
                will-change: transform;
              }
              .animate-tech-scroll-right {
                animation: tech-scroll-right 45s linear infinite;
                will-change: transform;
              }
              .pause-on-hover:hover .animate-tech-scroll-left,
              .pause-on-hover:hover .animate-tech-scroll-right {
                animation-play-state: paused;
              }
            `}</style>
            
            {/* Top row */}
            <div 
              className="relative overflow-hidden w-full group"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
              }}
            >
              <div className="flex gap-4 items-center animate-tech-scroll-left w-max group-hover:pause-on-hover px-4">
                {[...TECH_STACK.slice(0, Math.ceil(TECH_STACK.length/2)), ...TECH_STACK.slice(0, Math.ceil(TECH_STACK.length/2))].map((tech, index) => (
                  <div 
                    key={`${tech.name}-row1-${index}`} 
                    className="flex items-center gap-4 px-8 py-5 border border-outline-variant/30 bg-surface-container-low shadow-sm text-on-surface/80 rounded-none text-base font-semibold hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    <img 
                      src={`https://img.logo.dev/${tech.domain}?token=${API_TOKEN}`} 
                      alt={`${tech.name} logo`} 
                      className="w-7 h-7 object-contain dark:invert-[0.1] dark:grayscale"
                      loading="lazy"
                    />
                    <span className="tracking-tight">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom row */}
            <div 
              className="relative overflow-hidden w-full group"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
              }}
            >
              <div className="flex gap-4 items-center animate-tech-scroll-right w-max group-hover:pause-on-hover px-4">
                {[...TECH_STACK.slice(Math.ceil(TECH_STACK.length/2)), ...TECH_STACK.slice(Math.ceil(TECH_STACK.length/2))].map((tech, index) => (
                  <div 
                    key={`${tech.name}-row2-${index}`} 
                    className="flex items-center gap-4 px-8 py-5 border border-outline-variant/30 bg-surface-container-low shadow-sm text-on-surface/80 rounded-none text-base font-semibold hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    <img 
                      src={`https://img.logo.dev/${tech.domain}?token=${API_TOKEN}`} 
                      alt={`${tech.name} logo`} 
                      className="w-7 h-7 object-contain dark:invert-[0.1] dark:grayscale"
                      loading="lazy"
                    />
                    <span className="tracking-tight">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
