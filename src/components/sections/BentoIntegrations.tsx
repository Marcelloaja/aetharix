"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function BentoIntegrations() {
  const integrations = [
    { name: "AWS", category: "Infrastructure", color: "from-orange-500/20 to-orange-900/0", accent: "bg-orange-500" },
    { name: "OpenAI", category: "AI Models", color: "from-emerald-500/20 to-emerald-900/0", accent: "bg-emerald-500" },
    { name: "Stripe", category: "Payments", color: "from-indigo-500/20 to-indigo-900/0", accent: "bg-indigo-500" },
    { name: "Datadog", category: "Monitoring", color: "from-purple-500/20 to-purple-900/0", accent: "bg-purple-500" },
  ];

  const secondary = ["Midtrans", "Xendit", "Slack", "Discord", "Vercel", "Google Cloud"];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-chalk mb-4">
          Ekosistem Tanpa Batas.
        </h2>
        <p className="text-mist font-body max-w-2xl mx-auto">
          Arsitektur API-first kami memungkinkan Aetharix menyatu secara native dengan alat yang sudah Anda gunakan. Tidak ada vendor lock-in.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
        
        {/* Core Hub (Spans 2 columns) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 row-span-1 rounded-3xl bg-deep/40 border border-edge-2 overflow-hidden relative group p-8 flex flex-col justify-between"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(67,196,188,0.15),transparent_50%)]" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-tosca/10 border border-tosca/30 flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-tosca">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-chalk mb-2">Native Webhooks & REST API</h3>
            <p className="text-mist text-sm font-body max-w-md">Kendalikan sepenuhnya aliran data antar sistem dengan API berkecepatan tinggi kami yang berstandar perbankan.</p>
          </div>
        </motion.div>

        {/* Highlighted Integration 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-deep/40 border border-edge-2 overflow-hidden relative group p-8"
        >
          <div className={`absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${integrations[0].color}`} />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
               <span className={`w-3 h-3 rounded-full ${integrations[0].accent} shadow-[0_0_12px_currentColor]`} />
               <span className="text-xs font-bold text-dim uppercase tracking-wider">{integrations[0].category}</span>
            </div>
            <h4 className="text-3xl font-display font-bold text-chalk">{integrations[0].name}</h4>
          </div>
        </motion.div>

        {/* Highlighted Integrations Loop */}
        {integrations.slice(1).map((item, i) => (
          <motion.div 
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (i + 2) }}
            viewport={{ once: true }}
            className="rounded-3xl bg-deep/40 border border-edge-2 overflow-hidden relative group p-8"
          >
            <div className={`absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${item.color}`} />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                 <span className={`w-3 h-3 rounded-full ${item.accent} shadow-[0_0_12px_currentColor]`} />
                 <span className="text-xs font-bold text-dim uppercase tracking-wider">{item.category}</span>
              </div>
              <h4 className="text-3xl font-display font-bold text-chalk">{item.name}</h4>
            </div>
          </motion.div>
        ))}

        {/* Remaining List (Spans 2 columns) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-2 row-span-1 rounded-3xl bg-void border border-edge-2 p-8 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
          <p className="text-xs font-bold text-dim uppercase tracking-widest mb-6">Juga Mendukung Secara Native</p>
          <div className="flex flex-wrap gap-3">
            {secondary.map((name) => (
              <div key={name} className="px-4 py-2 rounded-lg border border-edge-2 bg-white/5 text-mist text-sm font-medium hover:bg-white/10 hover:text-chalk transition-colors cursor-default">
                {name}
              </div>
            ))}
            <div className="px-4 py-2 rounded-lg border border-tosca/30 bg-tosca/10 text-tosca text-sm font-bold cursor-pointer hover:bg-tosca hover:text-void transition-colors">
              + 40 Lainnya
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
