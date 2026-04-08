import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import PageContactForm from "../components/PageContactForm";
import solutions from "../data/solutions";

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0B1B3D] mb-4">Solution Not Found</h1>
          <Link to="/solutions" className="text-[#2563EB] font-medium">Back to Solutions</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero label="Solutions" title={solution.heroTitle} description={solution.heroDesc} primaryCTA={{ text: "Request a Demo", href: "#page-contact" }} secondaryCTA={{ text: "All Solutions", href: "/solutions" }} />
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-4">
          <Link to="/solutions" data-testid="back-to-solutions" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB] transition-colors">
            <ArrowLeft size={14} /> Back to All Solutions
          </Link>
        </div>
      </div>
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Overview</h2>
              <p className="text-base text-slate-600 leading-relaxed">{solution.overview}</p>
            </div>
            <div>
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-sm p-6">
                <h3 className="text-sm font-semibold text-[#0B1B3D] uppercase tracking-wider mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {solution.tech.map((t) => (<span key={t} className="text-xs px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-sm font-medium">{t}</span>))}
                </div>
                <h3 className="text-sm font-semibold text-[#0B1B3D] uppercase tracking-wider mt-6 mb-4">Use Cases</h3>
                <ul className="space-y-2">
                  {solution.useCases.map((u) => (<li key={u} className="text-sm text-slate-600 flex items-start gap-2"><CheckCircle2 size={14} className="text-[#2563EB] mt-0.5 flex-shrink-0" />{u}</li>))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-12" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.features.map((f, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-sm p-8">
                <h3 className="text-base font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={`Transform Your Operations with ${solution.title}`} description="Schedule a demo to see how this solution can address your specific business challenges." />
      <FAQSection faqs={solution.faqs} />
      <PageContactForm context={solution.title} />
    </div>
  );
}
