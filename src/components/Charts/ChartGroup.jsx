import ChartCard from "./ChartCard";

const ChartGroup = async ({ chartData }) => {
  return (
    <div className="grid grid-cols-12 w-full h-fit place-items-center px-5 gap-4">
      <ChartCard
        title="Weekly Cash Flow"
        type="line"
        data={chartData.cashFlow}
        dataKey={["revenue", "expenses"]}
        categoryKey="day"
      />

      <ChartCard
        title="Top Selling Items"
        type="bar"
        data={chartData.topSelling}
        dataKey={["value"]}
        categoryKey="category"
      />
    </div>
  );
};
export default ChartGroup;
