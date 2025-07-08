"use client";
import Link from "next/link";
import OrderTable from "@/components/Orders/OrderTable";
import TransactionTable from "@/components/Transactions/TransactionTable";
import { useEffect, useState } from "react";
const TableGroup = () => {
  const [orderData, setOrderData] = useState([]);
  const [transactionData, setTransactionData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/orders", {
      cache: "no-store",
    })
      .then((res) => res.json()) // Parse JSON from response
      .then((data) => {
        setOrderData(data); // This will log the actual order data array
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:8000/api/transactions", {
      cache: "no-store",
    })
      .then((res) => res.json()) // Parse JSON from response
      .then((data) => {
        setTransactionData(data); // This will log the actual order data array
      });
  }, []);

  return (
    <>
      <div>
        <div className="grid grid-cols-1  gap-2 px-5 my-8 max-w-fit">
          <div className="w-full flex items-center justify-between ">
            <h1 className="text-lg font-semibold ">Recent Orders</h1>
            <Link
              className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer font-medium"
              href={"/orders"}
            >
              View All
            </Link>
          </div>
          <OrderTable data={orderData} />
        </div>
        <div className="grid grid-cols-1 gap-2 px-5 my-8  max-w-fit">
          <div className="w-full flex items-center justify-between ">
            <h1 className="text-lg font-semibold ">Recent Transactions</h1>
            <Link
              className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer font-medium"
              href={"/transactions"}
            >
              View All
            </Link>
          </div>
          <TransactionTable data={transactionData} />
        </div>
      </div>
    </>
  );
};
export default TableGroup;
