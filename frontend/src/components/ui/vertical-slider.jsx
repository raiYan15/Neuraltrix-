import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CategoryList from "@/components/ui/category-list";
import ServiceList from "@/components/ui/service-list";
import { serviceCategories } from "@/data/services";

export default function VerticalSlider({ open, onClose }) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]?.key || "ai");

  const activeServices = useMemo(() => {
    return serviceCategories.find((category) => category.key === activeCategory)?.items || [];
  }, [activeCategory]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleSelectService = (slug) => {
    navigate(`/services/${slug}`);
    onClose();
  };

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        id="product-slider"
        role="dialog"
        aria-modal="true"
        aria-label="Product navigation panel"
        className={`fixed inset-y-0 left-0 z-50 w-full transform border-r border-slate-200/70 bg-[#F8FAFC] transition-all duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1320px] flex-col px-4 py-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <p className="text-sm font-semibold tracking-wide text-[#0B1B3D]">Product Navigation</p>
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close product navigation">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-4 hidden h-full min-h-0 gap-4 lg:grid lg:grid-cols-[320px_minmax(0,1fr)]">
            <div className="overflow-auto rounded-2xl border border-slate-200 bg-slate-100 p-4">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Categories</h3>
              <CategoryList
                categories={serviceCategories}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
              />
            </div>

            <div className="overflow-auto rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#3065E8]">Services</p>
                <h2 className="mt-2 text-2xl font-bold text-[#0B1B3D]">
                  {serviceCategories.find((category) => category.key === activeCategory)?.title}
                </h2>
              </div>
              <ServiceList services={activeServices} onSelect={handleSelectService} />
            </div>
          </div>

          <div className="mt-4 lg:hidden">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Explore by category</p>
              <Accordion type="single" collapsible className="w-full">
                {serviceCategories.map((category) => (
                  <AccordionItem key={category.key} value={category.key}>
                    <AccordionTrigger className="text-base font-semibold text-[#0B1B3D]">
                      {category.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ServiceList services={category.items} onSelect={handleSelectService} compact />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}