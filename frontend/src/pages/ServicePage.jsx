import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import PageContactForm from "../components/PageContactForm";
import { getServiceBySlug } from "../data/services";

const buildFallback = (service) => {
  const title = service.title;
  const lowerTitle = title.toLowerCase();

  return {
    heroTitle: service.heroTitle ?? `${title} Services`,
    heroDesc: service.heroDesc ?? service.description,
    overview:
      service.overview ??
      `We design and deliver ${lowerTitle} solutions that align strategy, delivery, and measurable outcomes for modern enterprise teams.`,
    features:
      service.features ?? [
        { title: `${title} Strategy`, desc: `Map the right ${lowerTitle} opportunities to business goals.` },
        { title: "Implementation", desc: `Ship production-ready solutions with clean architecture and modern engineering practices.` },
        { title: "Integration", desc: `Connect the service to your data, APIs, and operational workflows.` },
        { title: "Performance", desc: `Optimize for reliability, speed, and a smooth user experience.` },
        { title: "Governance", desc: `Add the controls and visibility needed for enterprise rollout.` },
        { title: "Iteration", desc: `Use feedback, analytics, and future API data to continuously improve the service.` },
      ],
    process:
      service.process ?? [
        { step: "Discovery", desc: `Identify goals, constraints, and the highest-value ${lowerTitle} use cases.` },
        { step: "Architecture", desc: "Design the right information flow, APIs, and component structure." },
        { step: "Build", desc: "Implement the solution with maintainability, testing, and scalability in mind." },
        { step: "Review", desc: "Validate performance, UX, and business fit before rollout." },
        { step: "Deploy", desc: "Launch safely with monitoring, fallbacks, and operational visibility." },
        { step: "Optimize", desc: "Iterate based on usage data and evolving product requirements." },
      ],
    faqs:
      service.faqs ?? [
        { q: `What is included in ${title}?`, a: `A production-ready implementation plan, execution support, and a path to scale.` },
        { q: "Can this connect to our backend?", a: "Yes. The structure is designed to integrate with FastAPI and future API-driven content." },
        { q: "Is the page content dynamic?", a: "Yes. The service page reads from centralized data and can later switch to API responses." },
        { q: "Can this be extended later?", a: "Absolutely. The architecture is designed for more categories, richer content, and backend-driven updates." },
      ],
  };
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-950">Service not found</h1>
          <p className="mt-3 text-sm text-slate-600">The requested service slug does not exist in the current catalog.</p>
          <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#2563EB]">
            <ArrowLeft size={14} /> Back to services
          </Link>
        </div>
      </div>
    );
  }

  const content = buildFallback(service);

  return (
    <div>
      <PageHero
        label={service.categoryTitle ?? "Services"}
        title={content.heroTitle}
        description={content.heroDesc}
        primaryCTA={{ text: "Get Started", href: "#page-contact" }}
        secondaryCTA={{ text: "Back to Services", href: "/services" }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#2563EB]">
            <ArrowLeft size={14} /> Back to all services
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">Overview</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Dynamic service content</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">{content.overview}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.features.map((feature, index) => (
              <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <CheckCircle2 className="text-[#2563EB]" size={20} />
                <h3 className="mt-4 text-base font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to move forward?"
        description={`Let's discuss how our ${service.title} offering can be shaped for your stack and roadmap.`}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Delivery process</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {content.process.map((step, index) => (
              <div key={index} className="relative rounded-2xl border border-slate-200 p-6">
                <span className="text-5xl font-semibold text-slate-100">{String(index + 1).padStart(2, "0")}</span>
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-slate-950">{step.step}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={content.faqs} />
      <PageContactForm context={service.title} />
    </div>
  );
}