import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Cecillia Wong",
    role: "Marketing Manager, Powerknot",
    text: "The NeuralTrix team was highly professional, client-focused, and customer-oriented. They delivered the project with the expected quality, offering cost-effective solutions. They were flexible, accommodating our ideas, and consistently returned items promptly.",
  },
  {
    name: "Christina Delord",
    role: "Founder, TracPrac",
    text: "You can rely on their creativity and expertise! They grasped our vision, set realistic timelines, and provided innovative suggestions for our software. Whether your project is big or small, their creativity and dependable service will see it through.",
  },
  {
    name: "Lisa Bailey",
    role: "Founder, DockHere",
    text: "NeuralTrix transformed my ideas into an outstanding design, offering valuable suggestions throughout the process. They were always available to discuss the project's design and feasibility. Their core strengths lie in expertise, patience, and commitment to excellence.",
  },
  {
    name: "Fahad AlQarawi",
    role: "Founder, C-school App",
    text: "They offered suggestions, which meant they've got a proactive team on board. Communication with them was quite easy. I liked their professionalism and commitment. If I am asked to rate them, I rate them 5 out of 5.",
  },
  {
    name: "Bryan Rivers",
    role: "CEO, Malibbo",
    text: "I genuinely appreciate the efforts of the NeuralTrix team and want to thank each of you for your hard work, determination, late nights, countless hours, and continuous communication throughout this project.",
  },
];

export default function Testimonials() {
  return (
    <section data-testid="testimonials-section" className="py-20 sm:py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2
            data-testid="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B3D] mb-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Powering Digital Success
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Real stories of how intelligent engineering transformed complex challenges into operational success.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <div
                  data-testid={`testimonial-card-${i}`}
                  className="bg-white border border-slate-200 rounded-sm p-8 h-full flex flex-col"
                >
                  <Quote size={24} className="text-slate-200 mb-4" />
                  <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-6">
                    {t.text}
                  </p>
                  <div>
                    <p className="text-sm font-bold text-[#0B1B3D]">{t.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{t.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious
              data-testid="testimonial-prev"
              className="static translate-y-0 bg-white border border-slate-200 hover:bg-[#0B1B3D] hover:text-white rounded-sm"
            />
            <CarouselNext
              data-testid="testimonial-next"
              className="static translate-y-0 bg-white border border-slate-200 hover:bg-[#0B1B3D] hover:text-white rounded-sm"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
