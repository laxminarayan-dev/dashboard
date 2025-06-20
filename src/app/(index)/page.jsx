import KPIBoxGroup from "@/components/Dashboard/KpiBox";
import ChartGroup from "@/components/Charts/ChartGroup";
import TableGroup from "@/components/Dashboard/TableGroup";

export default function Home() {
  return (
    <>
      <div className=" w-full flex-col scroll-smooth justify-center items-center flex-1 bg-transparent">
        <h1 className="text-3xl my-2 text-gray-800 font-bold">Dashboard</h1>
        <KPIBoxGroup />
        <ChartGroup />
        <TableGroup />
      </div>
    </>
  );
}
