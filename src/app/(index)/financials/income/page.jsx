import CommonHeader from "@/components/Financial/CommonHeader";
import CommonTable from "@/components/Financial/CommonTable";

const ManageIncome = () => {
  const incomeTable = {
    thead: [
      "Order ID",
      "Date",
      "Order Source",
      "Total Amount",
      "Payment Method",
      "Actions",
    ],
    tbody: [
      {
        id: "1001",
        date: "2025-06-20",
        source: "Online",
        amount: "₹1,200",
        method: "UPI",
        actions: <></>,
      },
      {
        id: "1002",
        date: "2025-06-20",
        source: "Walk-in",
        amount: "₹850",
        method: "Credit Card",
        actions: <></>,
      },
      {
        id: "1003",
        date: "2025-06-19",
        source: "Walk-in",
        amount: "₹600",
        method: "Cash",
        actions: <></>,
      },
      {
        id: "1004",
        date: "2025-06-18",
        source: "Online",
        amount: "₹450",
        method: "UPI",
        actions: <></>,
      },
    ],
  };

  return (
    <div>
      <CommonHeader forWho={"income"} />
      <CommonTable table={incomeTable} />
    </div>
  );
};

export default ManageIncome;
