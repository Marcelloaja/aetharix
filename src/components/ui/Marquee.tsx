"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface IntegrationItem {
  name: string;
  color: string;
  dot: string;
  text: string;
}

interface MarqueeProps {
  items: IntegrationItem[];
  className?: string;
}

export default function Marquee({ items, className }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    const totalWidth = el.scrollWidth / 2;
    tweenRef.current = gsap.to(el, {
      x: -totalWidth,
      ease: "none",
      duration: 35,
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <div 
      className={cn("overflow-hidden bg-void/50 py-8 relative", className)}
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.play()}
    >
      <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-void via-void/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-void via-void/80 to-transparent z-10 pointer-events-none" />
      
      <div ref={containerRef} className="flex gap-4 w-max px-4">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div 
            key={i} 
            className={cn(
              "group interactive cursor-pointer inline-flex items-center gap-3 px-6 py-3 rounded-full border border-edge-2 bg-white/5 transition-all duration-300",
              item.color,
              "hover:-translate-y-1 hover:bg-white/10"
            )}
          >
            <span className={cn("w-2 h-2 rounded-full opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125 group-hover:shadow-[0_0_10px_currentColor]", item.dot)} />
            <span className={cn("text-mist text-sm font-bold tracking-wide transition-colors duration-300", item.text)}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
