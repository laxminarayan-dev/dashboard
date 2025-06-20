import KPIBoxGroup from "@/components/KpiBox";
import ChartGroup from "@/components/Charts/ChartGroup";

export default function Home() {
  return (
    <>
      <div className=" w-full flex-col scroll-smooth justify-center items-center flex-1 bg-transparent">
        <h1 className="text-3xl my-2 text-gray-800 font-bold">Dashboard</h1>
        <KPIBoxGroup />
        <ChartGroup />
        <KPIBoxGroup />
        <KPIBoxGroup />
        <KPIBoxGroup />
        <KPIBoxGroup />
        <KPIBoxGroup />
      </div>
    </>
  );
}
