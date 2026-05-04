import { motion } from "motion/react";
import HlsVideo from "./HlsVideo";
import BlurText from "./BlurText";

const VIDEO_SRC = "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";

const stats = [
  { value: "200+", label: "Sites livrés", sub: "depuis 2022" },
  { value: "98%", label: "Clients satisfaits", sub: "score moyen" },
  { value: "3,2x", label: "Plus de conversions", sub: "vs. référence" },
  { value: "5 jours", label: "Livraison moyenne", sub: "du brief au live" },
];

export default function Stats() {
  return (
    <section className="relative w-full" style={{ minHeight: "600px" }}>
      <HlsVideo
        src={VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover z-0"
        desaturate
      />

      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: "200px", background: "linear-gradient(to bottom, black, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: "200px", background: "linear-gradient(to top, black, transparent)" }} />

      <div className="relative z-20 flex items-center justify-center px-8 lg:px-16 py-32">
        <motion.div
          className="liquid-glass-panel rounded-3xl p-12 md:p-16 w-full max-w-5xl"
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* En-tête de la carte */}
          <div className="flex items-center justify-between mb-10 pb-8 border-b border-white/10">
            <span className="font-heading italic text-white/40 text-sm">Studio · Performances</span>
            <div className="liquid-glass rounded-full px-3 py-1">
              <span className="text-xs font-body text-white/60">Mis à jour en temps réel</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map(({ value, label, sub }, i) => (
              <motion.div
                key={label}
                className="flex flex-col items-center text-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.16 }}
              >
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
                  <BlurText text={value} delay={100} direction="bottom" />
                </span>
                <span className="text-white/70 font-body font-light text-sm">{label}</span>
                {/* Sous-label glass pill */}
                <span className="liquid-glass rounded-full px-2.5 py-0.5 text-xs font-body text-white/40">
                  {sub}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
