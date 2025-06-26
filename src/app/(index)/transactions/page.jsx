import TransactionHeader from "@/components/Transactions/TransactionHeader";
import TransactionTable from "@/components/Transactions/TransactionTable";

const TransactionsHistory = () => {
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
      <TransactionHeader fields={transactionsTable.fields} />
      <TransactionTable
        transactionTable={transactionsTable}
        showActions={true}
      />
    </>
  );
};
export default TransactionsHistory;
