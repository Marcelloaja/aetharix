import Link from "next/link";

export const metadata = {
  title: "Kebijakan Privasi | AETHARIX",
  description: "Kebijakan privasi dan perlindungan data pengguna Aetharix.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-[120px] pb-24 relative overflow-hidden bg-void">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue/10 to-transparent pointer-events-none -z-10 blur-[100px]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 border-b border-edge-2 pb-10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-chalk tracking-tight mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-dim font-body">Pembaruan Terakhir: 9 Oktober 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-mist font-body leading-relaxed text-sm md:text-base">
          
          <section>
            <p className="mb-6">
              Di <strong>Aetharix</strong>, privasi dan keamanan data Anda adalah prioritas mutlak kami. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan platform ekosistem perangkat lunak kami.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-chalk mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue"></span>
              1. Informasi yang Kami Kumpulkan
            </h2>
            <p className="mb-4">Kami dapat mengumpulkan jenis informasi berikut:</p>
            <ul className="list-disc pl-6 space-y-2 text-dim">
              <li><strong>Data Akun:</strong> Nama, email, nomor telepon, dan informasi perusahaan saat Anda mendaftar atau berkonsultasi.</li>
              <li><strong>Data Konfigurasi Server:</strong> Informasi teknis terkait arsitektur sistem yang Anda minta untuk di-deploy (khusus untuk layanan <em>Enterprise</em>).</li>
              <li><strong>Log Aktivitas:</strong> Data analitik penggunaan (alamat IP, jenis perangkat) di platform kami untuk tujuan keamanan dan pemantauan performa server.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-chalk mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tosca-h"></span>
              2. Bagaimana Kami Menggunakan Informasi Anda
            </h2>
            <p className="mb-4">Informasi yang dikumpulkan digunakan semata-mata untuk:</p>
            <ul className="list-disc pl-6 space-y-2 text-dim">
              <li>Membangun, menyesuaikan, dan memelihara infrastruktur perangkat lunak Anda.</li>
              <li>Menagih biaya lisensi dan biaya langganan <em>hosting</em> bulanan.</li>
              <li>Memberikan dukungan teknis (Technical Support) dan pemeliharaan (SLA).</li>
              <li>Mematuhi kewajiban hukum yang berlaku di Indonesia.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-chalk mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
              3. Isolasi & Keamanan Data (Janji Kami)
            </h2>
            <p className="mb-4">
              Berbeda dengan produk SaaS tradisional yang mencampur data ribuan klien dalam satu basis data raksasa (<em>multi-tenant</em>), Aetharix menggunakan pendekatan <strong>Database Terisolasi</strong>. Data perusahaan Anda disimpan dalam kluster terpisah.
            </p>
            <p>
              Jika Anda memilih paket <strong>Enterprise Architecture (On-Premise)</strong>, seluruh lalu lintas data, penyimpanan, dan pemrosesan 100% berada di bawah kendali server Anda sendiri, dan Aetharix tidak memiliki akses langsung tanpa izin tertulis (<em>authorization token</em>) dari Anda.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-chalk mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue"></span>
              4. Larangan Jual Beli Data
            </h2>
            <p>
              Aetharix adalah penyedia infrastruktur, bukan perusahaan periklanan. <strong>Kami tidak akan pernah menjual, menyewakan, atau menukar data Anda kepada pihak ketiga</strong> untuk tujuan pemasaran komersial. Data klien Anda (seperti pelanggan pada Aetharix POS/CRM) adalah sepenuhnya aset dan hak milik perusahaan Anda.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-chalk mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tosca-h"></span>
              5. Hubungi Kami
            </h2>
            <p className="mb-4">
              Jika Anda memiliki pertanyaan mendalam mengenai arsitektur keamanan, sertifikasi ISO/SOC2 kami, atau kebijakan privasi ini, silakan hubungi <em>Data Protection Officer</em> (DPO) kami melalui:
            </p>
            <div className="bg-deep/50 border border-edge-2 rounded-xl p-6 mt-4">
              <p className="text-chalk font-bold">Aetharix Data Security Center</p>
              <p className="text-dim mt-2">Email: <a href="mailto:aetharix@gmail.com" className="text-blue hover:underline">aetharix@gmail.com</a></p>
              <p className="text-dim mt-1">Telepon: <a href="https://wa.me/6289625976080" className="text-blue hover:underline">+62 896 2597 6080</a></p>
            </div>
          </section>
          
        </div>
        
        {/* Footer Link */}
        <div className="mt-16 pt-8 border-t border-edge-2 text-center">
          <Link href="/" className="text-sm font-bold text-mist hover:text-white transition-colors">
            &larr; Kembali ke Beranda
          </Link>
        </div>

      </div>
    </main>
  );
}
