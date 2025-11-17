import { notifications } from "../../data/notificationsData";

export default function NotificationList() {
  return (
    <div className="mb-6">
      <h3 className="font-inter font-semibold text-[14px] leading-5 tracking-normal mb-2">
        Notifications
      </h3>
      <ul>
        {notifications.map(note => {
          const Icon = note.icon;
          return (
            <li
              key={note.id}
              className="mb-2 p-1 rounded font-inter font-normal text-[14px] leading-5 tracking-normal"
            >
              <div className="flex items-start gap-1">
                {/* ICON */}
                <span
                  className="flex items-center justify-center"
                  style={{
                    width: 24,
                    height: 24,
                    padding: 4,
                    background: "#E3F5FF",
                    borderRadius: 8,
                  }}
                >
                  <Icon
                    style={{
                      width: 16,
                      height: 16,
                      opacity: 1,
                      borderRadius: "2px",
                    }}
                    className="text-blue-600 "
                  />
                </span>
                {/* MESSAGE & TIMESTAMP */}
                <span className="flex flex-col pl-1">
                  <span>{note.message}</span>
                  <span
                    className="mt-1"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "12px",
                      lineHeight: "18px",
                      letterSpacing: 0,
                      color: "#a4a4a4", 
                      borderRadius: "4px",
                      alignSelf: "flex-start",
                    }}
                  >
                    {note.timestamp}
                  </span>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
