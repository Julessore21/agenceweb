import { Zap, Palette, BarChart3, Shield } from "lucide-react";
import { motion } from "motion/react";
import BlurText from "./BlurText";

const features = [
  {
    icon: Zap,
    title: "En jours, pas en mois",
    body: "Du concept au lancement à une vitesse qui redéfinit la rapidité. Parce qu'attendre n'est pas une stratégie.",
    tag: "Rapide",
  },
  {
    icon: Palette,
    title: "Conçu avec obsession",
    body: "Chaque détail pensé. Chaque élément affiné. Un design si précis qu'il semble inévitable.",
    tag: "Premium",
  },
  {
    icon: BarChart3,
    title: "Bâti pour convertir",
    body: "Des mises en page guidées par la donnée. Des décisions soutenues par la performance.",
    tag: "Data-driven",
  },
  {
    icon: Shield,
    title: "Sécurisé par défaut",
    body: "Protection de niveau entreprise incluse. SSL, anti-DDoS, conformité. Tout compris.",
    tag: "Protégé",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="px-8 lg:px-16 py-24">
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <motion.div
          className="liquid-glass rounded-full px-3.5 py-1"
          initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-medium text-white font-body">Pourquoi nous</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          <BlurText text="La différence, c'est tout." delay={150} direction="bottom" />
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, body, tag }, i) => (
          <motion.div
            key={title}
            className="liquid-glass rounded-2xl p-6 flex flex-col gap-4"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: i * 0.18 }}
          >
            {/* Header : icône + tag glass */}
            <div className="flex items-center justify-between">
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <span className="liquid-glass rounded-full px-2.5 py-0.5 text-xs font-body text-white/60">
                {tag}
              </span>
            </div>

            <h3 className="text-white font-body font-medium text-base">{title}</h3>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed flex-1">{body}</p>

            {/* Ligne de séparation glass */}
            <div className="h-px bg-white/10 rounded-full" />
            <span className="text-white/30 font-body text-xs">Studio · AI-Powered</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
