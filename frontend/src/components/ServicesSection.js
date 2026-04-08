import { Link } from "react-router-dom";
import { flatServices } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" data-testid="services-section" className="py-20 sm:py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
            Services
          </p>
          <h2
            data-testid="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B3D] mb-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            AI Development Services for Real-World Impact
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Navigate through the current tech-driven landscape and foster long-term growth with custom AI solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flatServices.map((s) => (
            <Link
              to={`/services/${s.slug}`}
              key={s.title}
              data-testid={`service-card-${s.title.toLowerCase().replace(/\s/g, "-")}`}
              className="group bg-white border border-slate-200 rounded-sm p-8 hover:bg-[#0B1B3D] transition-all duration-300 cursor-pointer"
            >
              <h3
                className="text-lg font-bold text-[#0B1B3D] group-hover:text-white mb-3 transition-colors"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#3065E8] group-hover:text-sky-200 mb-2 transition-colors">
                {s.categoryTitle}
              </p>
              <p className="text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed transition-colors">
                {s.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
