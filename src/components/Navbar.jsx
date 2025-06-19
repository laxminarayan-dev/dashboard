"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  X,
  ShoppingCart,
  Package,
  ChefHat,
  ChartColumnBig,
  BadgeIndianRupee,
  UserRoundCog,
  ArrowLeftRight,
  LogOut,
  SunDim,
  Moon,
} from "lucide-react";
const Navbar = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const value = localStorage.getItem("theme");
    if (value === "dark") {
      setIsDarkMode(true);
    } else if (value === "light") {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };
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
      <nav className="fixed w-full z-100 bg-slate-100 shadow-sm dark:bg-gray-800 min-h-16 max-h-16">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex w-full items-center justify-between">
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileSidebarOpen(true)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <button className="flex">
                <label
                  htmlFor="DarkModeToggle"
                  className={`relative block h-8 w-14 rounded-full transition-colors [-webkit-tap-highlight-color:_transparent] ${
                    isDarkMode ? "bg-gray-100" : "bg-gray-900"
                  }`}
                >
                  <input
                    type="checkbox"
                    id="DarkModeToggle"
                    className="peer sr-only"
                    defaultChecked={isDarkMode}
                    onChange={toggleDarkMode}
                  />

                  <span
                    className={`flex h-full p-2 text-lg items-center transition-all duration-200 ${
                      isDarkMode
                        ? "text-gray-900 justify-end"
                        : "text-yellow-300 justify-start"
                    }`}
                  >
                    {!isDarkMode ? <SunDim /> : <Moon />}
                  </span>
                </label>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Box */}
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed z-101 top-0 left-0 h-screen bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:block md:w-64 h-screen bg-slate-100 dark:bg-slate-800 w-64 rounded-br-xl rounded-tr-xl md:rounded-none`}
        >
          <div className="flex justify-between items-center pr-2 text-slate-800 dark:text-slate-200">
            <p>Logo</p>
            <button
              className="md:hidden"
              onClick={() => setIsMobileSidebarOpen(false)}
            >
              <X />
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
                          pathname == link.path &&
                          "bg-gradient-to-r from-indigo-400/50 via-indigo-400/30 to-indigo-500/0 "
                        }`}
                        onClick={() => {
                          router.push(link.path);
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

        {/* Overlay for mobile sidebar */}
        <div
          className={`absolute bg-slate-900/70 z-100 md:hidden top-0 left-0  w-full h-screen ${
            isMobileSidebarOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      </div>
    </>
  );
};
export default Navbar;
