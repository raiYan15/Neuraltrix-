import { Button } from "../components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0B1B3D" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 sm:py-28 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-sm">
              <Sparkles size={14} className="text-[#2563EB]" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                AI-First Engineering
              </span>
            </div>
            <h1
              data-testid="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", letterSpacing: "-0.04em" }}
            >
              Engineering the
              <br />
              <span className="text-[#2563EB]">AI-First</span> Enterprise
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg">
              NeuralTrix AI engineers high-performance digital systems that push businesses beyond average.
              We combine software architecture, data pipelines, cloud, and custom AI development to deliver
              production-ready solutions that launch <strong className="text-white">3x faster</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                data-testid="hero-cta-primary"
                asChild
                className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90 rounded-sm px-6 py-3 font-semibold text-sm"
              >
                <a href="#contact">
                  Talk to Our AI Experts <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              <Button
                data-testid="hero-cta-secondary"
                asChild
                variant="outline"
                className="bg-transparent text-white border-white/30 hover:bg-white/10 rounded-sm px-6 py-3 font-semibold text-sm"
              >
                <a href="#solutions">Explore Solutions</a>
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <span className="text-2xl font-bold text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>150+</span>
                <p className="text-xs text-slate-400 mt-1">AI Systems Deployed</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <span className="text-2xl font-bold text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>99.9%</span>
                <p className="text-xs text-slate-400 mt-1">Uptime Guarantee</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <span className="text-2xl font-bold text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>3x</span>
                <p className="text-xs text-slate-400 mt-1">Faster Delivery</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <img
              src="https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsdWUlMjBkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTc3NTQ4Mjk1MXww&ixlib=rb-4.1.0&q=85"
              alt="AI Analytics"
              className="w-full h-auto rounded-sm opacity-80 mix-blend-lighten"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0B1B3D]/60" />
          </div>
        </div>
      </div>
      {/* Client logos bar */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-6 text-center">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-50">
            {["Movegistics", "Mondelez", "HealthifyMe", "Alorica", "Pinergy", "SohoZ"].map((name) => (
              <span key={name} className="text-sm font-semibold text-white/60 tracking-wide">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
