import { CheckCircle, CreditCard, MapPin, Clock } from "lucide-react";
import OrderActionButton from "@/components/Orders/OrderActionButton";

const Order = async ({ params }) => {
  "use server";
  const param = await params;

  const res = await fetch(`http://localhost:8000/api/order/${param.id}`, {
    method: "POST",
    cache: "no-store",
  });

  const result = await res.json();

  return (
    <div className="p-6 max-w-2xl w-full">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4 border-b pb-2">
        🧾 Order Summary
      </h2>

      <div className="space-y-4 text-gray-700">
        <div>
          <p className="text-sm text-gray-500">Order ID</p>
          <p className="font-semibold text-lg">{result.id}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Ordered By</p>
            <p className="font-medium">{result.customerName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Food Item</p>
            <p className="font-medium">{result.orderItem}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Quantity</p>
            <p className="font-medium">{result.quantity}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Amount</p>
            <p className="font-semibold text-green-600">₹{result.amount}</p>
          </div>

          <div className="col-span-2 flex items-center gap-2 text-green-700 font-medium">
            <CheckCircle className="w-5 h-5" />
            Status: {result.status}
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>
              Order Time: <strong>{result.orderDateTime}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>
              Delivery Time: <strong>{result.deliveredDateTime}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CreditCard className="w-4 h-4" />
            <span>
              Payment Method: <strong>{result.paymentMethod}</strong>
            </span>
          </div>
          <div className="flex items-start gap-2 text-gray-600">
            <MapPin className="w-4 h-4 mt-1" />
            <div>
              Location:
              <p className="text-sm text-gray-500">{result.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <OrderActionButton data={result} />
    </div>
  );
};

export default Order;
