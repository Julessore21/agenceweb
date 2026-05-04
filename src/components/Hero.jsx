import { motion } from "motion/react";
import { ArrowUpRight, Play, Clock, Star, Zap } from "lucide-react";
import BlurText from "./BlurText";
import fondVideo from "../assets/fond.mp4";

const partners = ["Stripe", "Vercel", "Linear", "Notion", "Figma"];

const floatingStats = [
  { icon: Clock, value: "5 jours", label: "livraison" },
  { icon: Star, value: "98%", label: "satisfaction" },
  { icon: Zap, value: "200+", label: "sites lancés" },
];

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ height: "1000px" }}>
      {/* Vidéo de fond — commence tout en haut, couvre toute la section */}
      <video
        src={fondVideo}
        poster="/images/hero_bg.jpeg"
        autoPlay loop muted playsInline
        className="absolute left-0 w-full h-full object-cover z-0"
        style={{ top: 0 }}
      />

      {/* Assombrissement général */}
      <div className="absolute inset-0 bg-black/45 z-[1] pointer-events-none" />

      {/* Fondu haut — léger, laisse voir la vidéo */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-[2]"
        style={{ height: "220px", background: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, transparent 100%)" }} />

      {/* Fondu bas — raccord avec le reste de la page */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-[2]"
        style={{ height: "280px", background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)" }} />

      <div className="relative z-[3] flex flex-col items-center text-center px-6" style={{ paddingTop: "150px" }}>

        {/* Badge intro */}
        <motion.div
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease, delay: 0.3 }}
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
            Nouveau
          </span>
          <span className="pr-2 text-sm text-white/80 font-body">
            Découvrez le design web propulsé par l'IA.
          </span>
        </motion.div>

        {/* Titre — BlurText delay 160ms entre chaque mot */}
        <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl tracking-[-4px] mb-6">
          <BlurText text="Le Site Web Que Votre Marque Mérite" delay={160} direction="bottom" splitBy="words" />
        </h1>

        {/* Sous-titre */}
        <motion.p
          className="text-sm md:text-base text-white font-body font-light leading-tight max-w-md mb-8"
          initial={{ filter: "blur(14px)", opacity: 0, y: 28 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1.4, ease }}
        >
          Design époustouflant. Performances fulgurantes. Créé par l'IA, affiné par des experts.
          Le design web, radicalement réinventé.
        </motion.p>

        {/* Boutons CTA */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ filter: "blur(14px)", opacity: 0, y: 28 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 1.4, ease }}
        >
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-white text-sm font-body font-medium">
            Commencer
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 text-white text-sm font-body font-light hover:text-white/80 transition-colors duration-700">
            <Play className="w-4 h-4 fill-white" />
            Voir le film
          </button>
        </motion.div>

        {/* Stats flottantes */}
        <motion.div
          className="flex items-center gap-3 mb-14"
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 2.4, duration: 1.4, ease }}
        >
          {floatingStats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="liquid-glass-panel rounded-2xl px-4 py-2.5 flex items-center gap-2.5">
              <div className="liquid-glass rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">
                <Icon className="w-3.5 h-3.5 text-white/70" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-white font-body font-semibold text-sm">{value}</span>
                <span className="text-white/50 font-body font-light text-xs mt-0.5">{label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Partenaires */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1.6, ease }}
        >
          <div className="flex flex-col items-center gap-5">
            <div className="liquid-glass rounded-full px-4 py-1.5">
              <span className="text-xs text-white/60 font-body">Choisi par les équipes derrière</span>
            </div>
            <div className="flex items-center gap-12 md:gap-16 flex-wrap justify-center">
              {partners.map((p) => (
                <span key={p} className="text-2xl md:text-3xl font-heading italic text-white/70 hover:text-white transition-colors duration-700">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
