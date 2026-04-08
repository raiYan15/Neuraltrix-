import { CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const points = [
  {
    title: "Hallucination Control",
    desc: "We build AI systems with RAG pipelines, governed data layers, and validation frameworks that turn AI from a liability into a trusted business engine.",
  },
  {
    title: "Compliance-First, Future-Ready AI",
    desc: "AI solutions aligned with GDPR, HIPAA, and audit-ready governance from day one, so you can move fast, stay compliant, and scale without regulatory surprises.",
  },
  {
    title: "Engineering-Led Execution",
    desc: "Battle-tested engineering talent that turns ambitious ideas into high-performance AI systems moving fast, scaling hard, and delivering real business results.",
  },
  {
    title: "End-to-End Ownership",
    desc: "From architecture design to deployment and monitoring, we own the full lifecycle ensuring consistency, reliability, and continuous optimization.",
  },
];

const metrics = [
  { value: "15+", label: "Years of Excellence" },
  { value: "1000+", label: "Happy Clients" },
  { value: "400+", label: "AI Specialists" },
  { value: "1500+", label: "Successful Projects" },
  { value: "95%", label: "Client Retention" },
  { value: "20%", label: "Faster Delivery" },
];

export default function WhyChooseUs() {
  return (
    <section data-testid="why-choose-us-section" className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
              Why NeuralTrix AI?
            </p>
            <h2
              data-testid="why-choose-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-6"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Your Trusted AI Engineering Partner
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              NeuralTrix AI brings battle-tested engineering talent to turn ambitious ideas into
              high-performance AI systems that move fast, scale hard, and deliver real business results.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {metrics.map((m) => (
                <div key={m.label}>
                  <span
                    className="text-2xl font-extrabold text-[#0B1B3D] block"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {m.value}
                  </span>
                  <span className="text-xs text-slate-500 mt-1">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {points.map((p, i) => (
                <AccordionItem key={p.title} value={`item-${i}`} className="border-b border-slate-200">
                  <AccordionTrigger
                    data-testid={`accordion-trigger-${i}`}
                    className="text-left py-6 text-base font-semibold text-[#0B1B3D] hover:text-[#2563EB] hover:no-underline"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-[#2563EB] flex-shrink-0" />
                      {p.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 leading-relaxed pb-6 pl-9">
                    {p.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
