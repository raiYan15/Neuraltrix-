import { Users, Target, Eye, MapPin, Linkedin, Twitter } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import PageContactForm from "../components/PageContactForm";

const timeline = [
  { year: "2018", title: "Founded", desc: "NeuralTrix AI was founded in San Francisco with a mission to make enterprise AI accessible and practical." },
  { year: "2019", title: "First Enterprise Client", desc: "Secured our first Fortune 500 client and delivered an AI-powered fraud detection system." },
  { year: "2020", title: "Remote-First", desc: "Expanded globally with a remote-first culture, growing to 50+ engineers across 8 countries." },
  { year: "2021", title: "100 Clients Milestone", desc: "Reached 100 enterprise clients and launched our first AI product suite." },
  { year: "2022", title: "GenAI Pioneer", desc: "Early adopter of LLMs for enterprise applications, launching RAG-based solutions before the mainstream." },
  { year: "2023", title: "400+ AI Specialists", desc: "Grew to 400+ AI specialists and opened offices in London and Singapore." },
  { year: "2024", title: "AI Agent Platform", desc: "Launched our autonomous AI agent platform, enabling enterprises to deploy intelligent agents at scale." },
  { year: "2025", title: "1500+ Projects", desc: "Surpassed 1500 successful AI projects with 95% client retention rate." },
];

const team = [
  { name: "Arjun Mehta", role: "CEO & Co-founder", bio: "15+ years in enterprise software. Previously VP Engineering at a Fortune 100 tech company." },
  { name: "Sarah Chen", role: "CTO", bio: "PhD in Machine Learning from Stanford. Led AI research at a major cloud provider." },
  { name: "David Okafor", role: "VP of Engineering", bio: "Former principal engineer at a leading AI startup. Expert in distributed systems." },
  { name: "Lisa Park", role: "VP of Product", bio: "10+ years in product management. Previously led AI product strategy at a top SaaS company." },
  { name: "Raj Patel", role: "Head of AI Research", bio: "PhD in NLP. Published 30+ papers in top AI conferences. Former research scientist at a major AI lab." },
  { name: "Maria Santos", role: "VP of Client Success", bio: "15+ years in consulting. Ensures every client achieves measurable ROI from their AI investments." },
];

const offices = [
  { city: "San Francisco", country: "USA", type: "Headquarters", address: "525 Market Street, Suite 3000" },
  { city: "London", country: "UK", type: "European Office", address: "30 St Mary Axe, Floor 12" },
  { city: "Singapore", country: "Singapore", type: "Asia-Pacific Office", address: "1 Raffles Place, Tower 2" },
  { city: "Bangalore", country: "India", type: "Engineering Center", address: "Prestige Tech Park, Sarjapur Road" },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero label="About Us" title="Engineering the Future of Enterprise AI" description="NeuralTrix AI brings battle-tested engineering talent to turn ambitious ideas into high-performance AI systems that move fast, scale hard, and deliver real business results." primaryCTA={{ text: "Work With Us", href: "#page-contact" }} secondaryCTA={{ text: "Join Our Team", href: "/careers" }} />

      {/* Mission & Vision */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="border border-slate-200 rounded-sm p-10">
              <Target size={28} className="text-[#2563EB] mb-5" />
              <h2 className="text-2xl font-bold text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Our Mission</h2>
              <p className="text-base text-slate-600 leading-relaxed">To democratize enterprise AI by building production-ready, compliant, and measurably impactful AI solutions that help businesses of all sizes compete in the AI-first economy. We believe every organization deserves access to world-class AI engineering.</p>
            </div>
            <div className="border border-slate-200 rounded-sm p-10">
              <Eye size={28} className="text-[#2563EB] mb-5" />
              <h2 className="text-2xl font-bold text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Our Vision</h2>
              <p className="text-base text-slate-600 leading-relaxed">To be the world's most trusted AI engineering partner—known for technical excellence, ethical AI practices, and measurable business outcomes. We envision a future where AI amplifies human capability across every industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-12" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Our Journey</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((t) => (
              <div key={t.year} data-testid={`timeline-${t.year}`} className="bg-white border border-slate-200 rounded-sm p-6">
                <span className="text-2xl font-extrabold text-[#2563EB] block mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t.year}</span>
                <h3 className="text-base font-bold text-[#0B1B3D] mb-2">{t.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Want to Be Part of Our Story?" description="Join 400+ AI specialists who are shaping the future of enterprise AI." buttonText="View Open Positions" buttonHref="/careers" />

      {/* Team */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Leadership Team</h2>
          <p className="text-base text-slate-600 mb-12 max-w-2xl">Meet the leaders driving NeuralTrix AI's mission to make enterprise AI accessible and impactful.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} data-testid={`team-member-${m.name.toLowerCase().replace(/\s/g, "-")}`} className="border border-slate-200 rounded-sm p-8">
                <div className="w-16 h-16 bg-[#0B1B3D] rounded-sm flex items-center justify-center mb-5">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-[#0B1B3D]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{m.name}</h3>
                <p className="text-sm text-[#2563EB] font-medium mb-3">{m.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{m.bio}</p>
                <div className="flex gap-3">
                  <Linkedin size={16} className="text-slate-400 hover:text-[#2563EB] cursor-pointer transition-colors" />
                  <Twitter size={16} className="text-slate-400 hover:text-[#2563EB] cursor-pointer transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-12" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Our Offices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((o) => (
              <div key={o.city} data-testid={`office-${o.city.toLowerCase().replace(/\s/g, "-")}`} className="bg-white border border-slate-200 rounded-sm p-6">
                <MapPin size={20} className="text-[#2563EB] mb-4" />
                <h3 className="text-base font-bold text-[#0B1B3D]">{o.city}</h3>
                <p className="text-sm text-[#2563EB] font-medium mb-2">{o.type}</p>
                <p className="text-sm text-slate-500">{o.address}</p>
                <p className="text-xs text-slate-400 mt-1">{o.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageContactForm context="About Page" />
    </div>
  );
}
