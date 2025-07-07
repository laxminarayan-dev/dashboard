import OrderHeader from "@/components/Orders/OrderHeader";
import OrderTable from "@/components/Orders/OrderTable";

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
      "Delivered Date & Time",
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
        name: "deliveredDateTime",
        label: "Delivered Date & Time",
        type: "datetime-local",
        required: false,
      },
    ],
  };

  return (
    <>
      <OrderHeader fields={ordersTable.fields} />
      <OrderTable ordersTable={ordersTable} showActions={true} />
    </>
  );
};
export default OrdersHistory;
