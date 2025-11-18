import { notifications } from "../../data/notificationsData";

export default function NotificationList() {
  return (
    <div className="mb-6">
      <h3 className="font-inter font-semibold text-[14px] mb-2 text-[#232e3e] dark:text-gray-200">Notifications</h3>
      <ul>
        {notifications.map(note => (
          <li key={note.id} className="mb-2 p-1 rounded font-inter text-[14px] dark:text-gray-200">
            <div className="flex items-start gap-1">
              {/* ICON */}
              <span
                className="flex items-center justify-center"
                style={{
                  width: 24,
                  height: 24,
                  background: "#E3F5FF",
                  borderRadius: 8,
                }}
              >
                <note.icon
                  style={{
                    width: 16,
                    height: 16,
                  }}
                  className="text-blue-600"
                />
              </span>
              {/* MESSAGE & TIMESTAMP */}
              <span className="flex flex-col pl-1 dark:text-gray-200">
                <span>{note.message}</span>
                <span className="mt-1 text-xs text-gray-400 dark:text-gray-400">{note.timestamp}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
