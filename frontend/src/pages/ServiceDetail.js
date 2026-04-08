import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import PageContactForm from "../components/PageContactForm";
import { findServiceBySlug } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = findServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0B1B3D] mb-4">Service Not Found</h1>
          <Link to="/services" className="text-[#2563EB] font-medium">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        label="Services"
        title={service.title}
        description={service.description}
        primaryCTA={{ text: "Get Started", href: "#page-contact" }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-4">
          <Link to="/services" data-testid="back-to-services" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB] transition-colors">
            <ArrowLeft size={14} /> Back to All Services
          </Link>
        </div>
      </div>

      {/* Overview */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed">{service.body}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-12" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>What We Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{ title: service.title, desc: service.description }].map((f, i) => (
              <div key={i} data-testid={`feature-${i}`} className="bg-white border border-slate-200 rounded-sm p-8">
                <CheckCircle2 size={20} className="text-[#2563EB] mb-4" />
                <h3 className="text-base font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Get Started?" description={`Let's discuss how our ${service.title} service can transform your business operations.`} />

      {/* Process */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-12" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{ step: "Discovery", desc: "We evaluate your business context and define a tailored implementation strategy." }].map((p, i) => (
              <div key={i} data-testid={`process-step-${i}`} className="relative">
                <span className="text-5xl font-extrabold text-slate-100 absolute -top-2 -left-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-10">
                  <h3 className="text-base font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{p.step}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={[{ q: "Can this be customized for our workflow?", a: "Yes. We tailor architecture, delivery process, and integrations to your internal systems and goals." }]} />
      <PageContactForm context={service.title} />
    </div>
  );
}
