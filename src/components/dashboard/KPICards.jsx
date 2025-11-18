import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { kpiData } from "../../data/kpiData";

const cardBg = {
  Customers: "bg-[#E3F5FF] dark:bg-[#222f3a]",
  Orders: "bg-[#F7F9FB] dark:bg-[#191B21]",
  Revenue: "bg-[#F7F9FB] dark:bg-[#191B21]",
  Growth: "bg-[#E5ECF6] dark:bg-[#222f3a]",
};
const borderClass = "border border-[#e5e7eb] dark:border-[#171a24] rounded-2xl";
const cardOrder = [["Customers", "Orders"], ["Revenue", "Growth"]];

function KPICard({ title, value, change, positive }) {
  const bg = cardBg[title];
  return (
    <Card className={`${bg} ${borderClass} p-4 flex flex-col justify-between min-h-[90px]
      transition-all duration-150 ease-in-out cursor-pointer
      hover:shadow-xl hover:border-blue-200 hover:scale-[1.03]`}>
      <span className="font-inter font-semibold text-[14px] mb-2 dark:text-gray-100">{title}</span>
      <div className="flex items-end gap-2 mb-2">
        <span className="font-inter font-semibold text-[24px] dark:text-white">
          {value}
        </span>
        <span className={`flex items-center font-inter font-normal text-[12px] ${positive ? "text-green-600" : "text-red-600"}`}>
          {positive ? <ArrowUpRight className="w-4 h-4 mr-0.5" /> : <ArrowDownRight className="w-4 h-4 mr-0.5" />}
          {change}
        </span>
      </div>
    </Card>
  );
}

export default function KPICards() {
  return (
    <div className="grid grid-cols-2 gap-7 h-full">
      {cardOrder.flat().map((title) => {
        const kpi = kpiData.find((k) => k.title === title);
        return <KPICard key={kpi.title} {...kpi} />;
      })}
    </div>
  );
}
