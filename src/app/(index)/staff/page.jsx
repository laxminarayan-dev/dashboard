import Header from "@/components/Staff/Header";

const StaffManagement = () => {
  const workersTable = {
    thead: [
      "EMP ID",
      "EMP Name",
      "Date of Joining",
      "Salary",
      "Last Salary Paid",
      "LSP Date",
      "Salary Due",
      "Actions",
    ],
    tbody: [
      {
        id: "1",
        empName: "John Doe",
        dateOfJoin: "2023-01-15",
        salary: 50000,
        lastSalaryPaid: 45000,
        LSPDate: "2023-01-15",
        salaryDue: 5000,
        actions: <></>,
      },
      {
        id: "2",
        empName: "Jane Smith",
        dateOfJoin: "2022-05-20",
        salary: 60000,
        lastSalaryPaid: 60000,
        LSPDate: "2023-01-15",
        salaryDue: 0,
        actions: <></>,
      },
      {
        id: "3",
        empName: "Amit Kumar",
        dateOfJoin: "2024-03-10",
        salary: 40000,
        lastSalaryPaid: 30000,
        LSPDate: "2023-01-15",
        salaryDue: 10000,
        actions: <></>,
      },
      {
        id: "4",
        empName: "Sara Lee",
        dateOfJoin: "2021-08-05",
        salary: 70000,
        lastSalaryPaid: 70000,
        LSPDate: "2023-01-15",
        salaryDue: 0,
        actions: <></>,
      },
    ],
    fields: [
      {
        name: "empName",
        label: "EMP Name",
        type: "text",
        required: true,
        placeholder: "Enter Employee Name",
      },
      {
        name: "dateOfJoin",
        label: "Date Of Joining",
        type: "date",
        required: true,
      },
      {
        name: "salary",
        label: "Salary",
        type: "number",
        required: true,
        placeholder: "0.00",
        step: "1",
        min: "0",
        prefix: "₹",
      },
      {
        name: "lastSalaryPaid",
        label: "Last Salary Paid",
        type: "number",
        required: true,
        placeholder: "0.00",
        step: "1",
        min: "0",
        prefix: "₹",
      },
      {
        name: "LSPDate",
        label: "LSP Date",
        type: "date",
        required: true,
      },
      {
        name: "salaryDue",
        label: "Salary Due",
        type: "number",
        required: true,
        placeholder: "0.00",
        step: "1",
        min: "0",
        prefix: "₹",
      },
    ],
  };

  return (
    <>
      <Header fields={workersTable.fields} />
      {/* import ActionButtons from "./ActionButtons"; */}
      <div className="overflow-auto">
        <table className="min-w-full w-[35rem] bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100 whitespace-nowrap">
            <tr>
              {workersTable.thead.map((th, index) => (
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
            {workersTable.tbody.map((tr, index) => (
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
                        {/* <ActionButtons
                          id={tr.id}
                          fields={workersTable.fields}
                          data={tr}
                        /> */}
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default StaffManagement;
