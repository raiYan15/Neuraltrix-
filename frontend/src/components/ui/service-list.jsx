import ServiceCard from "./service-card";

export default function ServiceList({ services, onSelect }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {services.map((service) => (
        <ServiceCard key={service.slug} item={service} onSelect={onSelect} />
      ))}
    </div>
  );
}