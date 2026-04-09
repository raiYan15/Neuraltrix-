const companies = [
  "Movegistics",
  "Mondelez",
  "HealthifyMe",
  "Alorica",
  "Pinergy",
  "SohoZ",
];

const marqueeCompanies = [...companies, ...companies];

export default function TrustedCompanies() {
  return (
    <section className="relative overflow-hidden bg-[#0b1f3a] py-12 sm:py-14">
      <div className="mx-auto mb-6 max-w-7xl px-6 sm:px-8 md:px-12">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex gap-6 animate-scroll whitespace-nowrap">
          {marqueeCompanies.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="min-w-[140px] sm:min-w-[180px] px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-base md:text-lg font-medium text-white hover:scale-105 transition-transform duration-300"
            >
              {company}
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#0b1f3a] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#0b1f3a] to-transparent" />
      </div>
    </section>
  );
}
