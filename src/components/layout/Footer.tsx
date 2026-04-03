import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

// --- Custom Brand Icons (Not included in lucide-react 1.7.0) ---
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.94C18.88 4 12 4 12 4s-6.88 0-8.6.48a2.78 2.78 0 0 0-1.94 1.94C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 1.94c1.72.48 8.6.48 8.6.48s6.88 0 8.6-.48a2.78 2.78 0 0 0 1.94-1.94C23 15.86 23 12 23 12s0-3.86-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-lowest text-on-surface border-t border-outline-variant/10 pt-24 pb-12 w-full overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand & Description */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/images/logo.png" alt="CodeLab Logo" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-bold tracking-tighter font-headline text-on-surface">CodeLab</span>
            </Link>
            <p className="text-secondary dark:text-secondary/60 text-base leading-relaxed font-light">
              Votre partenaire technologique pour transformer vos idées en solutions innovantes. Expertise, formation et accompagnement personnalisé.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 hover:bg-primary hover:border-primary transition-all duration-300 text-secondary">
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 hover:bg-primary hover:border-primary transition-all duration-300 text-secondary">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://wa.me/2290147030588" className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 hover:bg-primary hover:border-primary transition-all duration-300 text-secondary">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 hover:bg-primary hover:border-primary transition-all duration-300 text-secondary">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-headline text-lg font-bold mb-8 relative inline-block text-on-surface">
              Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary" />
            </h4>
            <ul className="space-y-4">
              {['Formation & Montée en Compétences', 'Développement Web', 'Applications Mobiles', 'Ingénierie Logicielle'].map((svc) => (
                <li key={svc}>
                  <Link href="#services" className="text-secondary dark:text-secondary/60 hover:text-primary transition-colors font-light text-sm">{svc}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline text-lg font-bold mb-8 relative inline-block text-on-surface">
              CodeLab
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary" />
            </h4>
            <ul className="space-y-4">
              {['Accueil', 'Réalisations', 'À propos', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-secondary dark:text-secondary/60 hover:text-primary transition-colors font-light text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-headline text-lg font-bold mb-8 relative inline-block text-on-surface">
              Contact
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary" />
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <Mail className="w-4 h-4 text-primary mt-1" />
                <a href="mailto:hello@codelab.bj" className="text-secondary dark:text-secondary/60 group-hover:text-primary transition-colors font-light text-sm">hello@codelab.bj</a>
              </li>
              <li className="flex items-start gap-4 group">
                <Phone className="w-4 h-4 text-primary mt-1" />
                <a href="tel:+2290147030588" className="text-secondary dark:text-secondary/60 group-hover:text-primary transition-colors font-light text-sm">+229 01 47 03 05 88</a>
              </li>
              <li className="flex items-start gap-4 group">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-secondary dark:text-secondary/60 transition-colors font-light text-sm leading-relaxed">
                  Immeuble en face de l'école Bakhita, Abomey-Calavi
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-label text-[10px] uppercase tracking-widest text-secondary/30 font-bold">
            © {new Date().getFullYear()} CodeLab Studio
          </p>
          <div className="flex gap-8">
          </div>
        </div>
      </div>
    </footer>
  );
}
