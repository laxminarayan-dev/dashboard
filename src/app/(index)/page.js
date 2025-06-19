import KPIBoxGroup from "@/components/KpiBox";
import ChartGroup from "@/components/Charts/ChartGroup";

export default function Home() {
  return (
    <>
      <div className="w-full flex-col justify-center items-center flex-1 bg-white dark:bg-gray-900">
        <KPIBoxGroup />

        <ChartGroup />

      </div>
    </>
  );
}


