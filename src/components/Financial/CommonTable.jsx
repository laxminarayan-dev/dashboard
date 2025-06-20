import ActionButtons from "./ActionButtons";
const CommonTable = () => {
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
    <div className="overflow-auto">
      <table className="min-w-full w-[35rem] bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            {expensesTable.thead.map((th, index) => (
              <th
                key={th + index}
                className="p-4 text-left text-[13px] font-semibold text-slate-900"
              >
                {th}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {expensesTable.tbody.map((tr, index) => (
            <tr key={index + tr.id} className="hover:bg-gray-50">
              {Object.entries(tr).map(([key, value]) => {
                if (key != "actions") {
                  return (
                    <td
                      className="p-4 text-[15px] text-slate-600 font-medium"
                      key={key}
                    >
                      {value}
                    </td>
                  );
                } else {
                  return (
                    <td key={key}>
                      <ActionButtons id={tr.id} />
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
