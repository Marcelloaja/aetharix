"use client";

import { useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      window.location.href = "/admin";
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-[80px] flex items-center justify-center relative overflow-hidden bg-void">
      {/* Subtle Grid Background - Not overly sci-fi, just premium tech */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 bg-deep/40 backdrop-blur-xl border border-edge-2 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden relative z-10 m-6">
        
        {/* Left Side: Form */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-2xl font-display font-bold text-chalk mb-2">Welcome back</h1>
            <p className="text-dim font-body text-sm">Log in to your Aetharix workspace.</p>
          </div>

          {/* Social Logins */}
          <div className="flex flex-col gap-3 mb-8">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg border border-edge-2 bg-void/50 hover:bg-white/5 transition-colors text-chalk text-sm font-bold font-body">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg border border-edge-2 bg-void/50 hover:bg-white/5 transition-colors text-chalk text-sm font-bold font-body">
              <svg className="w-4 h-4 text-chalk" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              Continue with GitHub
            </button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-edge-2 flex-1" />
            <span className="text-xs text-dim font-bold uppercase tracking-widest">Or email</span>
            <div className="h-px bg-edge-2 flex-1" />
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <label className="block text-xs font-bold text-mist mb-2">Work Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-void/30 border border-edge-2 rounded-lg px-4 py-2.5 text-chalk placeholder-dim focus:outline-none focus:border-tosca focus:ring-1 focus:ring-tosca transition-all font-body text-sm"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-mist">Password</label>
                <Link href="#" className="text-xs text-blue hover:text-tosca transition-colors font-body">Forgot password?</Link>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-void/30 border border-edge-2 rounded-lg px-4 py-2.5 text-chalk placeholder-dim focus:outline-none focus:border-tosca focus:ring-1 focus:ring-tosca transition-all font-body text-sm"
                placeholder="••••••••"
              />
            </div>

            <MagneticButton className="w-full mt-2 !rounded-lg !py-3 flex items-center justify-center gap-2 font-body text-sm">
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-void" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </MagneticButton>
          </form>
          
          <p className="text-center text-xs text-dim mt-8 font-body">
            Don't have an account? <Link href="/#harga" className="text-mist hover:text-white transition-colors">Contact Sales</Link>
          </p>
        </div>

        {/* Right Side: Elegant Branding */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-void to-deep relative overflow-hidden p-12 border-l border-edge-2">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          
          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue to-tosca-h flex items-center justify-center mb-8 shadow-xl">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </div>
              <h2 className="text-3xl font-display font-bold text-chalk mb-4">Centralized Command.</h2>
              <p className="text-mist font-body leading-relaxed text-sm">
                Aetharix provides a unified platform to manage your entire digital ecosystem. View licenses, configure access controls, and monitor usage in one secure location.
              </p>
            </div>
            
            <div className="bg-void/50 border border-edge-2 rounded-xl p-6 backdrop-blur-sm mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-bold text-chalk uppercase tracking-wider">System Status</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-body text-dim">
                  <span>API Routing</span>
                  <span className="text-chalk">Operational</span>
                </div>
                <div className="flex justify-between items-center text-sm font-body text-dim">
                  <span>Auth Gateway</span>
                  <span className="text-chalk">Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
