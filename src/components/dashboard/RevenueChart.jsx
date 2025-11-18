import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { revenueData } from "../../data/revenueData";
import { useTheme } from "@/contexts/ThemeContext";

export default function RevenueChart() {
  const { theme } = useTheme();
  return (
    <div className="bg-white dark:bg-[#23272F] rounded-2xl p-6 border border-[#e5e7eb] dark:border-[#23272F] min-h-[170px]">
      <div className="font-inter font-semibold text-[14px] mb-4 dark:text-white">Revenue</div>
      <ResponsiveContainer width="100%" height={170}>
        <LineChart data={revenueData}>
          <XAxis dataKey="month" stroke={theme === "dark" ? "#e5e7eb" : "#232e3e"} />
          <YAxis stroke={theme === "dark" ? "#e5e7eb" : "#232e3e"} />
          <Tooltip wrapperStyle={{ background: theme === "dark" ? "#23272F" : "#fff", color: theme === "dark" ? "#fff" : "#232e3e" }} />
          <Legend />
          <Line type="monotone" dataKey="current" stroke="#0A2540" name="Current Week" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="previous" stroke="#ACB7C7" name="Previous Week" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
