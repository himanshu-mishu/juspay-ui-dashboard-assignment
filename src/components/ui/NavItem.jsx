import NavItem from "./NavItem";

export default function NavSection({ section }) {
  return (
    <section aria-label={section.title} className="mb-4">
      <div className="text-gray-400 uppercase text-xs mb-2">{section.title}</div>
      <ul>
        {section.items.map(item => (
          <NavItem key={item.label} item={item} />
        ))}
      </ul>
    </section>
  );
}
