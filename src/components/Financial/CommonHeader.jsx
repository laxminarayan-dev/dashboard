"use client";
import { useState, useEffect } from "react";
import { Plus, X } from "lucide-react";

const CommonHeader = ({ forWho }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Configuration object for different form types
  const headerConfig = {
    expenses: {
      title: "Expense",
      fields: [
        { name: "date", label: "Date", type: "date", required: true },
        {
          name: "source",
          label: "Source",
          type: "text",
          required: true,
          placeholder: "e.g., Office Supplies, Business Lunch",
        },
        {
          name: "amount",
          label: "Amount",
          type: "number",
          required: true,
          placeholder: "0.00",
          step: "0.01",
          min: "0",
          prefix: "$",
        },
        {
          name: "paymentMethod",
          label: "Payment Method",
          type: "select",
          required: false,
          options: [
            "cash",
            "credit card",
            "debit card",
            "bank transfer",
            "check",
            "paypal",
          ],
          default: "cash",
        },
      ],
    },
    salary: {
      title: "Salary",
      fields: [
        {
          name: "date",
          label: "Payment Date",
          type: "date",
          required: true,
        },
        {
          name: "employeeName",
          label: "Employee Name",
          type: "text",
          required: true,
          placeholder: "e.g., Rahul Sharma",
        },
        {
          name: "employeeId",
          label: "Employee ID",
          type: "text",
          required: true,
          placeholder: "e.g., EMP001",
        },
        {
          name: "amount",
          label: "Salary Amount",
          type: "number",
          required: true,
          placeholder: "0.00",
          step: "0.01",
          min: "0",
          prefix: "₹",
        },
        {
          name: "paymentMethod",
          label: "Payment Method",
          type: "select",
          required: false,
          options: [
            "cash",
            "credit card",
            "debit card",
            "bank transfer",
            "check",
            "UPI",
          ],
          default: "bank transfer",
        },
      ],
    },
    income: {
      title: "Income",
      fields: [
        {
          name: "date",
          label: "Income Date",
          type: "date",
          required: true,
        },
        {
          name: "source",
          label: "Income Source",
          type: "text",
          required: true,
          placeholder: "e.g., Swiggy, Zomato, Walk-in Customer",
        },
        {
          name: "amount",
          label: "Income Amount",
          type: "number",
          required: true,
          placeholder: "0.00",
          step: "0.01",
          min: "0",
          prefix: "₹",
        },
        {
          name: "paymentMethod",
          label: "Payment Method",
          type: "select",
          required: false,
          options: [
            "cash",
            "credit card",
            "debit card",
            "bank transfer",
            "UPI",
            "paypal",
          ],
          default: "cash",
        },
        {
          name: "orderId",
          label: "Order ID",
          type: "text",
          required: false,
          placeholder: "Optional Order ID",
        },
      ],
    },
  };

  // Get the current configuration based on the 'forWho' prop
  const currentConfig = headerConfig[forWho];

  // Dynamically create initial state for the form
  const createInitialState = () => {
    const initialState = {};
    currentConfig.fields.forEach((field) => {
      initialState[field.name] = field.default || "";
    });
    return initialState;
  };

  const [formData, setFormData] = useState(createInitialState());

  // Reset form data when the modal is opened
  const openModal = () => {
    setFormData(createInitialState());
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting new ${currentConfig.title}:`, formData);
    // Add your API call or state management logic here
    setIsModalOpen(false);
  };

  // Helper function to capitalize strings for display
  const capitalize = (str) =>
    str
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  // Render a single form field based on its configuration
  const renderField = (field) => {
    const commonInputClass =
      "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

    const label = (
      <label
        htmlFor={field.name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {field.label}{" "}
        {field.required && <span className="text-red-500">*</span>}
      </label>
    );

    switch (field.type) {
      case "select":
        return (
          <div key={field.name}>
            {label}
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              required={field.required}
              className={commonInputClass}
            >
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {capitalize(option)}
                </option>
              ))}
            </select>
          </div>
        );

      case "number":
        return (
          <div key={field.name}>
            {label}
            <div className="relative">
              {field.prefix && (
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                  {field.prefix}
                </span>
              )}
              <input
                id={field.name}
                type="number"
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                required={field.required}
                placeholder={field.placeholder}
                step={field.step}
                min={field.min}
                className={`${commonInputClass} ${field.prefix ? "pl-7" : ""}`}
              />
            </div>
          </div>
        );

      default: // Handles 'text', 'date', etc.
        return (
          <div key={field.name}>
            {label}
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              required={field.required}
              placeholder={field.placeholder}
              className={commonInputClass}
            />
          </div>
        );
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">{capitalize(forWho)}</h1>
        <button
          onClick={openModal}
          className="bg-white text-sm px-3 py-2 rounded-full border border-gray-200 shadow-xs cursor-pointer flex justify-center items-center gap-1 hover:bg-gray-50"
        >
          <Plus size={16} /> Add {currentConfig.title}
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
                  Add New {currentConfig.title}
                </h3>
                <p className="text-slate-600 text-xs mt-1">
                  Enter {currentConfig.title.toLowerCase()} details
                </p>
              </div>
              <X
                onClick={() => setIsModalOpen(false)}
                className="w-5 h-5 cursor-pointer text-gray-400 hover:text-red-500"
              />
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {currentConfig.fields.map((field) => renderField(field))}

              <div className="border-t pt-6 flex gap-4">
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
                  Add {currentConfig.title}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CommonHeader;
