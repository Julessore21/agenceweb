import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const navLinks = ["Accueil", "Services", "Réalisations", "Processus", "Tarifs"];

function LogoIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="h-12 w-12">
      <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="8" fill="white" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between"
      initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
    >
      <LogoIcon />

      {/* Pill nav — wrapper round+clip, glass sur l'enfant */}
      <div className="hidden md:block rounded-full" style={{ isolation: "isolate" }}>
        <div className="liquid-glass rounded-full px-1.5 py-1 flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              {link}
            </a>
          ))}
          {/* Bouton CTA dans la nav — glass fort */}
          <a
            href="#"
            className="liquid-glass-strong flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium font-body text-white hover:bg-white/15 transition-colors duration-300"
          >
            Commencer
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Mobile */}
      <a
        href="#"
        className="liquid-glass-strong flex md:hidden items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium font-body text-white"
      >
        Commencer
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </motion.nav>
  );
}
