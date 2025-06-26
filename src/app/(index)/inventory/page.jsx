import Header from "@/components/Inventory/Header";
import Actions from "@/components/Inventory/Actions";
import { IndianRupee } from "lucide-react";
import Image from "next/image";

const InventoryManagement = () => {
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
    <div className="flex flex-col gap-4">
      <Header />
      {/* Card Group */}
      <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* card */}
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-100 bg-white shadow-sm rounded-md overflow-hidden"
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
              <Actions data={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InventoryManagement;
