import { useState } from "react";

export default function NavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const hasSubItems = item.expandable && Array.isArray(item.subItems);

  const toggleSubMenu = () => {
    if (hasSubItems) setIsOpen(old => !old);
  };

  return (
    <li>
      <button
        onClick={toggleSubMenu}
        aria-expanded={hasSubItems ? isOpen : undefined}
        aria-controls={hasSubItems ? `${item.key}-submenu` : undefined}
        className="flex items-center justify-between px-4 py-2 w-full text-left hover:bg-gray-100 rounded focus:outline-none"
      >
        <span>{item.label}</span>
        {hasSubItems && (
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>

      {hasSubItems && isOpen && (
        <ul id={`${item.key}-submenu`} className="pl-6 mt-2 space-y-1">
          {item.subItems.map(sub => (
            <li key={sub.key}>
              <a href={sub.href} className="block px-4 py-2 rounded hover:bg-gray-200">
                {sub.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
