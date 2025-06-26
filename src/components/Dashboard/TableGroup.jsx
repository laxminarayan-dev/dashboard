"use client";
import Link from "next/link";
import OrderTable from "@/components/Orders/OrderTable";
import TransactionTable from "@/components/Transactions/TransactionTable";
const TableGroup = () => {
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
  const transactionsTable = {
    thead: [
      "Transaction ID",
      "Payer/Recipient  Name",
      "Transaction Date & Time",
      "Amount",
      "Type",
      "Method",
      "Status",
      "Reference",
      "Actions",
    ],
    tbody: [
      {
        transactionId: "T001",
        userName: "Alice Johnson",
        transactionDateTime: "2025-06-10T14:45",
        amount: 1500,
        type: "Credit",
        method: "Credit Card",
        status: "Successful",
        reference: "INV-101",
        actions: <></>,
      },
      {
        transactionId: "T002",
        userName: "Bob Smith",
        transactionDateTime: "2025-06-12T10:30",
        amount: 2500,
        type: "Debit",
        method: "Cash",
        status: "Pending",
        reference: "ORD-102",
        actions: <></>,
      },
      {
        transactionId: "T003",
        userName: "Charlie Lee",
        transactionDateTime: "2025-06-15T17:00",
        amount: 1800,
        type: "Credit",
        method: "UPI",
        status: "Failed",
        reference: "ORD-103",
        actions: <></>,
      },
      {
        transactionId: "T004",
        userName: "Diana Prince",
        transactionDateTime: "2025-06-18T12:15",
        amount: 3200,
        type: "Credit",
        method: "Net Banking",
        status: "Successful",
        reference: "INV-104",
        actions: <></>,
      },
    ],
    fields: [
      {
        name: "userName",
        label: "Payer / Recipient  Name",
        type: "text",
        required: true,
        placeholder: "Enter Payer / Recipient Name",
      },
      {
        name: "transactionDateTime",
        label: "Transaction Date & Time",
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
        name: "type",
        label: "Type",
        type: "select",
        required: true,
        options: ["Credit", "Debit"],
      },
      {
        name: "method",
        label: "Payment Method",
        type: "select",
        required: true,
        options: ["Cash", "Credit Card", "UPI", "Net Banking"],
      },
      {
        name: "status",
        label: "Status",
        type: "select",
        required: true,
        options: ["Successful", "Pending", "Failed"],
      },
      {
        name: "reference",
        label: "Reference",
        type: "text",
        required: false,
        placeholder: "Enter Reference (optional)",
      },
    ],
  };
  return (
    <>
      <div>
        <div className="grid grid-cols-1  gap-2 px-5 my-8">
          <div className="w-full flex items-center justify-between ">
            <h1 className="text-lg font-semibold ">Recent Orders</h1>
            <Link
              className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer font-medium"
              href={"/orders"}
            >
              View All
            </Link>
          </div>
          <OrderTable ordersTable={ordersTable} />
        </div>
        <div className="grid grid-cols-1  gap-2 px-5 my-8">
          <div className="w-full flex items-center justify-between ">
            <h1 className="text-lg font-semibold ">Recent Transactions</h1>
            <Link
              className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer font-medium"
              href={"/transactions"}
            >
              View All
            </Link>
          </div>
          <TransactionTable transactionTable={transactionsTable} />
        </div>
      </div>
    </>
  );
};
export default TableGroup;
