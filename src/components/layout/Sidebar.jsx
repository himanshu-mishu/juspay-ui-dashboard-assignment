import { navSections } from "../../data/sidebarData";
import NavSection from "../ui/NavSection";

export default function Sidebar() {
  return (
    <aside className="w-[212px] min-h-screen border-r border-gray-200 bg-white overflow-y-auto font-inter">
      {navSections.map(section => (
        <NavSection key={section.key} section={section} />
      ))}
    </aside>
  );
}
