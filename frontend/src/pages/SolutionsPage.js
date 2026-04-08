import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import solutions from "../data/solutions";

export default function SolutionsPage() {
  return (
    <div>
      <PageHero
        label="Our Solutions"
        title="AI-Driven Digital Solutions for Every Challenge"
        description="We don't just build tools; we engineer high-performance intelligence that justifies your investment through reduced manual effort and superior technical integrity."
        primaryCTA={{ text: "Explore Solutions", href: "#solutions-list" }}
      />
      <section id="solutions-list" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <Link
                key={s.slug}
                to={`/solutions/${s.slug}`}
                data-testid={`solution-link-${s.slug}`}
                className="group bg-white border border-slate-200 rounded-sm p-8 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#0B1B3D] group-hover:text-[#2563EB] mb-3 transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{s.shortDesc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-sm">{t}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PageContactForm context="Solutions Page" />
    </div>
  );
}
