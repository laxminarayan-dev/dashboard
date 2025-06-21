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
        amount: 1200,
        paymentMethod: "UPI",
        actions: <></>,
      },
      {
        id: "1002",
        date: "2025-06-20",
        source: "Walk-in",
        amount: 850,
        paymentMethod: "Credit Card",
        actions: <></>,
      },
      {
        id: "1003",
        date: "2025-06-19",
        source: "Walk-in",
        amount: 600,
        paymentMethod: "Cash",
        actions: <></>,
      },
      {
        id: "1004",
        date: "2025-06-18",
        source: "Online",
        amount: 450,
        paymentMethod: "UPI",
        actions: <></>,
      },
    ],
    fields: [
      {
        name: "date",
        label: "Income Date",
        type: "date",
        required: true,
      },
      {
        name: "source",
        label: "Income Source",
        type: "text",
        required: true,
        placeholder: "e.g., Swiggy, Zomato, Walk-in Customer",
      },
      {
        name: "amount",
        label: "Income Amount",
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
          "upi",
          "paypal",
        ],
        default: "cash",
      },
      {
        name: "id",
        label: "ID",
        type: "text",
        required: false,
        placeholder: "Optional ID",
      },
    ],
  };

  return (
    <div>
      <CommonHeader forWho={"income"} fields={incomeTable.fields} />
      <CommonTable table={incomeTable} />
    </div>
  );
};

export default ManageIncome;
