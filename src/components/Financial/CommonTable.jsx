import ActionButtons from "./ActionButtons";
const CommonTable = ({ table }) => {
  return (
    <div className="overflow-auto">
      <table className="min-w-full w-[35rem] bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            {table.thead.map((th, index) => (
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
          {table.tbody.map((tr, index) => (
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
                      <ActionButtons
                        id={tr.id}
                        fields={table.fields}
                        data={tr}
                      />
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
