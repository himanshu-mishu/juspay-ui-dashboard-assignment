import { revenueLocationData } from "../../data/revenueLocationData";

export default function RevenueByLocation() {
  return (
    <div className="bg-white border border-[#B4DAF9] rounded-2xl p-6 min-w-[230px]">
      <div className="font-inter font-semibold text-[14px] mb-2">Revenue by Location</div>
      <table className="w-full text-sm">
        <tbody>
          {revenueLocationData.map((loc) => (
            <tr key={loc.city}>
              <td>{loc.city}</td>
              <td className="text-right font-bold">{loc.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
