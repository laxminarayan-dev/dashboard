"use client";
import {
  UserRound,
  Utensils,
  Hash,
  ListOrdered,
  CalendarClock,
  Truck,
  CreditCard,
  MapPinned,
  CheckCircle2,
  IndianRupee,
} from "lucide-react";
import OrderActionButton from "@/components/Orders/OrderActionButton";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchOneOrder } from "@/store/orderAPI";
import { ordersInitialData as initialData } from "@/lib/initialData";
const Order = () => {
  const [data, setData] = useState(initialData);
  const params = useParams();
  const loadData = async (orderId) => {
    const order = await fetchOneOrder(orderId);
    setData(order);
  };
  useEffect(() => {
    const orderID = params.id;
    loadData(orderID);
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto w-full">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b pb-2">
        🧾 Order Details
      </h2>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
        {/* Order ID */}
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Hash className="w-5 h-5 text-indigo-500" />
          <span className="font-semibold">Order ID:</span>
          <span>{data.orderId}</span>
        </div>

        {/* Order Info Grid */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <UserRound className="w-4 h-4 text-blue-500" />
            <span className="font-medium">Customer:</span> {data.customerName}
          </div>

          <div className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-orange-500" />
            <span className="font-medium">Item:</span> {data.orderItem}
          </div>

          <div className="flex items-center gap-2">
            <ListOrdered className="w-4 h-4 text-yellow-600" />
            <span className="font-medium">Qty:</span> {data.quantity}
          </div>

          <div className="flex items-center gap-2 text-green-700 font-semibold">
            <IndianRupee className="w-4 h-4" />
            <span>Total:</span> ₹{data.amount}
          </div>

          <div className="col-span-2 flex items-center gap-2 text-emerald-600 font-medium mt-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Status:</span> {data.status}
          </div>
        </div>

        {/* Timestamps */}
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CalendarClock className="w-4 h-4 text-purple-500" />
            Order Time:{" "}
            <strong className="text-gray-800">{data.orderDateTime}</strong>
          </div>

          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-pink-500" />
            Delivery Time:{" "}
            <strong className="text-gray-800">{data.deliveredDateTime}</strong>
          </div>
        </div>

        {/* Payment + Location */}
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-indigo-600" />
            Payment Method:{" "}
            <strong className="text-gray-800">{data.paymentMethod}</strong>
          </div>

          {data.deliveredAddress && (
            <div className="flex items-start gap-2">
              <MapPinned className="w-4 h-4 text-rose-500 mt-0.5" />
              <div>
                Delivery Address:
                <br />
                <strong className="text-gray-800 text-sm">
                  {data.deliveredAddress}
                </strong>
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <OrderActionButton data={data} onOrderUpdate={loadData} />
        </div>
      </div>
    </div>
  );
};

export default Order;
