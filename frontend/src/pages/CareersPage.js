import { useState } from "react";
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../components/ui/button";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import careers from "../data/careers";

function JobCard({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <div data-testid={`job-card-${job.id}`} className="bg-white border border-slate-200 rounded-sm overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 hover:bg-[#F8FAFC] transition-colors">
        <div>
          <h3 className="text-lg font-bold text-[#0B1B3D]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{job.title}</h3>
          <p className="text-sm text-slate-500 mt-1">{job.department}</p>
          <div className="flex flex-wrap gap-4 mt-3">
            <span className="text-xs text-slate-500 flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
            <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={12} /> {job.type}</span>
            <span className="text-xs text-slate-500 flex items-center gap-1"><Briefcase size={12} /> {job.experience}</span>
          </div>
        </div>
        {open ? <ChevronUp size={20} className="text-slate-400 flex-shrink-0" /> : <ChevronDown size={20} className="text-slate-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 sm:px-8 pb-8 border-t border-slate-100 pt-6">
          <p className="text-sm text-slate-600 leading-relaxed mb-6">{job.description}</p>
          <h4 className="text-sm font-semibold text-[#0B1B3D] uppercase tracking-wider mb-3">Responsibilities</h4>
          <ul className="space-y-2 mb-6">
            {job.responsibilities.map((r, i) => (<li key={i} className="text-sm text-slate-600 flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />{r}</li>))}
          </ul>
          <h4 className="text-sm font-semibold text-[#0B1B3D] uppercase tracking-wider mb-3">Requirements</h4>
          <ul className="space-y-2 mb-6">
            {job.requirements.map((r, i) => (<li key={i} className="text-sm text-slate-600 flex items-start gap-2"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 flex-shrink-0" />{r}</li>))}
          </ul>
          <Button data-testid={`apply-btn-${job.id}`} asChild className="bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm px-6 py-3 font-semibold text-sm">
            <a href="#page-contact">Apply for This Role</a>
          </Button>
        </div>
      )}
    </div>
  );
}

export default function CareersPage() {
  const departments = [...new Set(careers.map((j) => j.department))];
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? careers : careers.filter((j) => j.department === filter);

  return (
    <div>
      <PageHero label="Careers" title="Build the Future of AI With Us" description="Join 400+ AI specialists who are shaping the future of enterprise AI. We offer challenging work, competitive compensation, and a culture that values innovation and impact." primaryCTA={{ text: "View Open Positions", href: "#positions" }} />

      {/* Culture */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-12" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Why NeuralTrix AI?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cutting-Edge Work", desc: "Work with the latest AI technologies—LLMs, agents, RAG systems—on real enterprise problems." },
              { title: "Remote-First", desc: "Work from anywhere with a team distributed across 8+ countries. Flexible hours that respect your timezone." },
              { title: "Growth Culture", desc: "Annual learning budget, conference attendance, published research, and mentorship from industry leaders." },
              { title: "Competitive Package", desc: "Top-of-market compensation, equity, health benefits, and generous PTO. We invest in our people." },
            ].map((b) => (
              <div key={b.title} className="border border-slate-200 rounded-sm p-6">
                <h3 className="text-base font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Open Positions</h2>
          <p className="text-base text-slate-600 mb-8">{careers.length} open roles across {departments.length} departments</p>
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              data-testid="filter-all"
              onClick={() => setFilter("All")}
              className={`text-sm px-4 py-2 rounded-sm font-medium transition-colors ${filter === "All" ? "bg-[#0B1B3D] text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-[#0B1B3D]"}`}
            >All</button>
            {departments.map((d) => (
              <button
                key={d}
                data-testid={`filter-${d.toLowerCase()}`}
                onClick={() => setFilter(d)}
                className={`text-sm px-4 py-2 rounded-sm font-medium transition-colors ${filter === d ? "bg-[#0B1B3D] text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-[#0B1B3D]"}`}
              >{d}</button>
            ))}
          </div>
          <div className="space-y-4">
            {filtered.map((job) => (<JobCard key={job.id} job={job} />))}
          </div>
        </div>
      </section>

      <PageContactForm context="Careers Page - Job Application" />
    </div>
  );
}
