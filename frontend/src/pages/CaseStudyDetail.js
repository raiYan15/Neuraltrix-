import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Quote } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import PageContactForm from "../components/PageContactForm";
import caseStudies from "../data/caseStudies";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold text-[#0B1B3D] mb-4">Case Study Not Found</h1><Link to="/case-studies" className="text-[#2563EB] font-medium">Back to Case Studies</Link></div></div>);
  }

  return (
    <div>
      <PageHero label={cs.industry} title={cs.heroTitle} description={cs.heroDesc} primaryCTA={{ text: "Start Similar Project", href: "#page-contact" }} secondaryCTA={{ text: "All Case Studies", href: "/case-studies" }} />
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-4">
          <Link to="/case-studies" data-testid="back-to-case-studies" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB]"><ArrowLeft size={14} /> All Case Studies</Link>
        </div>
      </div>
      {/* Results */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cs.results.map((r, i) => (
              <div key={i} data-testid={`result-${i}`} className="text-center">
                <span className="text-4xl font-extrabold text-[#0B1B3D] block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{r.metric}</span>
                <p className="text-sm font-bold text-[#0B1B3D] mt-1">{r.label}</p>
                <p className="text-xs text-slate-500 mt-1">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Challenge & Solution */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>The Challenge</h2>
              <p className="text-base text-slate-600 leading-relaxed">{cs.challenge}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Our Solution</h2>
              <p className="text-base text-slate-600 leading-relaxed">{cs.solution}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Features & Tech */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0B1B3D] mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Key Features Delivered</h2>
              <ul className="space-y-3">
                {cs.features.map((f, i) => (<li key={i} className="text-sm text-slate-600 flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />{f}</li>))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0B1B3D] mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {cs.techStack.map((t) => (<span key={t} className="text-sm px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-sm font-medium">{t}</span>))}
              </div>
              {cs.testimonial && (
                <div className="mt-10 bg-white border border-slate-200 rounded-sm p-8">
                  <Quote size={24} className="text-slate-200 mb-4" />
                  <p className="text-sm text-slate-600 leading-relaxed italic mb-4">{cs.testimonial.text}</p>
                  <p className="text-sm font-bold text-[#0B1B3D]">{cs.testimonial.author}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <CTASection title="Want Similar Results?" description="Let's discuss how we can replicate and exceed these results for your business." />
      <FAQSection faqs={cs.faqs} />
      <PageContactForm context={`Case Study: ${cs.title}`} />
    </div>
  );
}
