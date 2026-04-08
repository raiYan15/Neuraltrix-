export default function CategorySlider({ categories, activeCategory, onSelect }) {
  return (
    <div className="max-h-[380px] space-y-2 overflow-y-auto pr-1">
      {categories.map((category) => {
        const active = category.key === activeCategory;

        return (
          <button
            key={category.key}
            type="button"
            onMouseEnter={() => onSelect(category.key)}
            onFocus={() => onSelect(category.key)}
            onClick={() => onSelect(category.key)}
            className={`w-full rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
              active
                ? "border-white/20 bg-white/15 text-white"
                : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            }`}
          >
            <p className="text-sm font-semibold">{category.title}</p>
            <p className={`mt-1 text-xs leading-5 ${active ? "text-slate-200" : "text-slate-400"}`}>
              {category.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}