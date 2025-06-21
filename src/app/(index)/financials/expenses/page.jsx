import CommonHeader from "@/components/Financial/CommonHeader";
import CommonTable from "@/components/Financial/CommonTable";

const ManageExpenses = () => {
  const expensesTable = {
    thead: ["ID", "Date", "Source", "Amount", "Payment Method", "Actions"],
    tbody: [
      {
        id: "1",
        date: "2025-06-20",
        source: "Salary",
        amount: 50000, // Clean numeric value
        method: "Bank Transfer",
        actions: <></>,
      },
      {
        id: "2",
        date: "2025-06-18",
        source: "Freelance",
        amount: 12000,
        method: "UPI",
        actions: <></>,
      },
      {
        id: "3",
        date: "2025-06-15",
        source: "Gift",
        amount: 5000,
        method: "Cash",
        actions: <></>,
      },
      {
        id: "4",
        date: "2025-06-10",
        source: "Dividend",
        amount: 2500,
        method: "Bank Transfer",
        actions: <></>,
      },
    ],
    fields: [
      { name: "date", label: "Date", type: "date", required: true },
      {
        name: "source",
        label: "Source",
        type: "text",
        required: true,
        placeholder: "e.g., Office Supplies, Business Lunch",
      },
      {
        name: "amount",
        label: "Amount",
        type: "number",
        required: true,
        placeholder: "0.00",
        step: "0.01",
        min: "0",
        prefix: "₹", // consider changing to "₹" if you want consistency with currency symbol
      },
      {
        name: "method",
        label: "Payment Method",
        type: "select",
        required: false,
        options: [
          "cash",
          "credit card",
          "debit card",
          "bank transfer",
          "check",
          "paypal",
        ],
        default: "cash",
      },
    ],
  };
  return (
    <div>
      <CommonHeader forWho={"expenses"} fields={expensesTable.fields} />
      <CommonTable table={expensesTable} />
    </div>
  );
};

export default ManageExpenses;
