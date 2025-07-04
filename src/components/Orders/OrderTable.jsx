"use client";
import { useRouter } from "next/navigation";
// import OrderActionButton from "@/components/Orders/OrderActionButton";
const OrderTable = ({ ordersTable, showActions = false }) => {
  const router = useRouter();
  return (
    <div className="overflow-auto">
      <table className="min-w-full w-[35rem] bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            {/* {ordersTable.thead.map((th, index) => { */}
            {/* if (th == "Actions" && showActions == false) { */}
            {/* return; */}
            {/* } else { */}
            {/* return ( */}
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
            {/* ); */}
            {/* } */}
            {/* })} */}
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {ordersTable.tbody.map((tr, index) => (
            <tr key={index + tr.orderId} className="hover:bg-gray-50">
              {/* {Object.entries(tr).map(([key, value]) => { */}
              {/* if (key != "actions") { */}
              {/* return ( */}
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

              {/* ); */}
              {/* } */}
              {/* else if (key == "actions" && showActions) { */}
              {/* return ( */}
              {/* <td key={key}> */}
              {/* <OrderActionButton */}
              {/* orderId={tr.orderId} */}
              {/* fields={ordersTable.fields} */}
              {/* data={tr} */}
              {/* /> */}
              {/* </td> */}
              {/* ); */}
              {/* } */}
              {/* } */}
              {/* ) */}
              {/* } */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
