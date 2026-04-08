import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function FAQSection({ faqs, title }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section data-testid="faq-section" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2
            data-testid="faq-title"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-10 text-center"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            {title || "Frequently Asked Questions"}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-slate-200">
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="text-left py-5 text-base font-semibold text-[#0B1B3D] hover:text-[#2563EB] hover:no-underline"
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
