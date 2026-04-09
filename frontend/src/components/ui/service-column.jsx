export default function ServiceColumn({ title, image, items, onNavigate }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <h3 className="text-sm font-semibold text-[#3065E8]">{title}</h3>

      <div className="h-[100px] w-full overflow-hidden rounded-md border border-slate-700/60">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => onNavigate(item.slug)}
            className="text-left text-sm leading-5 text-slate-200 transition hover:text-[#5EA1FF]"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
