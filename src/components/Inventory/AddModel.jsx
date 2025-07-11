import { X, CloudUpload } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const InventoryAddModel = ({ isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    foodImageUrl: "",
    foodName: "",
    foodDescription: "",
    foodPrice: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      setFormData({
        foodImageUrl: "",
        foodName: "",
        foodDescription: "",
        foodPrice: "",
      });
      setImagePreview(null);
    }
  }, [isModalOpen]);
  useEffect(() => {
    if (imagePreview) {
      setIsImageLoading(false);
    }
  }, [imagePreview]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setIsImageLoading(true);
    const file = e.target.files[0];
    if (file) {
      const newPreviewUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, foodImageUrl: file }));
      setImagePreview(newPreviewUrl);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview("");
    setFormData((prev) => ({ ...prev, foodImageUrl: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Data:", formData);
    // ... your API call logic here ...
  };

  return (
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
          <h3 className="text-slate-900 text-xl font-semibold">
            Add New Product
          </h3>
          <button onClick={() => setIsModalOpen(false)}>
            <X className="w-5 h-5 cursor-pointer text-gray-400 hover:text-red-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Image
            </label>
            <div className="flex flex-row-reverse justify-center items-center gap-4">
              <div className="rounded-lg border-2 border-gray-200 border-dashed mt-2">
                <div className="relative p-4 min-h-[180px] flex flex-col items-center justify-center text-center">
                  <input
                    type="file"
                    id="chooseFile"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  <label
                    htmlFor="chooseFile"
                    className="w-full h-full min-h-[180px] flex flex-col justify-center items-center gap-4 cursor-pointer"
                  >
                    <CloudUpload size={44} />
                    <h4 className="text-xs text-slate-600">
                      Drag & Drop or{" "}
                      <span className="text-blue-600">Choose file</span> to
                      upload
                    </h4>
                  </label>
                </div>
              </div>
              <div className="flex-1/2 max-w-1/2">
                <div className="min-h-[210px] max-h-[210px] border-2 border-dashed border-gray-200 mt-2 rounded-lg relative flex justify-center items-center">
                  {!isImageLoading && imagePreview && (
                    <div>
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-md"
                      >
                        <X className="w-4 h-4 text-red-500" />
                      </button>
                      <div>
                        <Image src={imagePreview} alt="Preview" fill />
                      </div>
                    </div>
                  )}
                  {!isImageLoading && !imagePreview && (
                    <h1 className="text-sm text-red-500">
                      No Preview Available
                    </h1>
                  )}
                  {isImageLoading && (
                    <>
                      <div className="animate-spin w-10 h-10 border-gray-900 border-2 rounded-full border-r-0 border-t-0"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* ... Rest of your form fields ... */}
          {/* Form Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="foodName"
              placeholder="Product name"
              value={formData.foodName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Description
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
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InventoryAddModel;
