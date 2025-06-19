"use client";
import React, { useEffect, useState } from "react";
import { SunDim, Moon } from "lucide-react";
const Navbar = ({ setIsMobileSidebarOpen, isMobileSidebarOpen }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
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
  return (
    <>
      <nav className="relative bg-slate-100 shadow-sm dark:bg-gray-800 min-h-14">
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
    </>
  );
};
export default Navbar;
