import { X, CloudUpload } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const InventoryModel = ({
  type,
  isModalOpen,
  setIsModalOpen,
  modelDataObj,
}) => {
  const fileInputRef = useRef(null);
  const isInitializing = useRef(false);

  const [formData, setFormData] = useState(modelDataObj);
  const [imagePreview, setImagePreview] = useState("");

  // This effect correctly initializes the form state ONCE when the modal opens.
  useEffect(() => {
    if (isModalOpen && !isInitializing.current) {
      isInitializing.current = true;
      setFormData(modelDataObj);
      if (
        typeof modelDataObj.foodImageUrl === "string" &&
        modelDataObj.foodImageUrl
      ) {
        setImagePreview(modelDataObj.foodImageUrl);
      } else {
        setImagePreview("");
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else if (!isModalOpen && isInitializing.current) {
      isInitializing.current = false;
    }
  }, [isModalOpen, modelDataObj]);

  // FIX: This effect handles memory management for blob URLs.
  // It revokes the old blob URL whenever a new one is created or the component unmounts.
  useEffect(() => {
    const currentPreview = imagePreview;
    // Cleanup function
    return () => {
      if (currentPreview && currentPreview.startsWith("blob:")) {
        URL.revokeObjectURL(currentPreview);
        console.log("CLEANUP: Revoked Blob URL:", currentPreview);
      }
    };
  }, [imagePreview]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
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
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
            {type === "add" ? "Add New" : "Update"} Product
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
            <div className="rounded-lg border-2 border-gray-200 border-dashed mt-2">
              <div className="relative p-4 min-h-[180px] flex flex-col items-center justify-center text-center">
                <input
                  type="file"
                  ref={fileInputRef}
                  id="chooseFile"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  required={!formData.foodImageUrl}
                />
                {!imagePreview && (
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
                )}
                {imagePreview && (
                  <>
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-md"
                    >
                      <X className="w-4 h-4 text-red-500" />
                    </button>
                    <div className="relative w-52 h-52">
                      {/* FIX: Conditional rendering based on URL type */}
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="object-cover rounded w-full h-full"
                      />
                      )
                    </div>
                  </>
                )}
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
              {type === "add" ? "Add" : "Update"} Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InventoryModel;
