import {
  MdDashboard, MdShoppingCart, MdFolder, MdImportContacts, MdPerson, MdSettings, MdBusinessCenter, MdArticle, MdShare,
} from "react-icons/md";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

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

export default function NavItem({ item, isOpen, onClick, sectionKey, active }) {
  if (!item) return null;
  const hasSubItems = !!item.expandable && Array.isArray(item.subItems);
  const isDashboard = sectionKey === "dashboard";
  const isPages = sectionKey === "pages";
  const paddingClass = isDashboard && active ? "pl-5" : "";

  return (
    <li className="mb-1 relative">
      <button
        onClick= {onClick} 
        className={`
          flex items-center w-full px-4 py-2 rounded font-inter text-[14px] leading-5 font-normal
          ${isDashboard && active ? "bg-[#F5F5F5] relative" : "bg-white"}
          text-[#1c1c1c] ${paddingClass}
        `}
        style={{ letterSpacing: 0 }}
      >
        {isDashboard && active && (
          <span
            className="absolute"
            style={{
              left: '8px',
              top: '10px',
              width: '4px',
              height: '16px',
              background: '#1C1C1C',
              opacity: 1,
              borderRadius: '16px'
            }}
          />
        )}
        <span className="flex items-center gap-2 relative z-10">
          {hasSubItems && (
            isPages
              ? ((active && isOpen)
                ? <FiChevronDown className="text-gray-400 text-base" style={{ opacity: 0.2 }} />
                : <FiChevronRight className="text-gray-400 text-base" style={{ opacity: 0.2 }} />)
              : (!active && <FiChevronRight className="text-gray-400 text-base" style={{ opacity: 0.2 }} />)
          )}
          {item.icon && icons[item.icon] && (
            <span className="text-[#232e3e]">{icons[item.icon]({ className: "w-5 h-5" })}</span>
          )}
          {sectionKey === "favorites" && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C33]" />
          )}
          {item.label}
        </span>
      </button>
      {hasSubItems && isOpen && (
        <ul id={`${item.key}-submenu`} className="pl-8 py-1 bg-white">
          {item.subItems.map(sub => (
            <li
              key={sub.key}
              className="flex items-center py-2 font-inter text-[14px] bg-white text-[#1c1c1c]"
              style={{ fontWeight: 400, letterSpacing: 0 }}
            >
              {sub.label}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
