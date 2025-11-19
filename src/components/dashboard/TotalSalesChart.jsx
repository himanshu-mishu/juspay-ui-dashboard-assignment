import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { totalSalesData } from "../../data/totalSalesData";

export default function TotalSalesChart() {
  return (
    <div className="bg-white dark:bg-[#23272F] rounded-2xl p-6 border border-[#e5e7eb] dark:border-[#23272F] h-full flex flex-col justify-between min-h-80 w-full">
      <div className="font-inter font-semibold text-[14px] mb-2 dark:text-white">
        Total Sales
      </div>
      <PieChart width={200} height={200}>
        <Pie
          data={totalSalesData}
          dataKey="value"
          nameKey="type"
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={80}
          labelLine={false}
        >
          {totalSalesData.map((entry, idx) => (
            <Cell key={entry.type} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(v) => `$${v.toFixed(2)}`} />
      </PieChart>
      <ul className="mt-4 text-sm dark:text-gray-200">
        {totalSalesData.map((s) => (
          <li className="flex justify-between mb-1" key={s.type}>
            <span>
              <span
                className="inline-block mr-2 rounded-full align-middle"
                style={{ width: 10, height: 10, backgroundColor: s.color }}
              ></span>
              {s.type}
            </span>
            <span className="font-semibold">${s.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
