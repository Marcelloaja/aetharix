import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const session = await auth();
  
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-void text-chalk flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#4F46E5_0%,transparent_60%)] opacity-20" />
      
      <div className="relative z-10 w-full max-w-3xl bg-deep/50 border border-edge-2 rounded-3xl p-12 backdrop-blur-xl shadow-2xl text-center">
        <div className="w-20 h-20 bg-tosca/10 border border-tosca/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-tosca" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-display font-bold mb-2">Secure Admin Terminal</h1>
        <p className="text-mist mb-8">Welcome back, {session.user?.name}. You have Level-5 Clearance.</p>
        
        <div className="grid grid-cols-2 gap-4 text-left mb-10">
          <div className="bg-void border border-edge-2 rounded-xl p-4">
            <p className="text-xs text-dim uppercase tracking-wider mb-1">Email</p>
            <p className="font-mono text-sm">{session.user?.email}</p>
          </div>
          <div className="bg-void border border-edge-2 rounded-xl p-4">
            <p className="text-xs text-dim uppercase tracking-wider mb-1">Role / Access</p>
            <p className="font-mono text-sm text-tosca-h">{session.user?.role}</p>
          </div>
        </div>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button type="submit" className="px-6 py-3 rounded-lg border border-red-500/30 text-red-400 bg-red-500/10 hover:bg-red-500/20 font-bold transition-colors">
            Terminate Session (Logout)
          </button>
        </form>
      </div>
    </div>
  );
}
