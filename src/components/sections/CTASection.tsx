import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="px-6 md:px-8 max-w-7xl mx-auto pb-32">
      <div className="bg-[#0a192f] rounded-3xl p-12 md:p-24 relative overflow-hidden shadow-2xl">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[120px] pointer-events-none opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary/20 rounded-full blur-[150px] pointer-events-none opacity-30" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-none">
            Prêt à transformer votre vision en réalité ?
          </h2>
          <p className="text-outline-variant text-lg md:text-xl mb-12 font-light leading-relaxed">
            Discutons de votre projet et définissons ensemble la stratégie qui propulsera votre entreprise vers le succès.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="#contact" 
              className="group relative px-12 py-5 bg-primary text-on-primary font-headline font-bold uppercase tracking-widest text-sm overflow-hidden flex items-center justify-center gap-3 transition-all hover:pr-14 rounded-xl"
            >
              <span className="relative z-10">Démarrer votre projet</span>
              <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div className="absolute inset-0 bg-white/10 transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
