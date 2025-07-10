"use client";
import { Pencil, Trash, X } from "lucide-react";
import { useEffect, useState } from "react";
import RenderFields from "../Shared/RenderFields";
import { useRouter } from "next/navigation";
import { transactionFields as fields } from "@/lib/fields";
import { transactionsInitialData as initialData } from "@/lib/initialData";

const TransactionActions = ({ data, onTransactionUpdate }) => {
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
      [name]: ["amount"].includes(name) ? parseInt(value, 10) || 0 : value,
    }));
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch(`http://localhost:8000/api/transactions/update`, {
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
        if (onTransactionUpdate) onTransactionUpdate(result.transactionId);
      })
      .catch((error) => {
        alert("Error updating order");
      });
  };

  const handleDelete = () => {
    fetch(`http://localhost:8000/api/transactions/${data.transactionId}`, {
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
                  Update Transaction's Detail
                </h3>
                <p className="text-slate-600 text-xs mt-1">Edit details</p>
              </div>
              <X
                onClick={() => setIsModalOpen(false)}
                className="w-5 h-5 cursor-pointer text-gray-400 hover:text-red-500"
              />
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleUpdate}>
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TransactionActions;
