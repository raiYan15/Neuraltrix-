import { ArrowUpRight } from "lucide-react";

const solutions = [
  {
    title: "DataBrain AI",
    desc: "Summarize, transcribe, and convert complicated multi-format data into easy-to-follow chats with a generative AI solution.",
    tags: ["NLP", "Document Processing", "RAG"],
  },
  {
    title: "MediMind AI",
    desc: "Digitalize your healthcare system with a generative AI solution designed by industry experts specifically to aid the health industry.",
    tags: ["Healthcare", "HIPAA", "GenAI"],
  },
  {
    title: "Talentify AI",
    desc: "Simplify finding opportunities and suitable candidates for your job profiles with a Gen AI solution connecting job seekers and recruiters.",
    tags: ["HR Tech", "Matching", "Automation"],
  },
  {
    title: "QuikBiz AI",
    desc: "An AI chatbot capable of improving engagement with customers and website visitors through relevant context-driven interactions.",
    tags: ["Chatbot", "Customer Engagement", "RAG"],
  },
  {
    title: "IntelliBot AI",
    desc: "Automate query resolution and user interaction via an AI chatbot that centrally vectorizes data from multiple sources.",
    tags: ["Enterprise", "Knowledge Base", "AI"],
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" data-testid="solutions-section" className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
            Solutions
          </p>
          <h2
            data-testid="solutions-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B3D] mb-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Engineering What's Next with AI-Driven Solutions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We don't just build tools; we engineer high-performance intelligence that justifies your investment.
          </p>
        </div>
        <div className="space-y-0">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              data-testid={`solution-card-${s.title.toLowerCase().replace(/\s/g, "-")}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-slate-200 hover:bg-[#F8FAFC] transition-colors px-4 -mx-4"
            >
              <div className="md:col-span-1 flex items-start">
                <span
                  className="text-sm font-medium text-slate-400"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-3">
                <h3
                  className="text-xl font-bold text-[#0B1B3D] group-hover:text-[#2563EB] transition-colors"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {s.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 flex items-start justify-end">
                <ArrowUpRight
                  size={20}
                  className="text-slate-300 group-hover:text-[#2563EB] transition-colors"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
