import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  staggerFrom?: "first" | "last";
  initial?: any;
  animate?: any;
  exit?: any;
  staggerDuration?: number;
  splitLevelClassName?: string;
  transition?: any;
  rotationInterval?: number;
}

export default function RotatingText({
  texts,
  mainClassName = "",
  staggerFrom = "last",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
  staggerDuration = 0.025,
  splitLevelClassName = "",
  transition = { type: "spring", damping: 30, stiffness: 400 },
  rotationInterval = 2000,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const currentText = texts[index];
  const letters = currentText.split("");

  return (
    <span className={mainClassName}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="inline-flex"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {letters.map((letter, i) => {
            const delay =
              staggerFrom === "first"
                ? i * staggerDuration
                : (letters.length - 1 - i) * staggerDuration;

            return (
              <span key={i} className={splitLevelClassName}>
                <motion.span
                  className="inline-block"
                  variants={{
                    initial: initial,
                    animate: animate,
                    exit: exit,
                  }}
                  transition={{
                    ...transition,
                    delay,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
