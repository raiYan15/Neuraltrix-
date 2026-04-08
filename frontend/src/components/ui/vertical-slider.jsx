import { useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import CategoryList from "./category-list";
import ServiceList from "./service-list";
import { X, ArrowRight } from "lucide-react";

export default function VerticalSlider({
  open,
  onClose,
  categories,
  activeCategory,
  onCategoryChange,
  navLinks = [],
}) {
  const navigate = useNavigate();
  const selectedCategory = useMemo(
    () => categories.find((category) => category.key === activeCategory) ?? categories[0],
    [activeCategory, categories],
  );

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  const handleServiceSelect = (service) => {
    navigate(`/services/${service.slug}`);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
        className={`absolute inset-0 bg-slate-950/45 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Product navigation"
        className={`absolute inset-y-0 left-0 z-10 flex h-full w-full transform flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 sm:px-8 lg:px-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2563EB]">Product Navigation</p>
            <h2 className="mt-1 text-lg font-semibold text-slate-950">Browse by category</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full text-slate-500 hover:text-slate-950">
            <X size={18} />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto grid h-full max-w-7xl gap-8 px-6 py-6 sm:px-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-10 lg:py-10">
            <section className="hidden lg:block">
              <div className="sticky top-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Categories</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Select a category to dynamically refresh the service list.
                  </p>
                </div>
                <CategoryList categories={categories} activeCategory={activeCategory} onSelect={onCategoryChange} />
              </div>
            </section>

            <section className="hidden lg:block">
              <div className="mb-6 rounded-[28px] border border-slate-200 bg-slate-50 px-6 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">{selectedCategory?.title}</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                  {selectedCategory?.description}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                  Choose a service below to open the unified dynamic service page.
                </p>
              </div>

              {selectedCategory && <ServiceList services={selectedCategory.items} onSelect={handleServiceSelect} />}
            </section>

            <section className="lg:hidden">
              <div className="space-y-5">
                <div className="rounded-[28px] border border-slate-200 bg-slate-50 px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">Browse services</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">Pick a category</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Expand a section to inspect the available services.
                  </p>
                </div>

                <Accordion type="single" collapsible defaultValue={selectedCategory?.key} className="w-full">
                  {categories.map((category) => (
                    <AccordionItem key={category.key} value={category.key} className="border-slate-200">
                      <AccordionTrigger
                        onClick={() => onCategoryChange(category.key)}
                        className="py-4 text-left text-base font-semibold text-slate-950 no-underline hover:no-underline"
                      >
                        <span className="flex items-center gap-3">
                          <span>{category.title}</span>
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
                            {category.items.length}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4 text-sm leading-6 text-slate-600">{category.description}</p>
                        <div className="space-y-3">
                          {category.items.map((service) => (
                            <button
                              key={service.slug}
                              type="button"
                              onClick={() => handleServiceSelect(service)}
                              className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left transition-colors hover:border-slate-300 hover:bg-slate-50"
                            >
                              <span className="pr-4 text-sm font-medium text-slate-900">{service.title}</span>
                              <ArrowRight size={16} className="shrink-0 text-slate-400" />
                            </button>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {navLinks.length > 0 && (
                  <div className="rounded-[28px] border border-slate-200 bg-white p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Explore</p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {navLinks.map((link) => (
                        <Button key={link.label} asChild variant="outline" className="justify-start rounded-2xl border-slate-200 bg-slate-50 text-slate-700 hover:bg-white">
                          <Link to={link.href} onClick={onClose}>
                            {link.label}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </aside>
    </div>
  );
}