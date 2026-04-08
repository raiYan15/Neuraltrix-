import { ArrowRight, ShoppingCart, Heart, DollarSign, GraduationCap, Landmark, Gamepad2, Building2 } from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    name: "Retail",
    desc: "Predictive AI that forecasts demand, optimizes supply chains, and personalizes shopping experiences, cutting waste by 30% and increasing margins.",
  },
  {
    icon: Heart,
    name: "Healthcare",
    desc: "HIPAA-compliant AI that automates administrative triage and securely supports clinicians, improving hospital throughput by up to 45%.",
  },
  {
    icon: DollarSign,
    name: "Fintech",
    desc: "Real-time anomaly detection to catch fraud 50% faster, with intelligent risk scoring and automated compliance monitoring.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    desc: "AI-powered curriculum engines for 2x student engagement and 3x personalization efficiency without losing the personal touch.",
  },
  {
    icon: Landmark,
    name: "BFSI",
    desc: "Safe automation that protects legacy banking systems while saving millions through automated compliance and risk management.",
  },
  {
    icon: Gamepad2,
    name: "Sports & Gaming",
    desc: "Real-time intelligence that turns game data into personalized experiences driving 2x higher audience retention.",
  },
  {
    icon: Building2,
    name: "Real Estate",
    desc: "AI-automated asset valuations and market trend predictions driving a 70% improvement in lead conversion.",
  },
];

export default function Industries() {
  return (
    <section id="industries" data-testid="industries-section" className="py-20 sm:py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
            Industries
          </p>
          <h2
            data-testid="industries-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B3D] mb-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Purpose-built AI for Industry Excellence
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We engineer industry-ready AI systems built for regulatory compliance, total data security, and measurable financial impact.
          </p>
        </div>
        <div className="space-y-0">
          {industries.map((ind) => (
            <div
              key={ind.name}
              data-testid={`industry-${ind.name.toLowerCase().replace(/[\s&]/g, "-")}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-slate-200 hover:bg-white transition-colors px-4 -mx-4 cursor-pointer"
            >
              <div className="md:col-span-1 flex items-center">
                <ind.icon size={22} className="text-slate-400 group-hover:text-[#2563EB] transition-colors" />
              </div>
              <div className="md:col-span-3">
                <h3
                  className="text-lg font-bold text-[#0B1B3D] group-hover:text-[#2563EB] transition-colors"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {ind.name}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm text-slate-600 leading-relaxed">{ind.desc}</p>
              </div>
              <div className="md:col-span-1 flex items-center justify-end">
                <ArrowRight size={16} className="text-slate-300 group-hover:text-[#2563EB] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
