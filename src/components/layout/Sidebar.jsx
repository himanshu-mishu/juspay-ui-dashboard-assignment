import { navSections } from "../../data/sidebarData";
import NavSection from "../ui/NavSection";
import Avatar from "../ui/Avatar";

export default function Sidebar() {
  return (
    <aside className="w-[210px] min-h-screen bg-white dark:bg-[#23272F] text-[#232e3e] dark:text-gray-200 border-r border-[#e5e7eb] dark:border-[#20242F] flex-shrink-0 hidden md:flex flex-col">
      <Avatar />
      {navSections.map(section => (
        <NavSection key={section.key} section={section} />
      ))}
    </aside>
  );
}
