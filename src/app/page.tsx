import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import LoadingScreen from "@/components/animations/LoadingScreen";
import RevealText from "@/components/animations/RevealText";
import HeroScene from "@/components/3d/HeroScene";
import Marquee from "@/components/ui/Marquee";
import Products from "@/components/sections/Products";
import Modules from "@/components/sections/Modules";
import ScrollyTelling from "@/components/sections/ScrollyTelling";
import Security from "@/components/sections/Security";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  const integrations = [
    { name: "AWS", color: "hover:shadow-[0_0_20px_-5px_rgba(255,153,0,0.5)]", dot: "bg-[#FF9900]", text: "hover:text-[#FF9900]" },
    { name: "Google Cloud", color: "hover:shadow-[0_0_20px_-5px_rgba(66,133,244,0.5)]", dot: "bg-[#4285F4]", text: "hover:text-[#4285F4]" },
    { name: "OpenAI", color: "hover:shadow-[0_0_20px_-5px_rgba(16,163,127,0.5)]", dot: "bg-[#10a37f]", text: "hover:text-[#10a37f]" },
    { name: "Stripe", color: "hover:shadow-[0_0_20px_-5px_rgba(99,91,255,0.5)]", dot: "bg-[#635BFF]", text: "hover:text-[#635BFF]" },
    { name: "Midtrans", color: "hover:shadow-[0_0_20px_-5px_rgba(0,165,224,0.5)]", dot: "bg-[#00A5E0]", text: "hover:text-[#00A5E0]" },
    { name: "Xendit", color: "hover:shadow-[0_0_20px_-5px_rgba(0,102,255,0.5)]", dot: "bg-[#0066FF]", text: "hover:text-[#0066FF]" },
    { name: "Slack", color: "hover:shadow-[0_0_20px_-5px_rgba(224,30,90,0.5)]", dot: "bg-[#E01E5A]", text: "hover:text-[#E01E5A]" },
    { name: "Discord", color: "hover:shadow-[0_0_20px_-5px_rgba(88,101,242,0.5)]", dot: "bg-[#5865F2]", text: "hover:text-[#5865F2]" },
    { name: "Datadog", color: "hover:shadow-[0_0_20px_-5px_rgba(99,44,166,0.5)]", dot: "bg-[#632CA6]", text: "hover:text-[#632CA6]" },
    { name: "Vercel", color: "hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]", dot: "bg-white", text: "hover:text-white" }
  ];

  return (
    <>
      <LoadingScreen />
      
      {/* HERO SECTION */}
      <div className="relative min-h-[calc(100vh-82px)] flex flex-col items-center justify-center overflow-hidden px-6">
        <HeroScene />
        
        <div className="relative z-10 space-y-8 max-w-5xl mx-auto text-center mt-[-82px]">
          <RevealText delay={2.5}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-tosca/30 bg-tosca/10 text-tosca-h text-xs uppercase font-bold tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-tosca animate-ping"></span>
              WE BUILD WHAT'S NEXT
            </div>
          </RevealText>
          
          <RevealText delay={2.7}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[1.05] uppercase text-chalk">
              YOUR AMBITION <br />
              <span className="bg-[image:var(--grad)] bg-clip-text text-transparent">
                NEEDS A SYSTEM.
              </span>
            </h1>
          </RevealText>
          
          <RevealText delay={2.9}>
            <p className="text-mist text-lg md:text-xl max-w-2xl mx-auto font-body font-light">
              Transformasi digital bukan lagi tentang sekadar aplikasi. Aetharix menghadirkan ekosistem SaaS modular dengan skalabilitas tanpa batas untuk Enterprise dan Startup modern.
            </p>
          </RevealText>
          
          <RevealText delay={3.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="/#harga">
                <MagneticButton variant="primary">
                  Mulai Gratis
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[2.2px] stroke-linecap-round stroke-linejoin-round">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </MagneticButton>
              </Link>
              <Link href="/contact">
                <MagneticButton variant="ghost">
                  Jadwalkan Demo
                </MagneticButton>
              </Link>
            </div>
          </RevealText>
        </div>
      </div>
      
      {/* SECTIONS */}
      <RevealText delay={3.3}>
        <div className="text-center py-4 text-xs font-bold tracking-widest text-dim uppercase mt-10">Terintegrasi Langsung Dengan</div>
        <Marquee items={integrations} />
      </RevealText>

      <Products />

      <Modules />
      
      <ScrollyTelling />

      <Security />

      <Pricing />
    </>
  );
}
