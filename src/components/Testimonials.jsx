import { motion } from "motion/react";
import BlurText from "./BlurText";

const testimonials = [
  {
    quote: "Une refonte complète en cinq jours. Le résultat a surpassé tout ce que nous avions mis des mois à construire.",
    name: "Sarah Chen",
    role: "PDG, Luminary",
    metric: "+320% trafic",
  },
  {
    quote: "Conversions multipliées par 4. Ce n'est pas une faute de frappe. Le design fonctionne autrement quand il est bâti sur de vraies données.",
    name: "Marcus Webb",
    role: "Directeur Croissance, Arcline",
    metric: "×4 conversions",
  },
  {
    quote: "Ils n'ont pas seulement conçu notre site. Ils ont défini notre marque. Le terme « excellence » ne suffit pas.",
    name: "Elena Voss",
    role: "Directrice de Marque, Helix",
    metric: "98 / 100 Lighthouse",
  },
];

export default function Testimonials() {
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
          <span className="text-xs font-medium text-white font-body">Ce qu'ils disent</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          <BlurText text="Ne nous croyez pas sur parole." delay={150} direction="bottom" />
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(({ quote, name, role, metric }, i) => (
          <motion.div
            key={name}
            className="liquid-glass rounded-2xl p-8 flex flex-col gap-5"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: i * 0.22 }}
          >
            {/* Métrique clé en glass pill */}
            <div className="self-start">
              <div className="liquid-glass-strong rounded-full px-3 py-1">
                <span className="text-xs font-body font-semibold text-white">{metric}</span>
              </div>
            </div>

            <p className="text-white/80 font-body font-light text-sm italic leading-relaxed flex-1">
              « {quote} »
            </p>

            {/* Ligne de séparation */}
            <div className="h-px bg-white/10" />

            <div className="flex flex-col gap-0.5">
              <span className="text-white font-body font-medium text-sm">{name}</span>
              <span className="text-white/50 font-body font-light text-xs">{role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
