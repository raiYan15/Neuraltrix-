import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import services from "../data/services";

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        label="Our Services"
        title="AI Development Services for Real-World Impact"
        description="Navigate through the current tech-driven landscape and foster long-term growth with custom AI solutions tailored to your unique business challenges."
        primaryCTA={{ text: "Talk to Our Experts", href: "#page-contact" }}
      />
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                data-testid={`service-link-${s.slug}`}
                className="group bg-white border border-slate-200 rounded-sm p-8 hover:bg-[#0B1B3D] transition-all duration-300"
              >
                <s.icon size={28} className="text-[#2563EB] group-hover:text-white transition-colors mb-5" />
                <h3 className="text-lg font-bold text-[#0B1B3D] group-hover:text-white mb-3 transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed transition-colors mb-4">{s.shortDesc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] group-hover:text-white transition-colors">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PageContactForm context="Services Page" />
    </div>
  );
}
