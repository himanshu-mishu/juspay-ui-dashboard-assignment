import { useState } from "react";
import NavItem from "./NavItem";

export default function NavSection({ section }) {
  const [openItemKey, setOpenItemKey] = useState(null);
  const [activeItemKey, setActiveItemKey] = useState(null);

  const handleNavItemClick = (key, expandable) => {
    if (expandable) {
      setOpenItemKey(prev => (prev === key ? null : key));
    } else {
      setOpenItemKey(null); // Close all submenus if a non-expandable item is clicked
    }
    setActiveItemKey(key);
  };

  return (
    <section
      className="mb-1"
      style={{
        paddingBottom: "12px",
        paddingLeft: "12px"
      }}
    >
      {/* Show Favorites + Recently for favorites only */}
      {section.key === "favorites" ? (
        <h2
          className="font-inter font-normal text-[14px] leading-5 py-2 text-left ml-2 pl-2 flex items-center"
          style={{
            color: "#1c1c1c",
            letterSpacing: 0,
            background: "transparent",
            opacity: 0.4,
          }}
        >
          Favorites
          <span
            className="pl-3"
            style={{
              opacity: 0.18,
              fontWeight: 400,
              fontSize: "13px",
              letterSpacing: "0.01em"
            }}
          >
            Recently
          </span>
        </h2>
      ) : (
        <h2
          className="font-inter font-normal text-[14px] leading-5 py-2 text-left ml-2 pl-2"
          style={{
            color: "#1c1c1c",
            letterSpacing: 0,
            background: "transparent",
            opacity: 0.4
          }}
        >
          {section.title}
        </h2>
      )}

      <ul style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
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
