"use client";
import { useRouter } from "next/navigation";
const TransactionTable = ({ data }) => {
  const router = useRouter();
  return (
    <div className="overflow-auto">
      <table className="min-w-[fit-content] bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              Transaction Id
            </th>
            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              User
            </th>
            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              Amount
            </th>
            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              Method
            </th>
            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              Status
            </th>
            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              More Details
            </th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {data.map((tr, index) => (
            <tr key={index + tr.transactionId} className="hover:bg-gray-50">
              <td className="p-4 text-[15px] text-slate-600 font-medium">
                {tr.transactionId}
              </td>
              <td className="p-4 text-[15px] text-slate-600 font-medium">
                {tr.userName}
              </td>
              <td className="p-4 text-[15px] text-slate-600 font-medium">
                {tr.amount}
              </td>
              <td className="p-4 text-[15px] text-slate-600 font-medium">
                {tr.method}
              </td>
              <td className="p-4 text-[15px] text-slate-600 font-medium">
                {tr.status}
              </td>
              <td className="p-4 text-[15px] text-blue-600  font-medium">
                <button
                  type="button"
                  className="underline cursor-pointer"
                  onClick={() => {
                    router.push(`/transactions/${tr.transactionId}`);
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

export default TransactionTable;
