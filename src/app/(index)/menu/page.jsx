import { IndianRupee } from "lucide-react";
import Image from "next/image";
const MenuManagement = () => {
  const foodItems = [
    {
      id: "1",
      foodName: "Margherita Pizza",
      foodImageUrl: "/foodImages/margherita.jpg",
      foodDescription:
        "Classic pizza topped with fresh tomatoes, mozzarella, and basil.",
      foodPrice: 299,
      foodAvailability: true,
    },
    {
      id: "2",
      foodName: "Veg Biryani",
      foodImageUrl: "/foodImages/veg-biryani.jpg",
      foodDescription:
        "Aromatic basmati rice cooked with mixed vegetables and Indian spices.",
      foodPrice: 249,
      foodAvailability: true,
    },
    {
      id: "3",
      foodName: "Paneer Butter Masala",
      foodImageUrl: "/foodImages/paneer-butter-masala.jpg",
      foodDescription:
        "Soft paneer cubes cooked in rich, creamy butter masala gravy.",
      foodPrice: 220,
      foodAvailability: true,
    },
    {
      id: "4",
      foodName: "Masala Dosa",
      foodImageUrl: "/foodImages/dosa.jpg",
      foodDescription:
        "Crispy dosa filled with spiced mashed potatoes served with chutney and sambar.",
      foodPrice: 120,
      foodAvailability: true,
    },
    {
      id: "5",
      foodName: "Chole Bhature",
      foodImageUrl: "/foodImages/chole-bhature.jpg",
      foodDescription:
        "Spicy chickpea curry served with deep-fried fluffy bhature.",
      foodPrice: 150,
      foodAvailability: false, // maybe out of stock
    },
    {
      id: "6",
      foodName: "Chocolate Brownie",
      foodImageUrl: "/foodImages/chocolate-brownie.jpg",
      foodDescription: "Rich and fudgy chocolate brownie served warm.",
      foodPrice: 90,
      foodAvailability: true,
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-3xl my-2 text-gray-800 font-bold">
          Menu Management
        </h1>
        <p className="text-gray-600 text-sm mb-4">
          Manage your Menu List here.
        </p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Today's Menu</h1>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6 ">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-100 bg-white shadow-sm rounded-md overflow-hidden max-w-80"
          >
            <div className="relative w-full h-52 md:h-64">
              {/* image */}
              <Image
                src={item.foodImageUrl}
                alt="Image"
                fill // Next.js will use the parent div’s size
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="p-4 flex flex-col gap-1">
              {/* bottom */}
              <h1 className="font-semibold text-lg">{item.foodName}</h1>
              <h2 className="text-gray-700 line-clamp-2">
                {item.foodDescription}
              </h2>
              <h3 className="flex justify-start items-center text-2xl font-bold">
                <IndianRupee size={16} /> {item.foodPrice}
              </h3>
              <div className="w-fit border border-stone-200 bg-gray-50 shadow-xs p-1 rounded-full gap-2 flex">
                <button
                  className={`${
                    !item.foodAvailability && "bg-red-300"
                  }  rounded-full px-2 py-1 text-sm cursor-pointer`}
                  aria-label="unavailable"
                >
                  Unavailable
                </button>
                <button
                  className={`${
                    item.foodAvailability && "bg-green-300"
                  }  rounded-full px-2 py-1 text-sm cursor-pointer`}
                  aria-label="available"
                >
                  Available
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default MenuManagement;
