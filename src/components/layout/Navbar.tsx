"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent h-[82px] flex items-center",
        scrolled && "bg-void/90 backdrop-blur-md border-edge-2"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-display font-bold text-2xl tracking-tight flex items-center gap-3">
            <Image src="/logo.png" alt="AETHARIX Logo" width={32} height={32} className="w-8 h-8 object-contain" />
            AETHARIX
          </Link>
          <span className="hidden lg:flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-dim border-l border-edge pl-3">
            WE BUILD WHAT'S NEXT.
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {["Produk", "Fitur", "Kemampuan", "Keamanan", "Harga"].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium text-mist rounded-full transition-colors hover:text-chalk hover:bg-white/5"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block text-sm font-semibold text-mist transition-colors hover:text-tosca-h">
            Masuk
          </Link>
          <Link href="/#harga" className="px-5 py-2.5 rounded-full text-sm font-bold bg-white/10 text-chalk hover:bg-white/20 transition-colors font-body">
            Start Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
}
