import OrderHeader from "@/components/Orders/OrderHeader";
import OrderActionButton from "@/components/Orders/OrderActionButton";

const OrdersHistory = () => {
  const ordersTable = {
    thead: [
      "Order ID",
      "Customer Name",
      "Order Item",
      "Quantity",
      "Order Date & Time",
      "Amount",
      "Status",
      "Payment Method",
      "Delivered On & Time",
      "Actions",
    ],
    tbody: [
      {
        orderId: "101",
        customerName: "Alice Johnson",
        orderItem: "Chocolate Cake",
        quantity: 2,
        orderDateTime: "2025-06-10T14:30",
        amount: 1500,
        status: "Delivered",
        paymentMethod: "Credit Card",
        deliveredOnTime: "2025-06-12T10:00",
        actions: <></>,
      },
      {
        orderId: "102",
        customerName: "Bob Smith",
        orderItem: "Veg Pizza",
        quantity: 1,
        orderDateTime: "2025-06-12T09:15",
        amount: 2500,
        status: "Pending",
        paymentMethod: "Cash on Delivery",
        deliveredOnTime: "",
        actions: <></>,
      },
      {
        orderId: "103",
        customerName: "Charlie Lee",
        orderItem: "Pasta",
        quantity: 3,
        orderDateTime: "2025-06-15T16:45",
        amount: 1800,
        status: "Shipped",
        paymentMethod: "UPI",
        deliveredOnTime: "",
        actions: <></>,
      },
      {
        orderId: "104",
        customerName: "Diana Prince",
        orderItem: "Burger",
        quantity: 4,
        orderDateTime: "2025-06-18T11:00",
        amount: 3200,
        status: "Delivered",
        paymentMethod: "Net Banking",
        deliveredOnTime: "2025-06-20T13:20",
        actions: <></>,
      },
    ],
    fields: [
      {
        name: "customerName",
        label: "Customer Name",
        type: "text",
        required: true,
        placeholder: "Enter Customer Name",
      },
      {
        name: "orderItem",
        label: "Order Item",
        type: "text",
        required: true,
        placeholder: "Enter Item Name",
      },
      {
        name: "quantity",
        label: "Quantity",
        type: "number",
        required: true,
        min: "1",
        step: "1",
        placeholder: "Enter Quantity",
      },
      {
        name: "orderDateTime",
        label: "Order Date & Time",
        type: "datetime-local",
        required: true,
      },
      {
        name: "amount",
        label: "Amount",
        type: "number",
        required: true,
        placeholder: "0.00",
        step: "1",
        min: "0",
        prefix: "₹",
      },
      {
        name: "status",
        label: "Status",
        type: "select",
        required: true,
        options: ["Pending", "Shipped", "Delivered", "Cancelled"],
      },
      {
        name: "paymentMethod",
        label: "Payment Method",
        type: "select",
        required: true,
        options: ["Cash on Delivery", "Credit Card", "UPI", "Net Banking"],
      },
      {
        name: "deliveredOnTime",
        label: "Delivered On & Time",
        type: "datetime-local",
        required: false,
      },
    ],
  };

  return (
    <>
      <OrderHeader fields={ordersTable.fields} />

      <div className="overflow-auto">
        <table className="min-w-full w-[35rem] bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100 whitespace-nowrap">
            <tr>
              {ordersTable.thead.map((th, index) => (
                <th
                  key={th + index}
                  className="p-4 text-left text-[13px] font-semibold text-slate-900"
                >
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {ordersTable.tbody.map((tr, index) => (
              <tr key={index + tr.orderId} className="hover:bg-gray-50">
                {Object.entries(tr).map(([key, value]) => {
                  if (key != "actions") {
                    return (
                      <td
                        className="p-4 text-[15px] text-slate-600 font-medium"
                        key={key}
                      >
                        {value}
                      </td>
                    );
                  } else {
                    return (
                      <td key={key}>
                        <OrderActionButton
                          orderId={tr.orderId}
                          fields={ordersTable.fields}
                          data={tr}
                        />
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default OrdersHistory;
