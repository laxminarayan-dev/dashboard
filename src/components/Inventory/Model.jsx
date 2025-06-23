import { X, CloudUpload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const InventoryModel = ({
  type,
  isModalOpen,
  setIsModalOpen,
  modelDataObj,
}) => {
  const [formData, setFormData] = useState(modelDataObj);

  const [imagePreview, setImagePreview] = useState(modelDataObj.foodImageUrl);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
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
        foodImageUrl: file,
      }));
      setImagePreview(URL.createObjectURL(file));
      console.log(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData.get("foodImageUrl"));
    console.log(formData.get("foodName"));
    console.log(formData.get("foodDescription"));
    console.log(formData.get("foodPrice"));
  };

  return (
    <>
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
                {type == "add" ? "Add New" : "Update"} Product
              </h3>
              <p className="text-slate-600 text-xs mt-1">
                {type == "add" ? "Enter" : "Update"} Product details
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
                <div className="relative p-4 min-h-[180px] flex flex-col items-center justify-center text-center">
                  <div className={`${imagePreview ? "hidden" : "flex w-full"}`}>
                    <label
                      htmlFor="chooseFile"
                      className="w-full h-[180px] flex flex-col justify-center items-center gap-4 cursor-pointer"
                    >
                      <CloudUpload size={44} />
                      <h4 className="text-xs text-slate-600">
                        Drag & Drop or{" "}
                        <span
                          htmlFor="chooseFile"
                          className="text-blue-600 cursor-pointer"
                        >
                          Choose file
                        </span>
                        to upload
                      </h4>
                    </label>

                    <input
                      type="file"
                      name="FoodImageUrl"
                      id="chooseFile"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    ></input>
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
                      <div className="relative min-h-52 min-w-52 max-h-52 max-w-52">
                        <Image
                          src={imagePreview}
                          alt="Preview"
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
                          className="object-cover rounded"
                        />
                      </div>
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
                name="foodName"
                placeholder="Product name"
                value={formData.foodName}
                onChange={(e) => handleChange(e)}
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
                name="foodDescription"
                value={formData.foodDescription}
                onChange={handleChange}
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
                name="foodPrice"
                value={formData.foodPrice}
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
                {type == "add" ? "Add" : "Update"} Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default InventoryModel;
