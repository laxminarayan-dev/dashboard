import KPIBoxGroup from "@/components/Dashboard/KpiBox";
import ChartGroup from "@/components/Charts/ChartGroup";
import TableGroup from "@/components/Dashboard/TableGroup";

const Home = async () => {
  "use server";
  let data;
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/dashboard-data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);

    data = { kpiData: [], chartData: [], tablesData: [] };
  }
  return (
    <>
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
    </>
  );
};
export default Home;
