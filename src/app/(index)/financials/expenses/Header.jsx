"use client";
const Header = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-2xl font-bold">Expenses</h1>
      <button className="bg-white text-sm px-3 py-2 rounded-full border border-gray-200 shadow-xs cursor-pointer">
        Add Expense
      </button>
    </div>
  );
};
export default Header;
