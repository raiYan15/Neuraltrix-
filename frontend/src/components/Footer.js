import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Services: [
    { label: "Artificial Intelligence", href: "/services/artificial-intelligence" },
    { label: "Generative AI", href: "/services/generative-ai" },
    { label: "Custom Software", href: "/services/custom-software" },
    { label: "Mobile Apps", href: "/services/mobile-apps" },
    { label: "AI Agents", href: "/services/ai-agents" },
    { label: "LLM Development", href: "/services/llm-development" },
    { label: "DevOps", href: "/services/devops" },
    { label: "Data Engineering", href: "/services/data-engineering" },
  ],
  Solutions: [
    { label: "DataBrain AI", href: "/solutions/databrain-ai" },
    { label: "MediMind AI", href: "/solutions/medimind-ai" },
    { label: "Talentify AI", href: "/solutions/talentify-ai" },
    { label: "QuikBiz AI", href: "/solutions/quikbiz-ai" },
    { label: "IntelliBot AI", href: "/solutions/intellibot-ai" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Industries", href: "/industries" },
  ],
  Industries: [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Fintech", href: "/industries/fintech" },
    { label: "Retail", href: "/industries/retail" },
    { label: "Education", href: "/industries/education" },
    { label: "Real Estate", href: "/industries/real-estate" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" style={{ backgroundColor: "#0B1B3D" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <span
              className="text-2xl font-extrabold text-white tracking-tighter block mb-4"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              NeuralTrix AI
            </span>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              High-performance AI software engineering for enterprises ready to lead.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-slate-500 hover:text-white cursor-pointer transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} NeuralTrix AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-500 hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-xs text-slate-500 hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
            <button
              data-testid="scroll-to-top"
              onClick={scrollToTop}
              className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-sm hover:bg-white/10 transition-colors"
            >
              <ArrowUp size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
