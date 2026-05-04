import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import HlsVideo from "./HlsVideo";
import BlurText from "./BlurText";

const VIDEO_SRC = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

export default function CtaFooter() {
  return (
    <section className="relative w-full" style={{ minHeight: "800px" }}>
      <HlsVideo src={VIDEO_SRC} className="absolute inset-0 w-full h-full object-cover z-0" />

      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: "200px", background: "linear-gradient(to bottom, black, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: "200px", background: "linear-gradient(to top, black, transparent)" }} />

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-40">

        {/* Badge glass */}
        <motion.div
          className="liquid-glass rounded-full px-3.5 py-1 mb-8"
          initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-medium text-white font-body">Commencez maintenant</span>
        </motion.div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] mb-6 max-w-2xl">
          <BlurText text="Votre prochain site commence ici." delay={150} direction="bottom" />
        </h2>

        <motion.p
          className="text-white/60 font-body font-light text-sm md:text-base max-w-md mb-10"
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Réservez un appel stratégique gratuit. Découvrez ce que le design IA peut faire. Sans engagement, sans pression.
        </motion.p>

        {/* Boutons */}
        <motion.div
          className="flex items-center gap-4 flex-wrap justify-center mb-8"
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-white text-sm font-body font-medium">
            Réserver un appel
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium hover:bg-white/90 transition-colors">
            Voir les tarifs
          </button>
        </motion.div>

        {/* Encart email glass */}
        <motion.div
          className="liquid-glass-panel rounded-2xl px-6 py-4 flex items-center gap-4 w-full max-w-sm"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        >
          <div className="liquid-glass rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0">
            <Mail className="w-4 h-4 text-white/60" />
          </div>
          <input
            type="email"
            placeholder="votre@email.com"
            className="flex-1 bg-transparent text-white text-sm font-body font-light placeholder:text-white/30 outline-none"
          />
          <button className="liquid-glass-strong rounded-full px-3 py-1.5 text-xs font-body font-medium text-white whitespace-nowrap">
            Envoyer
          </button>
        </motion.div>

        {/* Footer bar */}
        <motion.div
          className="mt-32 pt-8 w-full max-w-6xl flex items-center justify-between flex-wrap gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <span className="text-white/30 text-xs font-body">
            © 2026 Studio. Tous droits réservés.
          </span>
          <div className="flex items-center gap-6">
            {["Confidentialité", "Conditions", "Contact"].map((link) => (
              <a key={link} href="#"
                className="text-white/30 text-xs font-body hover:text-white/60 transition-colors duration-300">
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
