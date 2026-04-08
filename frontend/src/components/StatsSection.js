const stats = [
  { value: "2x", label: "Velocity", desc: "AI reviews and intelligent testing doubles engineering speed." },
  { value: "10x", label: "Faster Deployments", desc: "Automated CI/CD pipelines accelerate deployment cycles." },
  { value: "99.9%", label: "Uptime", desc: "Predictive maintenance and automated failovers guarantee stability." },
  { value: "55%", label: "More Efficient", desc: "Reduces manual testing and documentation overhead." },
  { value: "60%", label: "Cost Reduction", desc: "AI agents refactor legacy code and modernize architecture." },
  { value: "150+", label: "Systems Deployed", desc: "Enterprise AI solutions successfully engineered and scaled." },
];

export default function StatsSection() {
  return (
    <section data-testid="stats-section" className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
            Impact
          </p>
          <h2
            data-testid="stats-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B3D] mb-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Thrive Digitally with Top AI Development Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              data-testid={`stat-${s.label.toLowerCase().replace(/\s/g, "-")}`}
              className="border border-slate-200 rounded-sm p-8"
            >
              <span
                className="text-4xl sm:text-5xl font-extrabold text-[#0B1B3D] block mb-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.value}
              </span>
              <h3
                className="text-base font-bold text-[#0B1B3D] mb-2"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {s.label}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
