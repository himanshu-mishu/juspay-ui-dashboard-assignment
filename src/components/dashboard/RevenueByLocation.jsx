import { revenueLocationData } from "@/data/revenueLocationData";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useTheme } from "@/contexts/ThemeContext";

const cityColors = {
  "New York": "#4098d7",
  "San Francisco": "#89b8da",
  "Sydney": "#faad70",
  "Singapore": "#81c995"
};

export default function RevenueByLocationGraph() {
  const { theme } = useTheme();
  return (
    <div className="bg-white dark:bg-[#23272F] border border-[#e5e7eb] dark:border-[#23272F] rounded-2xl p-6 min-w-[270px]">
      <div className="font-inter font-semibold text-[14px] mb-2 dark:text-white">Revenue by Location</div>
      <ResponsiveContainer width="100%" height={170}>
        <LineChart data={revenueLocationData}>
          <XAxis dataKey="month" stroke={theme === "dark" ? "#e5e7eb" : "#232e3e"} />
          <YAxis stroke={theme === "dark" ? "#e5e7eb" : "#232e3e"} />
          <Tooltip wrapperStyle={{ background: theme === "dark" ? "#23272F" : "#fff", color: theme === "dark" ? "#fff" : "#232e3e" }} />
          <Legend />
          {Object.keys(cityColors).map(city => (
            <Line key={city} type="monotone" dataKey={city} stroke={cityColors[city]} name={city} strokeWidth={2} dot={false} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
