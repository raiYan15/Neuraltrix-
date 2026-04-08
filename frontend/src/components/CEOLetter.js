import { Quote } from "lucide-react";

export default function CEOLetter() {
  return (
    <section id="about" data-testid="ceo-letter-section" className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1720805752653-10ddccea4c94?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjZW8lMjBwb3J0cmFpdCUyMG1hbiUyMHN1aXR8ZW58MHx8fHwxNzc1NDgyOTUxfDA&ixlib=rb-4.1.0&q=85"
              alt="CEO Portrait"
              className="w-full h-[500px] object-cover rounded-sm"
            />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-sm border border-slate-200">
              <p className="font-bold text-[#0B1B3D] text-lg" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Arjun Mehta
              </p>
              <p className="text-sm text-slate-500">CEO & Co-founder, NeuralTrix AI</p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">
              Welcome to the AI-First Age
            </p>
            <h2
              data-testid="ceo-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              An open letter from our CEO
            </h2>
            <Quote size={36} className="text-slate-200" />
            <p className="text-base text-slate-600 leading-relaxed">
              Tomorrow's market leaders will grow <strong className="text-[#0B1B3D]">3x faster</strong> by
              turning AI into a daily practice rather than a distant strategy. Research shows AI-driven
              teams ship software <strong className="text-[#0B1B3D]">2.5x quicker</strong> while improving
              quality and predictability.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              At NeuralTrix AI, we aren't just adapting to this shift; we are actively engineering it.
              We leverage the latest AI stack to guarantee faster development, strict quality control,
              and enterprise-grade risk reduction for our partners.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              The future won't reward size alone. It will reward speed, intelligence, and flawless
              execution. We are ready to build that future with you.
            </p>
            <div className="pt-4">
              <p className="text-lg italic text-[#0B1B3D] font-medium" style={{ fontFamily: "Georgia, serif" }}>
                Arjun Mehta
              </p>
              <p className="text-sm text-slate-500">CEO & Co-founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
