"use client";
import {
  ShoppingCart,
  Package,
  ChefHat,
  ChartColumnBig,
  BadgeIndianRupee,
  UserRoundCog,
  ArrowLeftRight,
  LogOut,
} from "lucide-react";

const Sidebar = ({
  setIsMobileSidebarOpen,
  sidebarRef,
  isMobileSidebarOpen,
  currentLink,
  setCurrentLink,
}) => {
  const sidebarItems = [
    {
      title: "",
      links: [
        {
          id: "dashboard",
          label: "Dashboard",
          icon: ChartColumnBig,
          path: "/",
        },
      ],
    },
    {
      title: "Manage",
      links: [
        {
          id: "financials",
          label: "Financials",
          icon: BadgeIndianRupee,
          path: "/financials",
        },
        {
          id: "inventory",
          label: "Inventory",
          icon: Package,
          path: "/inventory",
        },
        { id: "staff", label: "Staff", icon: UserRoundCog, path: "/staff" },
      ],
    },
    {
      title: "Update",
      links: [{ id: "menu", label: "Menu", icon: ChefHat, path: "/menu" }],
    },
    {
      title: "Track",
      links: [
        { id: "orders", label: "Orders", icon: ShoppingCart, path: "/orders" },
        {
          id: "Transactions",
          label: "Transactions",
          icon: ArrowLeftRight,
          path: "/transactions",
        },
      ],
    },
    {
      title: "Settings",
      links: [{ id: "logout", label: "Logout", icon: LogOut, path: "/logout" }],
    },
  ];

  return (
    <>
      <div
        ref={sidebarRef}
        className={`fixed z-101 top-0 left-0 h-screen bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:block md:w-64 h-screen bg-slate-100 dark:bg-slate-800 w-64 rounded-br-xl rounded-tr-xl md:rounded-none`}
      >
        <div className="flex justify-between items-center pr-2 text-slate-800 dark:text-slate-200">
          <img
            className="w-auto h-7"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
          <button
            className="md:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="mx-1 space-y-6 ">
            {sidebarItems.map((section, index) => (
              <div key={section.title + index} className="space-y-3 ">
                <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400 ">
                  {section.title}
                </label>

                {section.links.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.id + index}
                      type="button"
                      className={`flex w-full items-center px-3 py-2 transition-colors duration-300 transform rounded-lg text-gray-600 dark:text-gray-200 cursor-pointer ${
                        currentLink == link.path &&
                        "bg-gradient-to-r from-indigo-400/50 via-indigo-400/30 to-indigo-500/0 "
                      }`}
                      onClick={() => {
                        setCurrentLink(link.path);
                        navigate(link.path);
                        if (isMobileSidebarOpen) {
                          setIsMobileSidebarOpen(false);
                        }
                      }}
                    >
                      <Icon className="w-5 h-5" />

                      <span className="mx-2 text-sm font-medium">
                        {link.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
      </div>
      <div className="w-0 md:w-64"></div>
    </>
  );
};
export default Sidebar;
