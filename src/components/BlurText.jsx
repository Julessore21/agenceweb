import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function BlurText({
  text = "",
  className = "",
  delay = 200,
  direction = "bottom",
  splitBy = "words",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const elements = splitBy === "words" ? text.split(" ") : text.split("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getInitial = () => {
    if (direction === "bottom") return { filter: "blur(14px)", opacity: 0, y: 40 };
    if (direction === "top") return { filter: "blur(14px)", opacity: 0, y: -40 };
    return { filter: "blur(14px)", opacity: 0, x: -30 };
  };

  const getFinal = () => {
    return { filter: "blur(0px)", opacity: 1, y: 0, x: 0 };
  };

  return (
    <span ref={ref} className={className} style={{ display: "inline" }}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={getInitial()}
          animate={isVisible ? getFinal() : getInitial()}
          transition={{
            delay: (i * delay) / 1000,
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {el}
          {splitBy === "words" && i < elements.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
