"use client";
import { Plus, X, CloudUpload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    image: null, // This will hold the File object
    heading: "",
    subheading: "",
    price: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      setImagePreview(URL.createObjectURL(file)); // Optional: preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData.get("image"));
    console.log(formData.get("name"));
    console.log(formData.get("description"));
    console.log(formData.get("price"));

    // // For file uploads you'd typically send a FormData object:
    // const data = new FormData();
    // data.append("image", formData.image);
    // data.append("heading", formData.heading);
    // data.append("subheading", formData.subheading);
    // data.append("price", formData.price);

    // onSubmit(data); // Pass FormData to parent (or send via fetch/axios)
  };
  return (
    <>
      <div>
        <h1 className="text-3xl my-2 text-gray-800 font-bold">
          Inventory Management
        </h1>
        <p className="text-gray-600 text-sm mb-4">
          Manage your Inventory data here.
        </p>
      </div>

      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Products</h1>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="border border-gray-100 bg-white shadow-sm py-2 px-4 rounded-full cursor-pointer flex justify-center items-center gap-1"
        >
          <Plus size={18} /> Add Product
        </button>
      </div>

      {/* model */}
      <div
        className={`fixed inset-0 p-4 flex justify-center items-center z-[1000] ${
          isModalOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        ></div>
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative z-10">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200">
            <div>
              <h3 className="text-slate-900 text-xl font-semibold">
                Add New Product
              </h3>
              <p className="text-slate-600 text-xs mt-1">
                Enter Product details
              </p>
            </div>
            <X
              onClick={() => setIsModalOpen(false)}
              className="w-5 h-5 cursor-pointer text-gray-400 hover:text-red-500"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Image upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Image
              </label>
              <div className="rounded-lg border-2 border-gray-200 border-dashed mt-6">
                <div className="relative p-4 min-h-[180px] flex flex-col items-center justify-center text-center cursor-pointer">
                  <div className={`${imagePreview ? "hidden" : "block"}`}>
                    <CloudUpload size={44} />
                    <h4 className="text-sm text-slate-600">
                      Drag & Drop or{" "}
                      <label
                        htmlFor="chooseFile"
                        className="text-blue-600 cursor-pointer"
                      >
                        Choose file
                      </label>{" "}
                      to upload
                    </h4>
                    <input
                      type="file"
                      name="image"
                      id="chooseFile"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                  </div>
                  {imagePreview && (
                    <>
                      <button
                        onClick={() => {
                          setImagePreview(null);
                        }}
                        className="absolute top-2 right-2 cursor-pointer"
                      >
                        <X />
                      </button>
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        // className="mt-2 max-h-40 rounded"
                        height={200}
                        width={200}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* Heading */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Product name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Subheading / Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Discription
              </label>
              <textarea
                name="description"
                placeholder="Enter product description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
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
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Header;
