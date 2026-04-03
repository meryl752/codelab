import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="relative px-6 md:px-8 py-32 overflow-hidden">
      
      {/* ─── Architectural Grid Background (Synced with brand language) ─── */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.08] dark:opacity-[0.05] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 76, 237, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 76, 237, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }} 
      />

      {/* ─── Structural Top Line (Coincides with Card border) ─── */}
      <div className="absolute top-32 left-0 w-full h-[1px] bg-primary/20 z-0" />

      <div className="max-w-7xl mx-auto relative z-10 pt-1">
        <div className="bg-[#0a192f] rounded-none md:rounded-tl-none md:rounded-tr-[4rem] md:rounded-bl-[4rem] md:rounded-br-none p-12 md:px-24 md:py-28 relative overflow-hidden shadow-2xl border-t-2 border-primary">
          {/* Ambient glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-40 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary/20 rounded-full blur-[150px] pointer-events-none opacity-20 -translate-x-1/2 translate-y-1/2" />

          {/* Content */}
          <div className="relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[0.95]">
                Prêt à transformer votre <br />
                <span className="text-primary italic">vision en réalité ?</span>
              </h2>
              <p className="text-white/70 text-xl md:text-2xl font-light leading-relaxed max-w-xl">
                Discutons de votre projet et définissons ensemble la stratégie qui propulsera votre entreprise vers le succès numérique.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link 
                href="#contact" 
                className="group relative px-12 py-6 bg-primary text-on-primary font-headline font-bold uppercase tracking-[0.2em] text-xs overflow-hidden flex items-center justify-center gap-4 transition-all hover:pr-16 rounded-full"
              >
                <span className="relative z-10">Démarrer votre projet</span>
                <div className="absolute right-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <div className="absolute inset-0 bg-white/10 transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
