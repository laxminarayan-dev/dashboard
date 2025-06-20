import Header from "./Header";
import CommonTable from "@/components/Financial/CommonTable";

const ManageSalary = () => {
  const salaryTable = {
    thead: [
      "Employee ID",
      "Name",
      "Date",
      "Salary Amount",
      "Payment Method",
      "Actions",
    ],
    tbody: [
      {
        id: "EMP001",
        name: "Rahul Sharma",
        date: "2025-06-01",
        amount: "₹50,000",
        method: "Bank Transfer",
        actions: <></>,
      },
      {
        id: "EMP002",
        name: "Anita Desai",
        date: "2025-06-01",
        amount: "₹45,000",
        method: "UPI",
        actions: <></>,
      },
      {
        id: "EMP003",
        name: "Vikram Patel",
        date: "2025-06-01",
        amount: "₹40,000",
        method: "Cash",
        actions: <></>,
      },
      {
        id: "EMP004",
        name: "Sunita Rao",
        date: "2025-06-01",
        amount: "₹48,000",
        method: "Bank Transfer",
        actions: <></>,
      },
    ],
  };

  return (
    <div>
      <Header />
      <CommonTable table={salaryTable} />
    </div>
  );
};
export default ManageSalary;
