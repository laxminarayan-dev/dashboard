"use client";
import React, { useState } from "react";
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
  Menu,
} from "lucide-react";
import Image from "next/image";
const Navbar = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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
          path: "/financials/expenses", // This is used for router.push
          matchPaths: [
            "/financials/expenses",
            "/financials/salary",
            "/financials/income",
          ], // This is used for active highlighting
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
      <nav className="fixed w-full z-100 bg-white border-b border-slate-200 min-h-16 max-h-16">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex w-full items-center justify-between">
            <div className="flex md:hidden">
              <button
                aria-label="open-navbar"
                onClick={() => setIsMobileSidebarOpen(true)}
                type="button"
                className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 cursor-pointer"
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Box */}
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed z-101 top-0 left-0 min-h-screen border-r border-slate-300 p-4 transition-transform duration-300 ease-in-out
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:block md:w-64 h-screen bg-white text-slate-900  w-64 rounded-br-xl rounded-tr-xl md:rounded-none overflow-auto`}
        >
          <div className="flex justify-between items-center pr-2 text-slate-800 ">
            <Image src="/logo.png" width={70} height={70} alt="Logo" priority />
            <button
              aria-label="close-sidebar"
              className="md:hidden text-slate-900 cursor-pointer"
              onClick={() => setIsMobileSidebarOpen(false)}
            >
              <X />
            </button>
          </div>

          <div className="flex flex-col justify-between flex-1">
            <nav className="mx-1 space-y-6 ">
              {sidebarItems.map((section, index) => (
                <div key={section.title + index} className="space-y-3 ">
                  <label className="px-3 text-xs text-gray-500 uppercase  ">
                    {section.title}
                  </label>

                  {section.links.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <button
                        key={link.id + index}
                        type="button"
                        className={`flex w-full items-center px-3 py-2 transition-colors duration-300 transform rounded-lg text-gray-600 cursor-pointer ${
                          (link.matchPaths
                            ? link.matchPaths.includes(pathname)
                            : pathname === link.path) &&
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
export default React.memo(Navbar);
