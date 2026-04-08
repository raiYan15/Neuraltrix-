import { Brain, Bot, Code2, Smartphone, Users, Database, GitBranch, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    desc: "We transform your data into smart, automated decisions by embedding AI into your daily operations, helping your business run faster and more profitably.",
  },
  {
    icon: Bot,
    title: "Generative AI",
    slug: "generative-ai",
    desc: "Move beyond chatbots with AI services that power secure copilots and agents, delivering governed, domain-specific reasoning and automated workflows.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    slug: "custom-software",
    desc: "Custom software that architects secure, AI-native platforms, modernizes legacy systems, and automates complex workflows for scalable operations.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    slug: "mobile-apps",
    desc: "Give your customers premium AI-driven experiences with custom mobile development that runs smoothly on any device and feels effortless.",
  },
  {
    icon: Users,
    title: "AI Agent Development",
    slug: "ai-agents",
    desc: "Autonomous agents that reason, act, and assist humans across dynamic workflows, from strategy consulting to full deployment.",
  },
  {
    icon: Database,
    title: "LLM Development",
    slug: "llm-development",
    desc: "Enterprise-grade large language models with secure, contextual intelligence for smarter applications and decision-making systems.",
  },
  {
    icon: GitBranch,
    title: "DevOps",
    slug: "devops",
    desc: "Speed up releases and keep systems running smoothly with DevOps services that connect development and operations using smart pipelines.",
  },
  {
    icon: BarChart3,
    title: "Data Engineering",
    slug: "data-engineering",
    desc: "Turn fragmented data into trusted insights, enabling analytics-ready intelligence for real-time, strategic enterprise decisions.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" data-testid="services-section" className="py-20 sm:py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
            Services
          </p>
          <h2
            data-testid="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B3D] mb-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            AI Development Services for Real-World Impact
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Navigate through the current tech-driven landscape and foster long-term growth with custom AI solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link
              to={`/services/${s.slug}`}
              key={s.title}
              data-testid={`service-card-${s.title.toLowerCase().replace(/\s/g, "-")}`}
              className="group bg-white border border-slate-200 rounded-sm p-8 hover:bg-[#0B1B3D] transition-all duration-300 cursor-pointer"
            >
              <s.icon
                size={28}
                className="text-[#2563EB] group-hover:text-white transition-colors mb-5"
              />
              <h3
                className="text-lg font-bold text-[#0B1B3D] group-hover:text-white mb-3 transition-colors"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed transition-colors">
                {s.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
