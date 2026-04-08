import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

export default function PageHero({ label, title, description, primaryCTA, secondaryCTA, bgDark = true }) {
  return (
    <section
      data-testid="page-hero"
      className={`relative py-20 sm:py-28 ${bgDark ? "text-white" : "text-[#0B1B3D]"}`}
      style={{ backgroundColor: bgDark ? "#0B1B3D" : "#F8FAFC" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-3xl">
          {label && (
            <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${bgDark ? "text-[#2563EB]" : "text-[#2563EB]"}`}>
              {label}
            </p>
          )}
          <h1
            data-testid="page-hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-6"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif", letterSpacing: "-0.04em" }}
          >
            {title}
          </h1>
          <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-8 ${bgDark ? "text-slate-300" : "text-slate-600"}`}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCTA && (
              <Button
                data-testid="page-hero-primary-cta"
                asChild
                className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90 rounded-sm px-6 py-3 font-semibold text-sm"
              >
                <a href={primaryCTA.href}>
                  {primaryCTA.text} <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            )}
            {secondaryCTA && (
              <Button
                data-testid="page-hero-secondary-cta"
                asChild
                variant="outline"
                className={`rounded-sm px-6 py-3 font-semibold text-sm ${bgDark ? "bg-transparent text-white border-white/30 hover:bg-white/10" : "bg-transparent text-[#0B1B3D] border-[#0B1B3D]/30 hover:bg-[#0B1B3D]/5"}`}
              >
                <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
