import Link from "next/link";
import OrderTable from "@/components/Orders/OrderTable";
import TransactionTable from "@/components/Transactions/TransactionTable";
const TableGroup = ({ tablesData }) => {
  const orderData = tablesData.recentOrdersData;
  const transactionData = tablesData.recentTransactionsData;

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="grid grid-cols-1  gap-2 px-5 my-8 flex-1/2">
          <div className="w-full flex items-center justify-between ">
            <h1 className="text-lg font-semibold ">Recent Orders</h1>
            <Link
              className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer font-medium"
              href={"/orders"}
            >
              View All
            </Link>
          </div>
          {orderData.length <= 0 ? (
            <div className="w-full bg-white shadow h-80 flex justify-center items-center rounded-md">
              <h1 className="text-lg text-gray-700">No data to display.</h1>
            </div>
          ) : (
            <OrderTable data={orderData} />
          )}
        </div>
        <div className="grid grid-cols-1 gap-2 px-5 my-8 flex-1/2">
          <div className="w-full flex items-center justify-between ">
            <h1 className="text-lg font-semibold ">Recent Transactions</h1>
            <Link
              className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer font-medium"
              href={"/transactions"}
            >
              View All
            </Link>
          </div>
          {transactionData.length <= 0 ? (
            <div className="w-full bg-white shadow h-80 flex justify-center items-center rounded-md">
              <h1 className="text-lg text-gray-700">No data to display.</h1>
            </div>
          ) : (
            <TransactionTable data={transactionData} />
          )}
        </div>
      </div>
    </>
  );
};
export default TableGroup;
