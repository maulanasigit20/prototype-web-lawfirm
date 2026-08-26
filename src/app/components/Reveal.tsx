import { motion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string; // Tambahkan ini
};

export default function Reveal({
  children,
  delay = 0,
  className = "", // Set default kosong
}: RevealProps) {
  return (
    <motion.div
      className={className} // Teruskan className ke motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}