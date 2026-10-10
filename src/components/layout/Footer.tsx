import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-edge-2 bg-void/70 pt-16 pb-8 mt-20 font-body">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link href="/" className="font-display font-bold text-2xl tracking-tight flex items-center gap-3">
            <Image src="/logo.png" alt="AETHARIX Logo" width={40} height={40} className="w-10 h-10 object-contain" />
            <span className="bg-clip-text text-transparent bg-[image:var(--grad-hot)]">AETHARIX</span>
          </Link>
          <p className="mt-4 text-sm text-dim max-w-xs leading-relaxed">
            Sistem operasi usaha dirancang khusus. Dibangun sekali, menjadi milik Anda selamanya tanpa biaya per pengguna.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-bold tracking-widest text-dim uppercase mb-4">Produk</h4>
          <ul className="space-y-3">
            <li><Link href="/#produk" className="text-sm text-mist hover:text-tosca-h transition-colors">Ekosistem Produk</Link></li>
            <li><Link href="/#kemampuan" className="text-sm text-mist hover:text-tosca-h transition-colors">Kapabilitas Sistem</Link></li>
            <li><Link href="/#harga" className="text-sm text-mist hover:text-tosca-h transition-colors">Paket Harga</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest text-dim uppercase mb-4">Perusahaan</h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-sm text-mist hover:text-tosca-h transition-colors">Tentang Kami</Link></li>
            <li><Link href="/contact" className="text-sm text-mist hover:text-tosca-h transition-colors">Hubungi Sales</Link></li>
            <li><Link href="/privacy" className="text-sm text-mist hover:text-tosca-h transition-colors">Kebijakan Privasi</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-edge-2 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-dim">
        <span>© 2026 Aetharix. All rights reserved.</span>
        <span className="font-bold text-chalk">Premium SaaS Hub</span>
      </div>
    </footer>
  );
}
