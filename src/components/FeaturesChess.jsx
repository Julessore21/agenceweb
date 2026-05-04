import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import BlurText from "./BlurText";
import feature1 from "../assets/feature-1.gif";
import feature2 from "../assets/feature-2.gif";

function GlassTag({ children }) {
  return (
    <span className="liquid-glass rounded-full px-3 py-1 text-xs font-body font-medium text-white/80">
      {children}
    </span>
  );
}

function ChessRow({ title, body, buttonText, gif, tags = [], reverse = false }) {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-20 py-16`}>

      <motion.div
        className="flex-1 flex flex-col items-start gap-6"
        initial={{ opacity: 0, x: reverse ? 30 : -30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Tags glass */}
        {tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            {tags.map(t => <GlassTag key={t}>{t}</GlassTag>)}
          </div>
        )}

        <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
          <BlurText text={title} delay={150} direction="bottom" />
        </h3>
        <p className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed">
          {body}
        </p>
        <button className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-white text-sm font-body font-medium">
          {buttonText}
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Image avec overlay glass flottant */}
      <motion.div
        className="flex-1 w-full"
        initial={{ opacity: 0, x: reverse ? -30 : 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
      >
        {/* Wrapper : overflow-hidden sur le conteneur, glass sur l'image */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Couche glass sous l'image */}
          <div className="liquid-glass-panel absolute inset-0 rounded-2xl z-0" />
          <img src={gif} alt={title} className="relative z-10 w-full h-auto object-cover" />
          {/* Badge flottant en haut à droite */}
          <div className="absolute top-3 right-3 z-20">
            <div className="liquid-glass rounded-full px-3 py-1.5">
              <span className="text-xs font-body font-medium text-white/90">IA · Temps réel</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function FeaturesChess() {
  return (
    <section className="px-8 lg:px-16 py-24">
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <motion.div
          className="liquid-glass rounded-full px-3.5 py-1"
          initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-medium text-white font-body">Fonctionnalités</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          <BlurText text="Des fonctions pro. Sans la complexité." delay={150} direction="bottom" />
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <ChessRow
          title="Conçu pour convertir. Bâti pour performer."
          body="Chaque pixel est intentionnel. Notre IA analyse ce qui fonctionne sur des milliers de sites leaders — puis construit le vôtre pour les surpasser."
          buttonText="En savoir plus"
          gif={feature1}
          tags={["Design IA", "Conversion optimisée"]}
          reverse={false}
        />
        <ChessRow
          title="Il s'améliore. Automatiquement."
          body="Votre site évolue tout seul. L'IA surveille chaque clic, chaque scroll, chaque conversion — puis optimise en temps réel. Aucune mise à jour manuelle. Jamais."
          buttonText="Voir comment ça marche"
          gif={feature2}
          tags={["Auto-optimisation", "Zéro maintenance"]}
          reverse={true}
        />
      </div>
    </section>
  );
}
