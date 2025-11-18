import { useState } from "react";
import NavItem from "./NavItem";

export default function NavSection({ section }) {
  const [openItemKey, setOpenItemKey] = useState(null);
  const [activeItemKey, setActiveItemKey] = useState(null);

  const handleNavItemClick = (key, expandable) => {
    if (expandable) {
      setOpenItemKey(prev => (prev === key ? null : key));
    } else {
      setOpenItemKey(null);
    }
    setActiveItemKey(key);
  };

  return (
    <section className="mb-1 pb-3 pl-3">
      {section.key === "favorites" ? (
        <h2 className="font-inter font-normal text-[14px] leading-5 py-2 flex items-center text-[#232e3e] dark:text-gray-200 opacity-60">
          Favorites
          <span className="pl-3 opacity-60 font-normal text-[13px]">Recently</span>
        </h2>
      ) : (
        <h2 className="font-inter font-normal text-[14px] leading-5 py-2 text-[#232e3e] dark:text-gray-200 opacity-60">
          {section.title}
        </h2>
      )}

      <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
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
