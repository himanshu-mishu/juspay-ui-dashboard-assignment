import {
  MdDashboard, MdShoppingCart, MdFolder, MdImportContacts, MdPerson, MdSettings, MdBusinessCenter, MdArticle, MdShare,
} from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";

const icons = {
  default: MdDashboard,
  ecommerce: MdShoppingCart,
  projects: MdFolder,
  courses: MdImportContacts,
  profile: MdPerson,
  account: MdSettings,
  corporate: MdBusinessCenter,
  blog: MdArticle,
  social: MdShare,
};

export default function NavItem({ item, isOpen, onClick, sectionKey }) {
  const hasSubItems = item.expandable && Array.isArray(item.subItems);

  return (
    <li className="mb-1">
      <button
        onClick={hasSubItems ? onClick : undefined}
        className="flex items-center justify-between w-full px-4 py-2 rounded font-inter text-[14px] leading-[20px] font-normal bg-white text-[#1c1c1c]"
        style={{ letterSpacing: 0 }}
      >
        <span className="flex items-center gap-2">
          {item.icon && icons[item.icon] && (
            <span className="text-gray-700">
              {icons[item.icon]({ className: "w-5 h-5" })}
            </span>
          )}
          {item.label}
        </span>
        {hasSubItems && (
          <FiChevronDown
            className={`ml-2 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            style={{
              background: "#1C1C1C33",
              borderRadius: "2px",
              width: "9px",
              height: "16px",
            }}
          />
        )}
      </button>
      {hasSubItems && isOpen && (
        <ul id={`${item.key}-submenu`} className="pl-8 py-1 bg-white">
          {item.subItems.map(sub => (
            <li
              key={sub.key}
              className="flex items-center py-2 font-inter text-[14px] bg-white text-[#1c1c1c]"
              style={{ fontWeight: 400, letterSpacing: 0 }}
            >
              {sectionKey === "favorites" && (
                <span className="w-[6px] h-[6px] rounded-full bg-[#1C1C1C33] mr-2" />
              )}
              {sub.label}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
