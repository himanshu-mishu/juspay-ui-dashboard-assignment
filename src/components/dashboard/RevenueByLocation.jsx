import { revenueLocationData } from "@/data/revenueLocationData";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const cityColors = {
  "New York": "#4098d7",
  "San Francisco": "#89b8da",
  "Sydney": "#faad70",
  "Singapore": "#81c995"
};

export default function RevenueByLocationGraph() {
  return (
    <div className="bg-white border border-[#B4DAF9] rounded-2xl p-6 min-w-[270px]">
      <div className="font-inter font-semibold text-[14px] mb-2">Revenue by Location</div>
      <ResponsiveContainer width="100%" height={170}>
        <LineChart data={revenueLocationData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {Object.keys(cityColors).map(city => (
            <Line key={city} type="monotone" dataKey={city} stroke={cityColors[city]} name={city} strokeWidth={2} dot={false} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
