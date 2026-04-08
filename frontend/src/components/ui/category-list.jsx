export default function CategoryList({ categories, activeCategory, onSelect }) {
  return (
    <div className="space-y-2">
      {categories.map((category) => {
        const active = category.key === activeCategory;

        return (
          <button
            key={category.key}
            type="button"
            onClick={() => onSelect(category.key)}
            className={`flex w-full items-start justify-between rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
              active
                ? "border-[#0B1B3D] bg-[#0B1B3D] text-white shadow-lg shadow-slate-900/10"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            <div>
              <div className="text-sm font-semibold">{category.title}</div>
              <div className={`mt-1 text-xs leading-relaxed ${active ? "text-slate-200" : "text-slate-500"}`}>
                {category.description}
              </div>
            </div>
            <span className={`ml-4 rounded-full px-2 py-1 text-xs font-medium ${active ? "bg-white/10 text-white" : "bg-slate-100 text-slate-500"}`}>
              {category.items.length}
            </span>
          </button>
        );
      })}
    </div>
  );
}