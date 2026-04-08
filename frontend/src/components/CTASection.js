import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection({ title, description, buttonText, buttonHref }) {
  return (
    <section data-testid="cta-section" className="py-20 sm:py-24" style={{ backgroundColor: "#0B1B3D" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-center">
        <h2
          data-testid="cta-title"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          {title || "Ready to Transform Your Business?"}
        </h2>
        <p className="text-base text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
          {description || "Contact us today to learn more about how NeuralTrix AI can help you achieve your goals with cutting-edge AI solutions."}
        </p>
        <Button
          data-testid="cta-button"
          asChild
          className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90 rounded-sm px-8 py-3 font-semibold text-sm"
        >
          <a href={buttonHref || "#page-contact"}>
            {buttonText || "Get Started Today"} <ArrowRight size={16} className="ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
}
