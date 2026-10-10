"use client";

import { useState } from "react";
import RevealText from "@/components/animations/RevealText";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulasi pengiriman form
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Pesan Anda telah berhasil dikirim! Tim kami akan segera menghubungi Anda.");
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-[120px] pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue/10 to-transparent pointer-events-none rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-tosca/10 to-transparent pointer-events-none rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 mt-8">
          <RevealText delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue/30 bg-blue/10 text-blue text-xs uppercase font-bold tracking-[0.2em] mb-6">
              Hubungi Kami
            </div>
          </RevealText>
          <RevealText delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-chalk tracking-tight mb-6">
              Mari Bangun <br />
              <span className="text-mist">Sistem Anda.</span>
            </h1>
          </RevealText>
          <RevealText delay={0.3}>
            <p className="text-lg text-dim font-body leading-relaxed">
              Konsultasikan kebutuhan infrastruktur IT, kustomisasi produk, atau migrasi sistem perusahaan Anda bersama tim arsitek kami.
            </p>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Contact Info (Left) */}
          <div className="lg:col-span-2 space-y-8">
            <RevealText delay={0.4}>
              <GlassCard className="p-8 bg-deep/50 border-edge-2">
                <h3 className="text-sm font-bold tracking-widest text-mist uppercase mb-6">Informasi Kontak</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-xs text-dim font-bold uppercase tracking-widest mb-1">WhatsApp / Telepon</p>
                    <a href="https://wa.me/6289625976080" target="_blank" rel="noopener noreferrer" className="text-lg font-display font-bold text-chalk hover:text-blue transition-colors">
                      +62 896 2597 6080
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-xs text-dim font-bold uppercase tracking-widest mb-1">Email Kemitraan</p>
                    <a href="mailto:aetharix@gmail.com" className="text-lg font-display font-bold text-chalk hover:text-blue transition-colors">
                      aetharix@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-xs text-dim font-bold uppercase tracking-widest mb-1">Kantor Pusat</p>
                    <p className="text-base text-chalk font-body leading-relaxed">
                      Malang<br />
                      Jawa Timur, Indonesia
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-edge-2">
                  <p className="text-sm text-mist font-body mb-4">Butuh respon instan? Hubungi kami langsung via WhatsApp untuk diskusi cepat.</p>
                  <a 
                    href="https://wa.me/6289625976080?text=Halo%20Tim%20Aetharix,%20saya%20ingin%20berkonsultasi%20mengenai%20pembuatan%20sistem." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-bold hover:bg-[#25D366]/20 transition-colors font-body text-sm w-full justify-center"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    Tanya via WhatsApp
                  </a>
                </div>
              </GlassCard>
            </RevealText>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-3">
            <RevealText delay={0.6}>
              <GlassCard className="p-8 md:p-10 bg-deep/40 border-edge-2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-dim uppercase mb-2">Nama Lengkap</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-void/50 border border-edge-2 rounded-xl px-4 py-3 text-chalk placeholder-dim focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all font-body text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-dim uppercase mb-2">Email Perusahaan</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-void/50 border border-edge-2 rounded-xl px-4 py-3 text-chalk placeholder-dim focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all font-body text-sm"
                        placeholder="john@perusahaan.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest text-dim uppercase mb-2">Nama Perusahaan / Startup</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-void/50 border border-edge-2 rounded-xl px-4 py-3 text-chalk placeholder-dim focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all font-body text-sm"
                      placeholder="PT Maju Bersama"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest text-dim uppercase mb-2">Tujuan Pesan</label>
                    <select className="w-full bg-void/50 border border-edge-2 rounded-xl px-4 py-3 text-chalk focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all font-body text-sm appearance-none">
                      <option value="konsultasi">Konsultasi Enterprise Architecture</option>
                      <option value="demo">Permintaan Demo Produk</option>
                      <option value="kemitraan">Kerja Sama / Kemitraan</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest text-dim uppercase mb-2">Pesan Anda</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-void/50 border border-edge-2 rounded-xl px-4 py-3 text-chalk placeholder-dim focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all font-body text-sm resize-none"
                      placeholder="Ceritakan secara singkat mengenai alur kerja perusahaan Anda dan masalah yang ingin diselesaikan..."
                    ></textarea>
                  </div>

                  <MagneticButton className="w-full md:w-auto self-end mt-4 !px-10 !py-4">
                    {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                  </MagneticButton>

                </form>
              </GlassCard>
            </RevealText>
          </div>

        </div>
      </div>
    </main>
  );
}
