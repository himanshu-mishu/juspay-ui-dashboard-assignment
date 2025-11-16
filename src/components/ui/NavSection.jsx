import { useState } from "react";
import NavItem from "./NavItem";

export default function NavSection({ section }) {
  const [openItemKey, setOpenItemKey] = useState(null);

  const handleNavItemClick = key => {
    setOpenItemKey(prev => (prev === key ? null : key));
  };

  return (
    <section className="mb-1">
      <h2
        className="font-inter font-normal text-[14px] leading-5 py-2 text-center"
        style={{
          background: "rgba(28, 28, 28, 0.40)",
          color: "#1c1c1c",
          letterSpacing: 0,
        }}
      >
        {section.title}
      </h2>
      <ul>
        {section.items.map(item => (
          <NavItem
            key={item.key}
            item={item}
            isOpen={openItemKey === item.key}
            onClick={() => handleNavItemClick(item.key)}
            sectionKey={section.key}
          />
        ))}
      </ul>
    </section>
  );
}
