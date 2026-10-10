"use client";

import { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
}

export default function MagneticButton({
  children,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary:
      "bg-[image:var(--grad-hot)] text-void font-bold shadow-[0_10px_34px_-14px_rgba(67,196,188,0.85)] hover:shadow-[0_18px_44px_-14px_rgba(67,196,188,0.95)] hover:-translate-y-0.5",
    ghost:
      "border border-edge-2 text-chalk bg-white/5 hover:border-tosca hover:text-tosca-h hover:-translate-y-0.5",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base transition-colors transition-transform overflow-hidden group font-body",
        variants[variant],
        className
      )}
      {...props}
    >
      {/* Glossy overlay effect for primary button */}
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[130%] group-hover:animate-kilat pointer-events-none" />
      )}
      {children}
    </motion.button>
  );
}
