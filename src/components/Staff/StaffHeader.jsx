"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import RenderFields from "../Shared/RenderFields";

const StaffHeader = ({ fields }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting new ${forWho}:`, formData);
    // Add your API call or state management logic here
    setIsModalOpen(false);
  };
  return (
    <>
      <div>
        <h1 className="text-3xl my-2 text-gray-800 font-bold">
          Staff Management
        </h1>
        <p className="text-gray-600 text-sm mb-4">Manage your Staff here.</p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Employees</h1>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="bg-white text-sm px-3 py-2 rounded-full border border-gray-200 shadow-xs cursor-pointer flex justify-center items-center gap-1 hover:bg-gray-50"
        >
          <Plus size={16} /> Add Employee
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 p-4 flex justify-center items-center z-[1000]">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative z-10">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <div>
                <h3 className="text-slate-900 text-xl font-semibold">
                  Add New Employee
                </h3>
                <p className="text-slate-600 text-xs mt-1">
                  Enter Employee's details
                </p>
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
                  Add Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default StaffHeader;
