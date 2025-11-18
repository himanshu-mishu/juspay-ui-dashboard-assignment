import { activities } from "../../data/notificationsData";

export default function ActivityList() {
  return (
    <div className="mb-6">
      <h3 className="font-inter font-semibold text-[14px] mb-2 text-[#232e3e] dark:text-gray-200">
        Activities
      </h3>
      <ul>
        {activities.map((act, idx) => (
          <li
            key={act.id}
            className="mb-2 p-1 rounded font-inter text-[14px] flex items-start gap-2 relative text-[#232e3e] dark:text-gray-200"
            style={{ minHeight: "40px" }}
          >
            {/* Timeline line logic omitted for brevity */}
            <img src={act.profile} alt={act.name} className="w-6 h-6 rounded-full z-10" />
            <span className="flex flex-col">
              <span>{act.description}</span>
              <span className="mt-1 text-xs text-gray-400 dark:text-gray-400">{act.timestamp}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
