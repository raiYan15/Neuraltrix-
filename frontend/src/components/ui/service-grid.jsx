import { ArrowRight, Boxes, Cloud, Cpu, DatabaseZap, Layers3, Sparkles } from "lucide-react";

const iconByCategory = {
  ai: Sparkles,
  data_engineering: DatabaseZap,
  generative_ai: Cpu,
  devops: Cloud,
  development_services: Layers3,
};

export default function ServiceGrid({ services, categoryKey, onSelect }) {
  const Icon = iconByCategory[categoryKey] ?? Boxes;

  return (
    <div className="grid grid-cols-2 gap-3">
      {services.map((service) => (
        <button
          key={service.slug}
          type="button"
          onClick={() => onSelect(service)}
          className="group flex gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-left transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08]"
        >
          <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white">
            <Icon size={16} />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">{service.title}</p>
            <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-300">{service.description}</p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-slate-200 transition-colors group-hover:text-white">
              View service <ArrowRight size={12} />
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}