import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Line, Legend } from "recharts";
import { projectionsData } from "../../data/projectionsData";

export default function ProjectionsGraph() {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 min-h-[220px] flex flex-col">
      <span className="font-inter text-[14px] font-semibold mb-4">Projections vs Actuals</span>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={projectionsData}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="actual" fill="#A5D8F3" radius={[6,6,0,0]} name="actual" />
          <Line type="monotone" dataKey="projected" stroke="#0A2540" strokeWidth={2} dot={false} name="projected" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
