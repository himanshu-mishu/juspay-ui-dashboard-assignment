import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { kpiData } from "../../data/kpiData";

const cardBg = {
  Customers: "bg-[#E3F5FF]",
  Orders: "bg-[#F7F9FB]",
  Revenue: "bg-[#F7F9FB]",
  Growth: "bg-[#E5ECF6]",
};

const borderClass = "border border-[#e5e7eb] rounded-2xl";

const cardOrder = [
  ["Customers", "Orders"],
  ["Revenue", "Growth"]
];

function KPICard({ title, value, change, positive }) {
  const bg = cardBg[title];
  return (
    <Card className={`${bg} ${borderClass} p-6 flex flex-col justify-between min-h-[120px]`}>
      <span className="font-inter font-semibold text-[14px] leading-5 mb-2">{title}</span>
      <div className="flex items-end gap-2 mb-2">
        <span className="font-inter font-semibold text-[24px] leading-9">
          {value}
        </span>
        <span className={`flex items-center font-inter font-normal text-[12px] leading-[18px] ${positive ? "text-green-600" : "text-red-600"}`}>
          {positive ? (
            <ArrowUpRight className="w-4 h-4 mr-0.5" />
          ) : (
            <ArrowDownRight className="w-4 h-4 mr-0.5" />
          )}
          {change}
        </span>
      </div>
    </Card>
  );
}

export default function KPICards() {
  return (
    <div className="grid grid-cols-2 gap-7 max-w-4xl mb-10">
      {cardOrder.flat().map((title) => {
        const kpi = kpiData.find((k) => k.title === title);
        return <KPICard key={kpi.title} {...kpi} />;
      })}
    </div>
  );
}
