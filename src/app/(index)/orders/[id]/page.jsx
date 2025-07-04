"use client"; // if you're using Next.js app directory

import { CheckCircle, CreditCard, MapPin, Clock } from "lucide-react";

const Order = ({ params }) => {
  return (
    <div className=" p-6 max-w-2xl w-full">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4 border-b pb-2">
        🧾 Order Summary
      </h2>

      <div className="space-y-4 text-gray-700">
        <div>
          <p className="text-sm text-gray-500">Order ID</p>
          <p className="font-semibold text-lg">{params.id}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Ordered By</p>
            <p className="font-medium">Lucky Jaiswal</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Food Item</p>
            <p className="font-medium">🍰 Cake</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Quantity</p>
            <p className="font-medium">2</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Amount</p>
            <p className="font-semibold text-green-600">₹5000</p>
          </div>

          <div className="col-span-2 flex items-center gap-2 text-green-700 font-medium">
            <CheckCircle className="w-5 h-5" />
            Status: Delivered
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>
              Order Time: <strong>23-03-2025 00:12 AM</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>
              Delivery Time: <strong>23-03-2025 00:22 AM</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CreditCard className="w-4 h-4" />
            <span>
              Payment Method: <strong>Credit Card</strong>
            </span>
          </div>
          <div className="flex items-start gap-2 text-gray-600">
            <MapPin className="w-4 h-4 mt-1" />
            <div>
              Location:
              <p className="text-sm text-gray-500">
                227K, Karm Dharm, Narora <br />
                (Near Mithlesh Vatika, Opposite Road, Uday Prabhat Guest House)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
