import RevealText from "@/components/animations/RevealText";
import SecurityCore from "@/components/3d/SecurityCore";

export default function Security() {
  return (
    <section id="keamanan" className="py-32 relative z-10 bg-void overflow-hidden">
      <SecurityCore />
      <div className="max-w-5xl mx-auto px-6 text-center">
        <RevealText>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue/30 bg-blue/10 text-blue text-xs uppercase font-bold tracking-[0.2em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse"></span>
            ENTERPRISE SECURITY
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-16">
            Keamanan Data Adalah Prioritas Utama.
          </h2>
        </RevealText>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          
          <div className="flex flex-col items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-4 text-blue">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span className="font-bold text-sm tracking-wider text-chalk">SOC 2 TYPE II</span>
          </div>
          
          <div className="flex flex-col items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-4 text-tosca-h">
              <circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/>
            </svg>
            <span className="font-bold text-sm tracking-wider text-chalk">ISO 27001</span>
          </div>
          
          <div className="flex flex-col items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-4 text-pink-400">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span className="font-bold text-sm tracking-wider text-chalk">GDPR COMPLIANT</span>
          </div>
          
          <div className="flex flex-col items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-4 text-green-400">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
            <span className="font-bold text-sm tracking-wider text-chalk">99.99% SLA</span>
          </div>

        </div>
      </div>
    </section>
  );
}
