import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import industries from "../data/industries";

export default function IndustriesPage() {
  return (
    <div>
      <PageHero label="Industries" title="Purpose-built AI for Industry Excellence" description="We engineer industry-ready AI systems built for regulatory compliance, total data security, and measurable financial impact across every sector we serve." primaryCTA={{ text: "Book a Consultation", href: "#page-contact" }} />
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <Link key={ind.slug} to={`/industries/${ind.slug}`} data-testid={`industry-link-${ind.slug}`} className="group bg-white border border-slate-200 rounded-sm p-8 hover:-translate-y-1 transition-all duration-300">
                <ind.icon size={28} className="text-[#2563EB] mb-5" />
                <h3 className="text-lg font-bold text-[#0B1B3D] group-hover:text-[#2563EB] mb-3 transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{ind.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{ind.shortDesc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">Explore <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PageContactForm context="Industries Page" />
    </div>
  );
}
