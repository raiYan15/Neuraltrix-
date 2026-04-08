import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServiceCard({ service, onClick, compact = false }) {
  return (
    <button
      type="button"
      onClick={() => onClick(service.slug)}
      className={cn(
        "group w-full rounded-2xl border border-slate-200/80 bg-white p-4 text-left transition-all duration-200 hover:border-[#3065E8] hover:shadow-sm",
        compact && "rounded-xl p-3"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={cn("font-semibold text-[#0B1B3D]", compact ? "text-sm" : "text-base")}>{service.title}</p>
          <p className={cn("mt-1 text-slate-500", compact ? "text-xs" : "text-sm")}>{service.description}</p>
        </div>
        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-[#3065E8]" />
      </div>
    </button>
  );
}