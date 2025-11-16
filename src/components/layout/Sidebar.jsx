import Avatar from "../ui/Avatar";
import NavSection from "../ui/NavSection";
import { navSections } from "../../data/sidebarData";

export default function Sidebar() {
  return (
    <nav aria-label="Main sidebar navigation" className="w-[212px] min-h-screen border-r border-gray-200 pt-5 pr-4 pb-5 pl-4 flex flex-col gap-4 bg-white">
      <Avatar name="ByeWind" imgSrc="https://randomuser.me/api/portraits/men/32.jpg" altText="ByeWind profile avatar" badge="A" />
      {navSections.map(section => (
        <NavSection key={section.title} section={section} />
      ))}
      <div className="mt-auto flex justify-end">
        <button className="bg-blue-600 p-2 rounded-full shadow-lg text-white" aria-label="Open support chat">▶</button>
      </div>
    </nav>
  );
}
