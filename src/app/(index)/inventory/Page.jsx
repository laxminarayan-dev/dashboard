import Header from "@/components/Inventory/Header";
import { IndianRupee } from "lucide-react";
import Image from "next/image";
const InventoryManagement = () => {
  const foodItems = [
    {
      id: "1",
      foodname: "Margherita Pizza",
      foodimageurl: "/foodImages/margherita.jpg",
      fooddescription:
        "Classic pizza topped with fresh tomatoes, mozzarella, and basil.",
      foodprice: 299,
      foodavailability: true,
    },
    {
      id: "2",
      foodname: "Veg Biryani",
      foodimageurl: "/foodImages/veg-biryani.jpg",
      fooddescription:
        "Aromatic basmati rice cooked with mixed vegetables and Indian spices.",
      foodprice: 249,
      foodavailability: true,
    },
    {
      id: "3",
      foodname: "Paneer Butter Masala",
      foodimageurl: "/foodImages/paneer-butter-masala.jpg",
      fooddescription:
        "Soft paneer cubes cooked in rich, creamy butter masala gravy.",
      foodprice: 220,
      foodavailability: true,
    },
    {
      id: "4",
      foodname: "Masala Dosa",
      foodimageurl: "/foodImages/dosa.jpg",
      fooddescription:
        "Crispy dosa filled with spiced mashed potatoes served with chutney and sambar.",
      foodprice: 120,
      foodavailability: true,
    },
    {
      id: "5",
      foodname: "Chole Bhature",
      foodimageurl: "/foodImages/chole-bhature.jpg",
      fooddescription:
        "Spicy chickpea curry served with deep-fried fluffy bhature.",
      foodprice: 150,
      foodavailability: false, // maybe out of stock
    },
    {
      id: "6",
      foodname: "Chocolate Brownie",
      foodimageurl: "/foodImages/chocolate-brownie.jpg",
      fooddescription: "Rich and fudgy chocolate brownie served warm.",
      foodprice: 90,
      foodavailability: true,
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
                src={item.foodimageurl}
                alt="Image"
                fill // Next.js will use the parent div’s size
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="p-4 flex flex-col gap-1">
              {/* bottom */}
              <h1 className="font-semibold text-lg">{item.foodname}</h1>
              <h3 className="text-gray-400 line-clamp-2">
                {item.fooddescription}
              </h3>
              <h3 className="flex justify-start items-center text-2xl font-bold">
                <IndianRupee size={16} /> {item.foodprice}
              </h3>
              <div className="flex flex-row justify-between items-center mt-2 gap-2">
                <button className="font-semibold font-mono bg-amber-400 text-gray-100 p-1 flex-1 rounded-full cursor-pointer">
                  Edit
                </button>
                <button className="font-semibold font-mono bg-red-400 text-gray-100 p-1 flex-1 rounded-full cursor-pointer">
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
