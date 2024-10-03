"use client";

import { motion } from "framer-motion";

export const HeroText = () => {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    >
      Scheduling made <span className="block text-primary">super easy!</span>
    </motion.h1>
  );
};
