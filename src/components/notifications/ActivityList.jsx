import { activities } from "../../data/notificationsData";

export default function ActivityList() {
  const avatarSize = 24; // px
  const lineGap = 8; // px, the distance between the avatar and the vertical line

  return (
    <div className="mb-6">
      <h3 className="font-inter font-semibold text-[14px] leading-5 tracking-normal mb-2">
        Activities
      </h3>
      <ul>
        {activities.map((act, idx) => {
          const isLast = idx === activities.length - 1;
          return (
            <li
              key={act.id}
              className="mb-2 p-1 rounded font-inter font-normal text-[14px] leading-5 tracking-normal flex items-start gap-2 relative"
              style={{ minHeight: `${avatarSize + lineGap * 2}px` }}
            >
              {/* Timeline line, with explicit gap from avatar */}
              <div className="relative flex flex-col items-center w-6" style={{ minHeight: avatarSize }}>
                {/* Line below avatar, starting with a gap */}
                {!isLast && (
                  <span
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{
                       top: `34px`, // avatar height + gap
        height: `16px`, // line length
        width: "2px",
        background: "#CED6E0",
        borderRadius: "1px",
        zIndex: 0,
                    }}
                  />
                )}

                {/* Avatar */}
                <img
                  src={act.profile}
                  alt={act.name}
                  className="w-6 h-6 rounded-full z-10"
                  style={{
                    position: "relative",
                  }}
                />
              </div>
              {/* Text and timestamp */}
              <span className="flex flex-col">
                <span>{act.description}</span>
                <span
                  className="mt-1"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontStyle: "lightnormal",
                    fontSize: "12px",
                    lineHeight: "18px",
                    letterSpacing: 0,
                    color: "#a4a4a4",
                    borderRadius: "4px",
                    alignSelf: "flex-start",
                  }}
                >
                  {act.timestamp}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
