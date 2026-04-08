import { ArrowRight } from "lucide-react";

export default function ServiceCard({ item, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group w-full rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-950 transition-colors group-hover:text-[#0B1B3D]">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {item.description}
          </p>
        </div>
        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors group-hover:border-[#0B1B3D]/10 group-hover:text-[#0B1B3D]">
          <ArrowRight size={16} />
        </span>
      </div>
    </button>
  );
}