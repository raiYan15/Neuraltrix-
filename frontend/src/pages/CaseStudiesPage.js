import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import caseStudies from "../data/caseStudies";

export default function CaseStudiesPage() {
  return (
    <div>
      <PageHero label="Case Studies" title="Architecting Competitive Advantage with AI" description="From initial strategy to global deployment, see how we translate high-level innovation into high-impact reality for clients across industries." primaryCTA={{ text: "Start Your Project", href: "#page-contact" }} />
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <Link key={cs.slug} to={`/case-studies/${cs.slug}`} data-testid={`case-study-link-${cs.slug}`} className="group border border-slate-200 rounded-sm p-8 hover:border-[#2563EB]/40 transition-all duration-300 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium text-[#2563EB] uppercase tracking-wider">{cs.industry}</span>
                    <h3 className="text-xl font-bold text-[#0B1B3D] mt-2 group-hover:text-[#2563EB] transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{cs.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{cs.client}</p>
                  </div>
                  <ArrowUpRight size={20} className="text-slate-300 group-hover:text-[#2563EB] transition-colors" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{cs.challenge.substring(0, 150)}...</p>
                <div className="flex flex-wrap gap-2">
                  {cs.techStack.slice(0, 4).map((t) => (<span key={t} className="text-xs px-2 py-1 border border-slate-200 text-slate-500 rounded-sm">{t}</span>))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PageContactForm context="Case Studies Page" />
    </div>
  );
}
