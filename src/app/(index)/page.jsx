"use client";
import KPIBoxGroup from "@/components/Dashboard/KpiBox";
import ChartGroup from "@/components/Charts/ChartGroup";
import TableGroup from "@/components/Dashboard/TableGroup";
import fetchDashboardData, { initialData } from "@/store/dashboardAPI";
import { useEffect, useState } from "react";
import Loader from "@/components/Global/Loader";

const Home = () => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const setLoadingFun = (data) => {
    setLoading(data);
  };

  const loadData = async (setLoadingFun) => {
    const dashboardData = await fetchDashboardData(setLoadingFun);
    setData(dashboardData);
  };
  useEffect(() => {
    loadData(setLoadingFun);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className=" w-full flex-col scroll-smooth justify-center items-center flex-1 bg-transparent">
          <h1 className="text-3xl my-2 text-gray-800 font-bold">Dashboard</h1>
          <p className="text-gray-600 text-sm mb-4">
            Welcome to your dashboard. Here you can find an overview of your
            performance.
          </p>
          <KPIBoxGroup kpiData={data.kpiData} />
          <ChartGroup chartData={data.chartData} />
          <TableGroup tablesData={data.tablesData} />
        </div>
      )}
    </>
  );
};
export default Home;
