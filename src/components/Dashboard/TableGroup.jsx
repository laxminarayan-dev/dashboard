"use client";
import Link from "next/link";
const TableGroup = () => {
  const tables = [
    {
      title: "Recent Orders",
      headings: ["Order ID", "Customer", "Food Item", "Quantity", "Total"],
      list: [
        {
          id: "#001",
          customer: "John Doe",
          food: "Burger Combo",
          quantity: "x 3",
          total: "$24.50",
        },
        {
          id: "#002",
          customer: "Sarah Smith",
          food: "Burger Combo",
          quantity: "x 2",
          total: "$18.00",
        },
        {
          id: "#003",
          customer: "Mike Johnson",
          food: "Burger Combo",
          quantity: "x 5",
          total: "$42.75",
        },
        {
          id: "#004",
          customer: "Emily Brown",
          food: "Burger Combo",
          quantity: "x 1",
          total: "$8.50",
        },
        {
          id: "#005",
          customer: "David Wilson",
          food: "Burger Combo",
          quantity: "x 4",
          total: "$36.00",
        },
        {
          id: "#006",
          customer: "Laura Garcia",
          food: "Burger Combo",
          quantity: "x 2",
          total: "$20.00",
        },
      ],
      path: "/orders",
    },
    {
      title: "Recent Transactions",
      headings: ["Transaction ID", "Amount", "Status", "Date & Time", "Method"],
      list: [
        {
          id: "#TXN001",
          amount: "$24.50",
          status: "Completed",
          dateTime: "2025-06-20 14:32",
          method: "Credit Card",
        },
        {
          id: "#TXN002",
          amount: "$18.00",
          status: "Pending",
          dateTime: "2025-06-20 13:10",
          method: "PayPal",
        },
        {
          id: "#TXN003",
          amount: "$42.75",
          status: "Completed",
          dateTime: "2025-06-19 18:45",
          method: "Apple Pay",
        },
        {
          id: "#TXN004",
          amount: "$8.50",
          status: "Cancelled",
          dateTime: "2025-06-19 10:22",
          method: "Cash",
        },
        {
          id: "#TXN005",
          amount: "$36.00",
          status: "Completed",
          dateTime: "2025-06-18 16:05",
          method: "Google Pay",
        },
        {
          id: "#TXN006",
          amount: "$20.00",
          status: "Refunded",
          dateTime: "2025-06-17 11:38",
          method: "Credit Card",
        },
      ],
      path: "/transactions",
    },
  ];
  return (
    <>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-5 my-4">
          {tables.map((table, index) => (
            <div key={table.title + index} className="bg-transparent">
              <div className="w-full shadow-sm bg-white p-6 rounded-lg">
                <div className="w-full flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold ">{table.title}</h3>
                  <Link
                    className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer font-medium"
                    href={table.path}
                  >
                    View All
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <div className="min-w-[30rem] w-full ">
                    <table className="w-[inherit] text-sm">
                      <thead>
                        <tr className="border-b ">
                          {table.headings.map((heading) => (
                            <th key={heading} className="text-left py-2 ">
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.list.map((list, index) => (
                          <tr key={index} className="border-b ">
                            {Object.entries(list).map(([key, value], index) => (
                              <td
                                key={key + index}
                                className="py-2 font-medium text-slate-600"
                              >
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TableGroup;
