import { cn } from "@/lib/utils";

export default function CategoryList({ categories, activeCategory, onChange }) {
  return (
    <div className="space-y-1">
      {categories.map((category) => {
        const isActive = activeCategory === category.key;

        return (
          <button
            key={category.key}
            type="button"
            onClick={() => onChange(category.key)}
            className={cn(
              "w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-all",
              isActive
                ? "bg-[#0B1B3D] text-white"
                : "text-slate-600 hover:bg-white hover:text-[#0B1B3D]"
            )}
          >
            {category.title}
          </button>
        );
      })}
    </div>
  );
}