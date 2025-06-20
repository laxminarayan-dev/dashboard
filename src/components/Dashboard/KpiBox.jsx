import { IndianRupee, ShoppingCart, Users } from "lucide-react";
const KPIBoxGroup = () => {
  const kpiBoxes = [
    {
      title: "Today's Revenue",
      counts: "₹2,847",
      subTitle: "+12.5%",
      color: "text-green-500",
      icon: <IndianRupee className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Orders Completed",
      counts: "47",
      subTitle: "+8.2%",
      color: "text-blue-500",
      icon: <ShoppingCart className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Customer Count",
      counts: "156",
      subTitle: "23 new",
      color: "text-orange-500",
      icon: <Users className="h-8 w-8 text-orange-500" />,
    },
  ];

  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-5">
        {kpiBoxes.map((box, index) => (
          <div
            key={index + box.title}
            className="bg-white dar p-6 rounded-lg shadow-sm border border-slate-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 ">
                  {box.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 ">
                  {box.counts}
                </p>
                <div className="flex items-center mt-2">
                  <Users className={`h-4 w-4 ${box.color} mr-1`} />
                  <span className={`text-sm ${box.color}`}>{box.subTitle}</span>
                </div>
              </div>
              {box.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KPIBoxGroup;
