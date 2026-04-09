import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { findServiceBySlug } from "@/data/services";
import { getServiceDetails } from "@/data/serviceDetails";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const createFallbackServiceDetails = (slug, serviceMeta) => {
  const title = serviceMeta?.title || slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  const intro = serviceMeta?.description || `${title} implementation services for enterprise AI systems.`;
  const description =
    serviceMeta?.body ||
    `${title} accelerates modern AI delivery with production architecture, observability, and scalable integration.`;

  return {
    title,
    intro,
    description,
    subServices: ["Implementation", "Integration", "Optimization", "Monitoring"],
    techStack: ["React", "FastAPI", "Python", "Vector DB"],
    workflow: [
      "Discovery",
      "Architecture",
      "Implementation",
      "Validation",
      "Production Rollout",
    ],
    whyNeuraltrix: ["Scalable AI solutions", "Industry expertise", "Fast deployment"],
    caseStudies: [
      "Case Study 1",
      "Case Study 2",
      "Case Study 3",
      "Case Study 4",
    ],
    industries: ["Healthcare", "Finance", "E-commerce"],
    testimonials: ["Amazing AI solutions!", "Boosted our productivity."],
    resources: ["Docs", "Blogs", "Guides"],
    faqs: [
      { q: `What is ${title}?`, a: `${title} helps teams deploy reliable AI capabilities in production systems.` },
      { q: "Why use it?", a: "It improves performance, automation quality, and deployment speed." },
    ],
  };
};

export default function ServicePage() {
  const { slug } = useParams();
  const serviceMeta = findServiceBySlug(slug);
  const service = getServiceDetails(slug) || createFallbackServiceDetails(slug, serviceMeta);

  const longDescription =
    service.longDescription ||
    `${service.intro} ${service.description} We design, deliver, and optimize enterprise-grade implementations with a focus on measurable outcomes, maintainability, and scale.`;

  const detailedServices = service.subServices.map((item, index) => ({
    title: item,
    description:
      `Implementation track ${index + 1}: ${item} delivery tailored to your architecture, governance, and performance requirements.`,
  }));

  const workflowSteps = service.workflow.map((step, index) => {
    const normalized = typeof step === "string" ? step : step.title;
    return {
      title: normalized,
      desc:
        typeof step === "string"
          ? `Phase ${index + 1} focuses on ${normalized.toLowerCase()} with clear technical checkpoints, quality validation, and rollout readiness.`
          : step.desc,
    };
  });

  const whyNeuraltrix = service.whyNeuraltrix || ["Scalable AI solutions", "Industry expertise", "Fast deployment"];

  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Enterprise Clients", value: "1000+" },
    { label: "Domain Experts", value: "400+" },
    { label: "Client Retention", value: "95%" },
  ];

  const caseStudies = (service.caseStudies || ["Case Study 1", "Case Study 2", "Case Study 3", "Case Study 4"]).slice(0, 4);

  const expandedIndustries = [
    ...new Set([...(service.industries || []), "Healthcare", "Finance", "E-commerce", "SaaS", "Logistics", "Education"]),
  ].slice(0, 8);

  const resources = (service.resources || ["Docs", "Blogs", "Guides"]).map((resource) => ({
    title: resource,
    description: `${resource} curated for implementation teams, architects, and decision-makers.`,
  }));

  const faqs = [...(service.faqs || [])];
  while (faqs.length < 6) {
    const n = faqs.length + 1;
    faqs.push({
      q: `How is ${service.title} rollout planned in phase ${n}?`,
      a: `Neuraltrix defines a milestone-driven plan with architecture reviews, integration checkpoints, and production validation for each phase.`,
    });
  }

  if (!slug) {
    return (
      <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center justify-center px-6 py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0B1B3D]">Service Not Found</h1>
          <p className="mt-3 text-slate-600">We could not find the requested service. Please choose another one.</p>
          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#3065E8] hover:text-[#3065E8]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F8FAFC]">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#3065E8]"
        >
          <ArrowLeft className="h-4 w-4" />
          All Services
        </Link>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <p className="mb-2 text-sm font-medium text-blue-500">✨ {service.title}</p>
          <h1 className="text-4xl font-bold leading-tight text-[#0B1B3D] md:text-5xl">
            {service.title} <span className="bg-gradient-to-r from-[#3065E8] to-[#00A6FB] bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{longDescription}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#3065E8] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2556d1]">
              Schedule a Call
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#3065E8] hover:text-[#3065E8]">
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="mb-4 text-xl font-semibold text-[#0B1B3D]">Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {detailedServices.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-lg">
              <h3 className="text-lg font-semibold text-[#0B1B3D]">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="mb-4 text-xl font-semibold text-[#0B1B3D]">Tech Stack</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <ul className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 text-slate-700">
            <li className="font-medium">Data Collection & Ingestion</li>
            <li className="font-medium">Processing & Orchestration</li>
            <li className="font-medium">Modeling & Intelligence Layer</li>
            <li className="font-medium">Visualization & Monitoring</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {service.techStack.map((tech) => (
              <div key={tech} className="rounded-lg border border-slate-200 bg-white p-4 text-center text-sm font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="mb-6 text-xl font-semibold text-[#0B1B3D]">Workflow</h2>
        <div className="mt-10 space-y-8 border-l border-slate-300 pl-8">
          {workflowSteps.map((step, index) => (
            <div key={`${step.title}-${index}`} className="relative">
              <div className="absolute -left-10 top-2 h-4 w-4 rounded-full bg-gradient-to-r from-[#3065E8] to-[#00A6FB]" />
              <h4 className="font-semibold text-[#0B1B3D]">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl rounded-2xl bg-accent/30 px-6 py-10">
        <h2 className="mb-4 text-xl font-semibold text-[#0B1B3D]">Why NeuralTrix AI?</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <ul className="list-disc space-y-2 pl-6">
            {whyNeuraltrix.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                <p className="text-2xl font-bold text-[#0B1B3D]">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="mb-6 text-xl font-semibold text-[#0B1B3D]">Case Studies</h2>
        <div className="rounded-xl bg-[#0B1B3D] p-8 text-white">
          <h3 className="text-2xl font-semibold">Featured Transformation Story</h3>
          <p className="mt-3 max-w-3xl text-slate-200">{caseStudies[0]}</p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {caseStudies.slice(1).map((item, i) => (
              <div key={`${item}-${i}`} className="rounded-lg border border-white/20 bg-white/5 p-4">
                <p className="font-medium">Case Study {i + 2}</p>
                <p className="mt-2 text-sm text-slate-300">{item}</p>
              </div>
            ))}
            {caseStudies.length < 4 &&
              Array.from({ length: 4 - caseStudies.length }).map((_, i) => (
                <div key={`case-fallback-${i}`} className="rounded-lg border border-white/20 bg-white/5 p-4">
                  <p className="font-medium">Case Study {caseStudies.length + i + 1}</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Enterprise rollout with measurable efficiency and quality improvements.
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="mb-4 text-xl font-semibold text-[#0B1B3D]">Industries</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {expandedIndustries.map((industry) => (
            <div key={industry} className="rounded-lg border border-slate-200 bg-white p-4">
              <h4 className="font-semibold text-[#0B1B3D]">{industry}</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Improve customer experience, operational intelligence, and decision velocity.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl rounded-2xl bg-accent/20 px-6 py-10">
        <h2 className="mb-4 text-xl font-semibold text-[#0B1B3D]">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex min-h-[220px] items-center justify-center rounded-xl border border-slate-200 bg-white text-sm text-slate-500">
            Video / Image Placeholder
          </div>
          <div className="space-y-4">
            {service.testimonials.map((item) => (
              <p key={item}>"{item}"</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="mb-4 text-xl font-semibold text-[#0B1B3D]">Resources</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <div key={resource.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="h-36 bg-slate-100" />
              <div className="p-4">
                <h4 className="font-semibold text-[#0B1B3D]">{resource.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{resource.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="mb-4 text-xl font-semibold text-[#0B1B3D]">FAQs</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={`${faq.q}-${i}`} value={`faq-${i}`} className="rounded-lg border border-slate-200 bg-white px-4">
              <AccordionTrigger className="font-medium text-[#0B1B3D] hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="mb-4 text-xl font-semibold text-[#0B1B3D]">Contact Us</h2>
        <form className="grid max-w-3xl gap-4 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Name" className="rounded border border-slate-300 p-2" />
          <input placeholder="Email" className="rounded border border-slate-300 p-2" />
          <input placeholder="Company" className="rounded border border-slate-300 p-2" />
          <input placeholder="Phone" className="rounded border border-slate-300 p-2" />
          <textarea placeholder="Message" className="min-h-[140px] rounded border border-slate-300 p-2 md:col-span-2" />
          <button className="rounded bg-blue-500 py-2 text-white transition hover:bg-blue-600 md:col-span-2 md:w-40" type="submit">
            Submit
          </button>
        </form>
      </section>

      <section className="mx-auto mb-14 w-full max-w-6xl rounded-2xl bg-gradient-to-r from-[#0B1B3D] to-[#3065E8] px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to move forward?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-100">
          Partner with NeuralTrix AI to design, build, and scale production-grade service implementations.
        </p>
        <button className="mt-6 rounded-full bg-white px-6 py-2.5 font-semibold text-[#0B1B3D] transition hover:bg-slate-100">
          Contact Us
        </button>
      </section>

    </main>
  );
}