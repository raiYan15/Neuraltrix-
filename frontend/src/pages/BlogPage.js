import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import blogArticles from "../data/blog";

export default function BlogPage() {
  return (
    <div>
      <PageHero label="Blog & Resources" title="AI Development Insights & Trends" description="From emerging technologies to real-world solutions, track what's shaping the AI landscape. Expert insights from our engineering team." primaryCTA={{ text: "Subscribe to Updates", href: "#page-contact" }} bgDark={true} />
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogArticles.map((a) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} data-testid={`blog-link-${a.slug}`} className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="overflow-hidden h-48">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">{a.category}</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1"><Clock size={10} /> {a.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0B1B3D] mb-3 group-hover:text-[#2563EB] transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{a.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{a.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B1B3D] group-hover:text-[#2563EB] transition-colors">Read Article <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PageContactForm context="Blog Page" />
    </div>
  );
}
