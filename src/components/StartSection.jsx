import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import HlsVideo from "./HlsVideo";
import BlurText from "./BlurText";

const VIDEO_SRC = "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8";
const ease = [0.16, 1, 0.3, 1];

const steps = [
  { num: "01", label: "Partagez votre vision" },
  { num: "02", label: "L'IA conçoit & code" },
  { num: "03", label: "Vous recevez le site" },
];

export default function StartSection() {
  return (
    <section className="relative w-full" style={{ minHeight: "780px" }}>
      <HlsVideo src={VIDEO_SRC} className="absolute inset-0 w-full h-full object-cover z-0" />

      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: "200px", background: "linear-gradient(to bottom, black, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: "200px", background: "linear-gradient(to top, black, transparent)" }} />

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-32" style={{ minHeight: "500px" }}>

        <motion.div
          className="liquid-glass rounded-full px-3.5 py-1 mb-6"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease }}
        >
          <span className="text-xs font-medium text-white font-body">Comment ça marche</span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-5 max-w-xl">
          <BlurText text="Vous rêvez. Nous livrons." delay={170} direction="bottom" />
        </h2>

        <motion.p
          className="text-white/60 font-body font-light text-sm md:text-base max-w-md mb-12"
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease, delay: 0.4 }}
        >
          Partagez votre vision. Notre IA s'occupe du reste — maquettes, design, code, mise en ligne. En jours, pas en trimestres.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mb-10">
          {steps.map(({ num, label }, i) => (
            <motion.div
              key={num}
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.4, ease, delay: 0.5 + i * 0.18 }}
            >
              <div className="liquid-glass-panel rounded-2xl px-4 py-3 flex items-center gap-3">
                <span className="liquid-glass-strong rounded-full w-7 h-7 flex items-center justify-center text-xs font-body font-semibold text-white flex-shrink-0">
                  {num}
                </span>
                <span className="text-white/80 font-body font-light text-sm whitespace-nowrap">{label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden sm:block w-6 h-px bg-white/20" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.button
          className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-white text-sm font-body font-medium"
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease, delay: 1.0 }}
        >
          Commencer
          <ArrowUpRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
