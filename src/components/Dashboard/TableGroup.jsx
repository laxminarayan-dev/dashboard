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
      })
      .catch((err) => {
        setOrderData([]); // This will log the actual order data array
        console.log("failed to fetch orders data");
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:8000/api/transactions", {
      cache: "no-store",
    })
      .then((res) => res.json()) // Parse JSON from response
      .then((data) => {
        setTransactionData(data); // This will log the actual order data array
      })
      .catch(() => {
        setTransactionData([]);
        console.log("failed to fetch transactions data data");
      });
  }, []);

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
              <h1>No data to show</h1>
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
              <h1>No data to show</h1>
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
