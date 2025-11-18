import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Line, Legend } from "recharts";
import { projectionsData } from "../../data/projectionsData";
import { useTheme } from "@/contexts/ThemeContext";

export default function ProjectionsGraph() {
  const { theme } = useTheme();
  return (
    <div className="bg-white dark:bg-[#23272F] rounded-2xl p-6 border border-[#e5e7eb] dark:border-[#23272F] min-h-[300px]">
      <span className="font-inter text-[14px] font-semibold mb-4 dark:text-white">Projections vs Actuals</span>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={projectionsData}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} stroke={theme === "dark" ? "#e5e7eb" : "#232e3e"} />
          <YAxis axisLine={false} tickLine={false} stroke={theme === "dark" ? "#e5e7eb" : "#232e3e"} />
          <Tooltip wrapperStyle={{ background: theme === "dark" ? "#23272F" : "#fff", color: theme === "dark" ? "#fff" : "#232e3e" }} />
          <Legend />
          <Bar dataKey="actual" fill="#A5D8F3" radius={[6,6,0,0]} name="actual" />
          <Line type="monotone" dataKey="projected" stroke="#0A2540" strokeWidth={2} dot={false} name="projected" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
