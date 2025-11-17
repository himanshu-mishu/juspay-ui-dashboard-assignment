import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { revenueData } from "../../data/revenueData";

export default function RevenueChart() {
  return (
    <div className="bg-white border border-[#B4DAF9] rounded-2xl p-6">
      <div className="font-inter font-semibold text-[14px] mb-4">Revenue</div>
      <ResponsiveContainer width="100%" height={170}>
        <LineChart data={revenueData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="current" stroke="#0A2540" name="Current Week" strokeWidth={2} />
          <Line type="monotone" dataKey="previous" stroke="#ACB7C7" name="Previous Week" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
