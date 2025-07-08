"use client";
import Link from "next/link";
import OrderTable from "@/components/Orders/OrderTable";
import TransactionTable from "@/components/Transactions/TransactionTable";
import { useEffect, useState } from "react";
const TableGroup = ({ tablesData }) => {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/orders", {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    })
      .then((res) => res.json()) // Parse JSON from response
      .then((data) => {
        setOrderData(data); // This will log the actual order data array
      });
  }, []);

  return (
    <>
      <div>
        <div className="grid grid-cols-1  gap-2 px-5 my-8">
          <div className="w-full flex items-center justify-between ">
            <h1 className="text-lg font-semibold ">Recent Orders</h1>
            <Link
              className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer font-medium"
              href={"/orders"}
            >
              View All
            </Link>
          </div>
          <OrderTable
            ordersTable={tablesData.recentOrdersData}
            data={orderData}
          />
        </div>
        <div className="grid grid-cols-1  gap-2 px-5 my-8">
          <div className="w-full flex items-center justify-between ">
            <h1 className="text-lg font-semibold ">Recent Transactions</h1>
            <Link
              className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer font-medium"
              href={"/transactions"}
            >
              View All
            </Link>
          </div>
          <TransactionTable
            transactionTable={tablesData.recentTransactionsData}
          />
        </div>
      </div>
    </>
  );
};
export default TableGroup;
