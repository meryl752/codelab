"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Aminatou Sanni",
    role: "CEO, FinTech Bénin",
    content: "Grâce à CodeLab, nous avons pu lancer notre application de paiement mobile en un temps record. Leur expertise locale et leur compréhension du marché africain sont inestimables.",
    image: "/images/testimonials/aminatou.png"
  },
  {
    name: "Jean-Marc Adjovi",
    role: "Développeur Full-Stack, Cotonou",
    content: "Les formations de CodeLab m'ont permis de décrocher mes premiers contrats à l'international. J'ai triplé mes revenus en moins d'un an.",
    image: "/images/testimonials/jean-marc.png"
  },
  {
    name: "Chinonso Okafor",
    role: "Product Manager, Lagos",
    content: "Un partenaire de confiance. CodeLab comprend les réalités africaines et propose des solutions adaptées aux besoins de notre marché numérique.",
    image: "/images/testimonials/chinonso.png"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-6 md:px-8 bg-surface transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-label text-sm tracking-[0.2em] uppercase text-primary font-bold mb-6 block">
            05 / TÉMOIGNAGES
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-on-surface">
            Ce que disent nos clients
          </h2>
          <p className="text-secondary dark:text-secondary/60 text-lg md:text-xl font-light leading-relaxed opacity-80">
            La satisfaction de nos clients et étudiants est notre plus grande fierté. 
            Découvrez leurs témoignages et success stories.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-surface-container-low border border-outline-variant/30 p-10 flex flex-col justify-between relative group hover:border-primary/40 transition-all rounded-none shadow-sm hover:shadow-xl dark:bg-surface-container-high/40"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-10 text-primary opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                  <path d="M0 15V0H15V15H7.5C7.5 22.5 12.5 27.5 15 30H7.5C2.5 25 0 20 0 15ZM25 15V0H40V15H32.5C32.5 22.5 37.5 27.5 40 30H32.5C27.5 25 25 20 25 15Z" />
                </svg>
              </div>

              <div className="relative z-10">
                <p className="font-body text-lg leading-relaxed text-secondary italic mb-12">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/20">
                <div className="relative w-14 h-14 overflow-hidden rounded-none border-2 border-primary/20">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-base tracking-tight">
                    {t.name}
                  </h4>
                  <p className="text-primary text-xs font-label uppercase tracking-wider font-semibold">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
