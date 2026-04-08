import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "AI Video Creation Platform",
    client: "YOU B2C",
    industry: "Media & Content",
    desc: "Human-like avatars, voice cloning, and multilingual script-to-video conversion for professional content at scale.",
    tech: ["NextJS", "Python", "Azure", "HeyGen", "RAG"],
    highlight: "2x content output",
  },
  {
    title: "Smart Teaching Platform",
    client: "Teach Better AI",
    industry: "Education",
    desc: "Nine AI-powered tools for lesson planning, quiz generation, and personalized learning experiences.",
    tech: ["ReactJS", "Python", "GPT-4o", "LangChain"],
    highlight: "45% efficiency gain",
  },
  {
    title: "AI Astrology App",
    client: "Fortuna",
    industry: "Consumer Tech",
    desc: "AI-based horoscope analysis with personalized forecasts, DALL-E visuals, and social sharing features.",
    tech: ["Flutter", "Django", "GPT-4", "DALL-E 3"],
    highlight: "500K+ users",
  },
  {
    title: "AI Trip Planner",
    client: "TravelAI",
    industry: "Travel",
    desc: "Personalized itineraries from user preferences with real-time APIs and smart navigation.",
    tech: ["Flutter", "Node.js", "GPT-4o", "Gemini API"],
    highlight: "3x engagement",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" data-testid="case-studies-section" className="py-20 sm:py-24 md:py-32" style={{ backgroundColor: "#0B1B3D" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
            Case Studies
          </p>
          <h2
            data-testid="case-studies-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Architecting Competitive Advantage with AI
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            From initial strategy to global deployment, see how we translate high-level innovation into high-impact reality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              data-testid={`case-study-${cs.client.toLowerCase().replace(/\s/g, "-")}`}
              className="group border border-white/10 rounded-sm p-8 hover:border-[#2563EB]/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-xs font-medium text-[#2563EB] uppercase tracking-wider">
                    {cs.industry}
                  </span>
                  <h3
                    className="text-xl font-bold text-white mt-2"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {cs.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{cs.client}</p>
                </div>
                <ArrowUpRight size={20} className="text-white/30 group-hover:text-[#2563EB] transition-colors" />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{cs.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {cs.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 border border-white/10 text-white/60 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <span
                  className="text-sm font-bold text-[#2563EB]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {cs.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
