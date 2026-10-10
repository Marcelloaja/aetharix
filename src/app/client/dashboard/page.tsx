import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ClientDashboard() {
  const session = await auth();
  
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-void text-chalk flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#0284C7_0%,transparent_60%)] opacity-20" />
      
      <div className="relative z-10 w-full max-w-3xl bg-deep/50 border border-edge-2 rounded-3xl p-12 backdrop-blur-xl shadow-2xl text-center">
        <div className="w-20 h-20 bg-blue/10 border border-blue/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-display font-bold mb-2">Aetharix Client Portal</h1>
        <p className="text-mist mb-8">Selamat datang kembali, {session.user?.name}. Lingkungan Anda terenkripsi 100%.</p>
        
        <div className="grid grid-cols-2 gap-4 text-left mb-10">
          <div className="bg-void border border-edge-2 rounded-xl p-4">
            <p className="text-xs text-dim uppercase tracking-wider mb-1">Company Email</p>
            <p className="font-mono text-sm">{session.user?.email}</p>
          </div>
          <div className="bg-void border border-edge-2 rounded-xl p-4">
            <p className="text-xs text-dim uppercase tracking-wider mb-1">Status Lisensi</p>
            <p className="font-mono text-sm text-green-400">ACTIVE - ALL MODULES</p>
          </div>
        </div>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button type="submit" className="px-6 py-3 rounded-lg border border-edge-2 bg-void hover:bg-white/5 font-bold transition-colors">
            Log Out
          </button>
        </form>
      </div>
    </div>
  );
}
