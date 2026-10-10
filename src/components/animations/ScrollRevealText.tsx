"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  text: string;
}

export default function ScrollRevealText({ text }: Props) {
  const container = useRef<HTMLDivElement>(null);
  
  // Membaca posisi scroll layar untuk memicu efek
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 85%", "end 50%"], 
  });

  const words = text.split(" ");

  return (
    <div ref={container} className="flex flex-wrap gap-x-3 md:gap-x-5 gap-y-1 justify-center max-w-5xl mx-auto py-32 px-6">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        // Memetakan progress scroll menjadi opacity untuk setiap kata secara berurutan
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        
        return (
          <motion.span 
            key={i} 
            style={{ opacity }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-chalk leading-tight"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}
