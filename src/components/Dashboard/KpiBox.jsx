import { IndianRupee, ShoppingCart, Users } from "lucide-react";
const KPIBoxGroup = async ({ kpiData }) => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-5">
        {kpiData.map((box, index) => (
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
              {box.icon == "IndianRupee" ? (
                <IndianRupee className="h-8 w-8 text-green-500" />
              ) : box.icon == "ShoppingCart" ? (
                <ShoppingCart className="h-8 w-8 text-blue-500" />
              ) : (
                <Users className="h-8 w-8 text-orange-500" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KPIBoxGroup;
