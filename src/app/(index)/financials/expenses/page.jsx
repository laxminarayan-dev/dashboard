import Header from "./Header";
import CommonTable from "@/components/Financial/CommonTable";

const ManageExpenses = () => {
  const expensesTable = {
    thead: ["ID", "Date", "Source", "Amount", "Payment Method", "Actions"],
    tbody: [
      {
        id: "1",
        date: "2025-06-20",
        source: "Salary",
        amount: "₹50,000",
        method: "Bank Transfer",
        actions: <></>,
      },
      {
        id: "2",
        date: "2025-06-18",
        source: "Freelance",
        amount: "₹12,000",
        method: "UPI",
        actions: <></>,
      },
      {
        id: "3",
        date: "2025-06-15",
        source: "Gift",
        amount: "₹5,000",
        method: "Cash",
        actions: <></>,
      },
      {
        id: "4",
        date: "2025-06-10",
        source: "Dividend",
        amount: "₹2,500",
        method: "Bank Transfer",
        actions: <></>,
      },
    ],
  };
  return (
    <div>
      <Header />
      <CommonTable table={expensesTable} />
    </div>
  );
};

export default ManageExpenses;
