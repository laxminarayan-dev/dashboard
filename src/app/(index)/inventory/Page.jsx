import Image from "next/image";
const InventoryManagement = () => {
  return (
    <div className="flex flex-col gap-4">
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
        <button className="border p-1 px-2 rounded-xl">Add Product</button>
      </div>

      {/* Card Group */}
      <div className=" grid grid-cols-2 sm:grid-cols-3 gap-4">
        {/* card */}
        {[0, 1, 2, 3].map((obj, index) => (
          <div
            key={index}
            className="border border-gray-100 bg-white shadow-sm rounded-md overflow-hidden"
          >
            <div className="min-h-46">
              {/* image */}
              <Image src={"/dosa.jpg"} width={500} height={600} alt="Image" />
            </div>
            <div className="p-4">
              {/* bottom */}
              <h1>Heading</h1>
              <h3>Sub Heading/Detail</h3>
              <h3>Price</h3>
              <div className="flex flex-row justify-between items-center gap-2">
                <button className="border border-gray-300 p-1 flex-1 rounded-sm">
                  Edit
                </button>
                <button className="border border-gray-300 p-1 flex-1 rounded-sm">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InventoryManagement;
