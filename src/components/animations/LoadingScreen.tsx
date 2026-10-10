"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import anime from "animejs";

export default function LoadingScreen() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const tl = anime.timeline({
      easing: "easeInOutQuart",
      complete: () => {
        setIsLoaded(true);
      },
    });

    // 1. Logo muncul dengan putaran ringan dan efek membesar
    tl.add({
      targets: ".loading-logo",
      opacity: [0, 1],
      scale: [0.5, 1],
      rotate: [-15, 0],
      duration: 1000,
    })
    // 2. Efek detak jantung / glow sejenak
    .add({
      targets: ".loading-logo",
      scale: [1, 1.05],
      duration: 600,
      direction: "alternate",
    })
    // 3. Logo melesat maju (Zoom-in besar) menembus layar lalu menghilang
    .add({
      targets: ".loading-logo",
      scale: 5,
      opacity: 0,
      filter: ["blur(0px)", "blur(10px)"],
      duration: 800,
      easing: "easeInExpo",
    }, "+=200")
    // 4. Layar gelap utama ikut pudar perlahan
    .add({
      targets: ".loading-overlay",
      opacity: 0,
      duration: 600,
    }, "-=600");
  }, []);

  if (isLoaded) return null;

  return (
    <div className="loading-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void">
      <div className="relative flex flex-col items-center justify-center">
        {/* Menggunakan file logo.png yang baru saja Anda tambahkan */}
        <Image 
          src="/logo.png" 
          alt="Aetharix Loading" 
          width={120} 
          height={120} 
          className="loading-logo opacity-0 object-contain drop-shadow-[0_0_40px_rgba(129,140,248,0.5)]" 
        />
        <div className="loading-logo opacity-0 mt-8 font-display text-xl md:text-2xl font-bold tracking-[0.4em] text-chalk text-center">
          AETHARIX
        </div>
      </div>
    </div>
  );
}
