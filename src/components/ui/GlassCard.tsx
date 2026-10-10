import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-deep/55 border border-edge-2 overflow-hidden transition-all duration-400 group hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(67,196,188,0.5)]",
        className
      )}
      {...props}
    >
      {/* Dynamic gradient border reveal on hover using CSS mask */}
      <div className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none p-[1px] bg-gradient-to-br from-tosca/40 via-transparent to-blue-d/30 [mask-image:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude]" />
      
      {children}
    </div>
  );
}
