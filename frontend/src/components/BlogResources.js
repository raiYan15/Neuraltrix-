import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    category: "AI Tools",
    title: "Augment Code vs Cursor: Best AI Tool for Developers?",
    slug: "augment-code-vs-cursor",
    desc: "Pick the one that matches your criteria, repository size, and workflow preferences for maximum productivity.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
  },
  {
    category: "AI Comparison",
    title: "Claude vs ChatGPT for Coding: Features & Use Cases",
    slug: "claude-vs-chatgpt-coding",
    desc: "A deep comparison of the leading AI assistants for software development and code generation tasks.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    category: "Development",
    title: "Top 10 Vibe Coding Tools for Faster AI App Development",
    slug: "top-vibe-coding-tools",
    desc: "The way developers build software is changing, and these tools are responsible for the transformation.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  },
];

export default function BlogResources() {
  return (
    <section id="blog" data-testid="blog-section" className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
            Resources
          </p>
          <h2
            data-testid="blog-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B3D] mb-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Insights & Trends
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From emerging technologies to real-world solutions, track what's shaping the AI landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <Link
              to={`/blog/${a.slug}`}
              key={i}
              data-testid={`blog-card-${i}`}
              className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
                  {a.category}
                </span>
                <h3
                  className="text-base font-bold text-[#0B1B3D] mt-2 mb-3 group-hover:text-[#2563EB] transition-colors"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {a.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{a.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B1B3D] group-hover:text-[#2563EB] transition-colors">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
