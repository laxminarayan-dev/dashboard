"use client";
import OrderHeader from "@/components/Orders/OrderHeader";
import OrderTable from "@/components/Orders/OrderTable";
import { useEffect, useState } from "react";

const OrdersHistory = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await fetch(`http://localhost:8000/api/orders`, {
      cache: "no-store",
    });
    setData(await res.json());
  };
  useEffect(() => {
    fetchData();
  }, []);
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
      {
        name: "deliveredAddress",
        label: "Delivered Address",
        type: "textarea",
        required: true,
      },
    ],
  };

  return (
    <>
      <OrderHeader fields={ordersTable.fields} onAddData={fetchData} />
      <OrderTable ordersTable={ordersTable} data={data} showActions={true} />
    </>
  );
};
export default OrdersHistory;
