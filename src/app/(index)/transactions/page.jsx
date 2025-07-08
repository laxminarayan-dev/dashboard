"use client";
import TransactionHeader from "@/components/Transactions/TransactionHeader";
import TransactionTable from "@/components/Transactions/TransactionTable";
import { useState, useEffect } from "react";
const TransactionsHistory = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await fetch(`http://localhost:8000/api/transactions`, {
      cache: "no-store",
    });
    const result = await res.json();
    console.log(result);
    setData(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
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
      <TransactionHeader
        fields={transactionsTable.fields}
        onAddData={fetchData}
      />
      <TransactionTable data={data} />
    </>
  );
};
export default TransactionsHistory;
