"use client";
import TransactionHeader from "@/components/Transactions/TransactionHeader";
import TransactionTable from "@/components/Transactions/TransactionTable";
import { fetchAllTransaction } from "@/store/transactionAPI";
import { useState, useEffect } from "react";
const TransactionsHistory = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const transactions = await fetchAllTransaction();
    setData(transactions);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <TransactionHeader onAddData={loadData} />
      {data.length <= 0 ? (
        <div className="w-[42rem] bg-white shadow h-80 flex justify-center items-center rounded-md">
          <h1 className="text-lg text-gray-700">No data to display.</h1>
        </div>
      ) : (
        <TransactionTable data={data} />
      )}
    </>
  );
};
export default TransactionsHistory;
