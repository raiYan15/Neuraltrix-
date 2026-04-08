import ServiceCard from "@/components/ui/service-card";

export default function ServiceList({ services, onSelect, compact = false }) {
  if (!services?.length) {
    return <p className="text-sm text-slate-500">No services available for this category.</p>;
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} onClick={onSelect} compact={compact} />
      ))}
    </div>
  );
}