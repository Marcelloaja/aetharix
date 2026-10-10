"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    const totalWidth = el.scrollWidth / 2;
    gsap.to(el, {
      x: -totalWidth,
      ease: "none",
      duration: 30,
      repeat: -1,
    });
  }, []);

  return (
    <div className={cn("overflow-hidden bg-void/50 py-5 relative", className)}>
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />
      
      <div ref={containerRef} className="flex gap-4 w-max px-4">
        {[...items, ...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-edge-2 text-mist text-sm font-medium whitespace-nowrap bg-white/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-tosca opacity-75" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
