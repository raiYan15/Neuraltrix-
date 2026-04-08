import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategorySlider from "./category-slider";
import ServiceGrid from "./service-grid";
import { serviceCategories } from "@/data/services";

export default function ProductDropdown() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]?.key ?? "ai");

  const selectedCategory = useMemo(
    () => serviceCategories.find((category) => category.key === activeCategory) ?? serviceCategories[0],
    [activeCategory],
  );

  const handleServiceClick = (service) => {
    navigate(`/services/${service.slug}`);
  };

  return (
    <div className="w-[850px] rounded-xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
      <div className="flex items-stretch gap-4">
        <section className="w-[220px] border-r border-white/10 pr-3">
          <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Categories</p>
          <CategorySlider categories={serviceCategories} activeCategory={activeCategory} onSelect={setActiveCategory} />
        </section>

        <section className="flex-1 pl-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300">{selectedCategory?.title}</p>
          <p className="mt-1 mb-4 text-sm text-slate-300">{selectedCategory?.description}</p>
          <ServiceGrid categoryKey={selectedCategory?.key} services={selectedCategory?.items ?? []} onSelect={handleServiceClick} />
        </section>
      </div>
    </div>
  );
}