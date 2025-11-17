import { useState } from "react";
import NavItem from "./NavItem";

export default function NavSection({ section }) {
  const [openItemKey, setOpenItemKey] = useState(null);
  const [activeItemKey, setActiveItemKey] = useState(null);

  const handleNavItemClick = (key, expandable) => {
    if (expandable) {
      setOpenItemKey(prev => (prev === key ? null : key));
    }
    setActiveItemKey(key);
    // (Optional): Do routing here for non-expandable items, e.g. with react-router
  };

  return (
    <section className="mb-1">
      <h2
        className="font-inter font-normal text-[14px] leading-5 py-2 text-left text-[#1c1c1c] ml-2 pl-2"
        style={{
          color: "#1c1c1c",
          letterSpacing: 0,
          background: "transparent",
          opacity: 0.4
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
            onClick={() => handleNavItemClick(item.key, item.expandable)}
            sectionKey={section.key}
            active={activeItemKey === item.key}
          />
        ))}
      </ul>
    </section>
  );
}
