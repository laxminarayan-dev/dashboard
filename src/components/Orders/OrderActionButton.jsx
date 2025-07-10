"use client";
import { Pencil, Trash, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import RenderFields from "../Shared/RenderFields";
import { orderFields as fields } from "@/lib/fields";
import { ordersInitialData as initialData } from "@/lib/initialData";

const OrderActionButton = ({ data, onOrderUpdate }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialData);
  useEffect(() => {
    setFormData(data);
  }, [isModalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: ["amount", "quantity"].includes(name)
        ? parseInt(value, 10) || 0
        : value,
    }));
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/api/orders/update`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Update Successful");
        setIsModalOpen(false);
        if (onOrderUpdate) onOrderUpdate(result.orderId);
      })
      .catch((error) => {
        alert("Error updating order");
      });
  };

  const handleDelete = () => {
    fetch(`http://localhost:8000/api/orders/${data.orderId}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res.status);
      if (res.status == 200) {
        router.back();
      }
    });
  };

  return (
    <>
      <div className="w-full flex gap-4 mt-6">
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="flex flex-1 items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
        >
          <Pencil className="w-4 h-4" />
          Update Details
        </button>

        <button
          onClick={handleDelete}
          className="flex flex-1 items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all"
        >
          <Trash className="w-4 h-4" />
          Delete Details
        </button>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl h-[90vh] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-200 sticky top-0 bg-white z-20">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  📝 Update Order
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Edit the fields below
                </p>
              </div>
              <X
                onClick={() => setIsModalOpen(false)}
                className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer"
              />
            </div>

            {/* Form Body (scrollable) */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              <form onSubmit={handleUpdate} className="space-y-4">
                {fields.map((field, index) => (
                  <RenderFields
                    key={index}
                    field={field}
                    handleInputChange={handleInputChange}
                    formData={formData}
                  />
                ))}
              </form>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3 bg-white sticky bottom-0 z-20">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 text-sm hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="form-id"
                className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderActionButton;
