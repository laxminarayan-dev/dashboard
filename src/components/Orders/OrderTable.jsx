"use client";
import { useRouter } from "next/navigation";
const OrderTable = ({ data }) => {
  const router = useRouter();
  return (
    <div className="overflow-auto">
      <table className="min-w-[fit-content]  bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              Order Id
            </th>
            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              Ordered By
            </th>
            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              Food Item
            </th>
            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              Quantity
            </th>
            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              Total
            </th>
            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              More Details
            </th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {data.map((tr, index) => (
            <tr key={index + tr.orderId} className="hover:bg-gray-50">
              <td className="p-4 text-[15px] text-slate-600 font-medium">
                {tr.orderId}
              </td>
              <td className="p-4 text-[15px] text-slate-600 font-medium">
                {tr.customerName}
              </td>
              <td className="p-4 text-[15px] text-slate-600 font-medium">
                {tr.orderItem}
              </td>
              <td className="p-4 text-[15px] text-slate-600 font-medium">
                {tr.quantity}
              </td>
              <td className="p-4 text-[15px] text-slate-600 font-medium">
                {tr.amount}
              </td>
              <td className="p-4 text-[15px] text-blue-600  font-medium">
                <button
                  type="button"
                  className="underline cursor-pointer"
                  onClick={() => {
                    router.push(`/orders/${tr.orderId}`);
                  }}
                >
                  Other Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
