import CommonHeader from "@/components/Financial/CommonHeader";
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
        amount: 50000,
        paymentMethod: "Bank Transfer",
        actions: <></>,
      },
      {
        id: "EMP002",
        name: "Anita Desai",
        date: "2025-06-01",
        amount: 45000,
        paymentMethod: "UPI",
        actions: <></>,
      },
      {
        id: "EMP003",
        name: "Vikram Patel",
        date: "2025-06-01",
        amount: 40000,
        paymentMethod: "Cash",
        actions: <></>,
      },
      {
        id: "EMP004",
        name: "Sunita Rao",
        date: "2025-06-01",
        amount: 48000,
        paymentMethod: "Bank Transfer",
        actions: <></>,
      },
    ],
    fields: [
      {
        name: "date",
        label: "Payment Date",
        type: "date",
        required: true,
      },
      {
        name: "name",
        label: "Employee Name",
        type: "text",
        required: true,
        placeholder: "e.g., Rahul Sharma",
      },
      {
        name: "id",
        label: "Employee ID",
        type: "text",
        required: true,
        placeholder: "e.g., EMP001",
      },
      {
        name: "amount",
        label: "Salary Amount",
        type: "number",
        required: true,
        placeholder: "0.00",
        step: "0.01",
        min: "0",
        prefix: "₹",
      },
      {
        name: "paymentMethod",
        label: "Payment Method",
        type: "select",
        required: false,
        options: [
          "cash",
          "credit card",
          "debit card",
          "bank transfer",
          "check",
          "UPI",
        ],
        default: "bank transfer",
      },
    ],
  };

  return (
    <div>
      <CommonHeader forWho={"salary"} fields={salaryTable.fields} />
      <CommonTable table={salaryTable} />
    </div>
  );
};
export default ManageSalary;
