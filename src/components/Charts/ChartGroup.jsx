import ChartCard from "./ChartCard";

const weeklyData = [
  { day: "Mon", revenue: 350, expenses: 100 },
  { day: "Tue", revenue: 320, expenses: 250 },
  { day: "Wed", revenue: 280, expenses: 40 },
  { day: "Thu", revenue: 410, expenses: 230 },
  { day: "Fri", revenue: 650, expenses: 120 },
  { day: "Sat", revenue: 780, expenses: 430 },
  { day: "Sun", revenue: 710, expenses: 120 },
];

const categoryData = [
  { category: "Snacks", value: 400 },
  { category: "Main Course", value: 340 },
  { category: "Chaat", value: 300 },
  { category: "Chaat", value: 204 },
  { category: "Drinks", value: 200 },
  { category: "Drinks", value: 156 },
  { category: "Main Course", value: 150 },
];

const ChartGroup = () => {
  return (
    <div className="grid grid-cols-12 w-full h-fit place-items-center px-5 gap-4">
      <ChartCard
        title="Weekly Cash Flow"
        type="line"
        data={weeklyData}
        dataKey={["revenue", "expenses"]}
        categoryKey="day"
      />

      <ChartCard
        title="Top Selling Items"
        type="bar"
        data={categoryData}
        dataKey={["value"]}
        categoryKey="category"
      />
    </div>
  );
};
export default ChartGroup;
