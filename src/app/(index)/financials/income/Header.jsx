"use client";
import { Plus } from "lucide-react";
const Header = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-2xl font-bold">Income</h1>
      <button className="bg-white text-sm px-3 py-2 rounded-full border border-gray-200 shadow-xs cursor-pointer flex justify-center items-center gap-1">
        <Plus /> Add Income
      </button>
    </div>
  );
};
export default Header;
