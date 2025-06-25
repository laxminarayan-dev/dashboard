import { X, CloudUpload } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
const InventoryUpdateModel = ({
  updateModalVisible,
  setUpdateModalVisible,
  updateDataPayload = {},
}) => {
  const [updateFormFields, setUpdateFormFields] = useState(updateDataPayload);
  const [updateImagePreviewUrl, setUpdateImagePreviewUrl] = useState("");

  useEffect(() => {
    if (updateDataPayload) {
      setUpdateFormFields(updateDataPayload);
      // If updateDataPayload has an existing image URL, set it as preview
      if (
        updateDataPayload.foodImageUrl &&
        typeof updateDataPayload.foodImageUrl === "string"
      ) {
        setUpdateImagePreviewUrl(updateDataPayload.foodImageUrl);
      }
    }
    if (!updateModalVisible) {
      setUpdateFormFields({});
      setUpdateImagePreviewUrl(null);
    }
  }, [updateDataPayload, updateModalVisible]);

  // Cleanup update object URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      if (updateImagePreviewUrl && updateImagePreviewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(updateImagePreviewUrl);
      }
    };
  }, [updateImagePreviewUrl]);

  const handleUpdateFormInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateImageSelection = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Clean up previous object URL if it exists
      if (updateImagePreviewUrl && updateImagePreviewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(updateImagePreviewUrl);
      }

      const newUpdatePreviewUrl = URL.createObjectURL(selectedFile);
      setUpdateFormFields((prev) => ({ ...prev, foodImageUrl: selectedFile }));
      setUpdateImagePreviewUrl(newUpdatePreviewUrl);
    }
  };

  const handleUpdateImageRemoval = () => {
    // Clean up object URL
    if (updateImagePreviewUrl && updateImagePreviewUrl.startsWith("blob:")) {
      URL.revokeObjectURL(updateImagePreviewUrl);
    }

    setUpdateImagePreviewUrl("");
    setUpdateFormFields((prev) => ({ ...prev, foodImageUrl: "" }));

    // Reset file input
    const updateFileInput = document.getElementById("updateChooseFile");
    if (updateFileInput) {
      updateFileInput.value = "";
    }
  };

  const handleUpdateFormSubmission = (e) => {
    e.preventDefault();
    console.log("Submitting Update Data:", updateFormFields);
    // ... your API call logic here ...
  };

  const handleUpdateModalClose = () => {
    // Clean up object URL when closing modal
    if (updateImagePreviewUrl && updateImagePreviewUrl.startsWith("blob:")) {
      URL.revokeObjectURL(updateImagePreviewUrl);
    }
    setUpdateModalVisible(false);
  };

  if (!updateModalVisible) return null;

  return (
    <div className="fixed inset-0 p-4 flex justify-center items-center z-[1000]">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={handleUpdateModalClose}
      ></div>
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative z-10">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <h3 className="text-slate-900 text-xl font-semibold">
            Update Product
          </h3>
          <button onClick={handleUpdateModalClose}>
            <X className="w-5 h-5 cursor-pointer text-gray-400 hover:text-red-500" />
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Image
            </label>
            <div className="flex flex-row-reverse justify-center items-center gap-4">
              {/* Input */}
              <div className="flex-1/2 rounded-lg border-2 border-gray-200 border-dashed mt-2">
                <div className="relative p-4 min-h-[180px] flex flex-col items-center justify-center text-center">
                  <input
                    type="file"
                    id="updateChooseFile"
                    accept="image/*"
                    onChange={handleUpdateImageSelection}
                    className="hidden"
                  />
                  <label
                    htmlFor="updateChooseFile"
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
              {/* preview */}
              <div className="mt-2 flex-1/2 max-w-1/2">
                <div className="relative min-h-[210px] max-h-[210px] border-2 border-dashed border-gray-200 rounded-lg">
                  {updateImagePreviewUrl && (
                    <>
                      <button
                        type="button"
                        onClick={handleUpdateImageRemoval}
                        className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                      >
                        <X className="w-4 h-4 text-red-500" />
                      </button>
                      <Image
                        src={updateImagePreviewUrl}
                        alt="Update Preview"
                        fill
                        className="w-full h-full object-cover rounded"
                        onError={(e) => {
                          console.error(
                            "Update image failed to load:",
                            updateImagePreviewUrl
                          );
                          e.target.style.display = "none";
                        }}
                      />
                    </>
                  )}
                  {!updateImagePreviewUrl && (
                    <h1 className="text-sm text-red-500">
                      No Preview Available
                    </h1>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="foodName"
              placeholder="Product name"
              value={updateFormFields.foodName || ""}
              onChange={handleUpdateFormInputChange}
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
              value={updateFormFields.foodDescription || ""}
              onChange={handleUpdateFormInputChange}
              placeholder="Enter product description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
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
              value={updateFormFields.foodPrice || ""}
              onChange={handleUpdateFormInputChange}
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
              onClick={handleUpdateModalClose}
              className="w-full px-4 py-2 rounded-lg text-slate-900 text-sm font-medium bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleUpdateFormSubmission}
              className="w-full px-4 py-2 rounded-lg text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryUpdateModel;
