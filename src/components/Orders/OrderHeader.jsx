"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import RenderFields from "../Shared/RenderFields";

const OrderHeader = ({ fields, onAddData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialData = {
    amount: 0,
    customerName: "",
    deliveredDateTime: "",
    orderDateTime: "",
    orderId: "",
    orderItem: "",
    paymentMethod: "Cash On Delivery",
    quantity: 0,
    status: "Pending",
  };
  const generateOrderId = (prefix = "ORD") => {
    const timestamp = Date.now().toString(36).toUpperCase(); // e.g. "LTS3D0"
    const random = Math.floor(Math.random() * 36 ** 2)
      .toString(36)
      .toUpperCase(); // e.g. "A9"

    // Take last 3 from timestamp and 2 from random (or adjust as needed)
    const id = (timestamp.slice(-3) + random).slice(0, 5).padStart(5, "0");
    return prefix + id;
  };

  const [formData, setFormData] = useState(initialData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: ["amount", "quantity"].includes(name)
        ? parseInt(value, 10) || 0
        : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = generateOrderId();
    const objBody = { ...formData, orderId };
    fetch("http://localhost:8000/api/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objBody),
    }).then((res) => {
      if (res.status == 200) {
        alert("Order Entry Added Successfully");
        setIsModalOpen(false);
        onAddData();
      } else {
        alert("Order Entry Added Failed");
      }
    });
  };
  return (
    <>
      <div>
        <h1 className="text-3xl my-2 text-gray-800 font-bold">Order Details</h1>
        <p className="text-gray-600 text-sm mb-4">Manage your Orders here.</p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Order Entries</h1>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="bg-white text-sm px-3 py-2 rounded-full border border-gray-200 shadow-xs cursor-pointer flex justify-center items-center gap-1 hover:bg-gray-50"
        >
          <Plus size={16} /> Add Order Entry
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[1000] overflow-auto bg-black bg-opacity-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <div>
                <h3 className="text-slate-900 text-xl font-semibold">
                  Add New Order Detail
                </h3>
                <p className="text-slate-600 text-xs mt-1">Enter Details</p>
              </div>
              <X
                onClick={() => setIsModalOpen(false)}
                className="w-5 h-5 cursor-pointer text-gray-400 hover:text-red-500"
              />
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {fields.map((field, index) => (
                <RenderFields
                  key={index}
                  field={field}
                  handleInputChange={handleInputChange}
                  formData={formData}
                />
              ))}

              <div className="border-t border-gray-200 pt-6 flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full px-4 py-2 rounded-lg text-slate-900 text-sm font-medium bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-lg text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
                >
                  Add Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderHeader;
