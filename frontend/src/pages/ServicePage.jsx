import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { findServiceBySlug } from "@/data/services";

export default function ServicePage() {
  const { slug } = useParams();
  const service = findServiceBySlug(slug);

  if (!service) {
    return (
      <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center justify-center px-6 py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0B1B3D]">Service Not Found</h1>
          <p className="mt-3 text-slate-600">We could not find the requested service. Please choose another one.</p>
          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#3065E8] hover:text-[#3065E8]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F8FAFC]">
      <section className="mx-auto w-full max-w-5xl px-6 py-20 md:py-24">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#3065E8]"
        >
          <ArrowLeft className="h-4 w-4" />
          All Services
        </Link>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3065E8]">{service.categoryTitle}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3D] md:text-5xl">{service.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{service.description}</p>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Service Overview</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-700">{service.body}</p>
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Backend Integration Ready</h3>
            <p className="mt-2 text-sm text-slate-600">
              This page currently uses local config data and is prepared for FastAPI integration through an endpoint like
              <span className="ml-1 font-mono text-slate-800">GET /services/{slug}</span>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}