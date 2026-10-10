import GlassCard from "@/components/ui/GlassCard";

export default function Modules() {
  return (
    <section id="fitur" className="py-24 relative z-10 bg-void">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-[1.2]">
              Arsitektur yang Fleksibel. <br/>
              <span className="text-mist">Bukan Monolitik.</span>
            </h2>
          </div>
          <p className="max-w-md text-dim font-body mb-2 text-sm md:text-base">
            Komponen infrastruktur yang dapat digabungkan dan diskalakan sesuai kebutuhan aplikasi dan organisasi Anda.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[260px]">
          
          <GlassCard className="md:col-span-2 p-8 md:p-10 flex flex-col justify-end group overflow-hidden bg-deep/50 hover:bg-deep">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue/20 transition-colors duration-500" />
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 z-10 text-chalk">Neural Data Engine</h3>
            <p className="text-mist text-sm md:text-base max-w-md z-10 font-body">Analisis jutaan baris data secara real-time dengan bantuan machine learning. Temukan anomali sebelum terjadi.</p>
          </GlassCard>
          
          <GlassCard className="p-8 flex flex-col justify-end bg-deep/50 hover:bg-deep group">
            <h3 className="text-xl md:text-2xl font-display font-bold mb-2 text-blue group-hover:text-cyan-300 transition-colors">Automated Workflow</h3>
            <p className="text-xs md:text-sm text-dim font-body">Buat ratusan trigger dan action tanpa satu baris kode pun. Drag, drop, deploy.</p>
          </GlassCard>

          <GlassCard className="p-8 flex flex-col justify-end bg-deep/50 hover:bg-deep group">
            <h3 className="text-xl md:text-2xl font-display font-bold mb-2 text-tosca-h group-hover:text-purple-300 transition-colors">Global Inventory</h3>
            <p className="text-xs md:text-sm text-dim font-body">Sinkronisasi stok 100+ cabang secara global dalam hitungan milidetik.</p>
          </GlassCard>

          <GlassCard className="md:col-span-2 p-8 md:p-10 flex flex-col justify-end relative overflow-hidden group bg-deep/50 hover:bg-deep">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-tosca/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 z-10 text-chalk">Aetharix Auth Shield</h3>
            <p className="text-mist text-sm md:text-base max-w-md z-10 font-body">Keamanan level bank dengan Multi-Factor Auth, Role-Based Access, dan audit log bawaan.</p>
          </GlassCard>

        </div>
      </div>
    </section>
  );
}
