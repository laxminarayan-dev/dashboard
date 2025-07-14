"use client";
import OrderHeader from "@/components/Orders/OrderHeader";
import OrderTable from "@/components/Orders/OrderTable";
import { fetchAllOrder } from "@/store/orderAPI";
import { Fragment, useEffect, useState } from "react";

const OrdersHistory = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const orders = await fetchAllOrder();
    setData(orders);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Fragment>
      <OrderHeader onAddData={loadData} />
      {data.length <= 0 ? (
        <div className="w-[38rem] bg-white shadow h-80 flex justify-center items-center rounded-md">
          <h1 className="text-lg text-gray-700">No data to display.</h1>
        </div>
      ) : (
        <OrderTable data={data} />
      )}
    </Fragment>
  );
};
export default OrdersHistory;
