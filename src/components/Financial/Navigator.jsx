// components/FinancialNav.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigator() {
  const pathname = usePathname();

  const getActiveClass = (segment) =>
    pathname.includes(`/financials/${segment}`)
      ? "bg-slate-800 text-white py-2 px-4 rounded-full"
      : "bg-stone-100 text-gray-800 py-2 px-4 rounded-full";

  return (
    <div className="w-full flex flex-row justify-center items-center">
      <div className="bg-white w-fit p-2 py-3 rounded-full border border-gray-300 shadow-sm mb-6 mt-2">
        <div className="flex justify-center items-center gap-6">
          <Link href="/financials/expenses">
            <span className={getActiveClass("expenses")}>Expenses</span>
          </Link>
          <Link href="/financials/income">
            <span className={getActiveClass("income")}>Income</span>
          </Link>
          <Link href="/financials/salary">
            <span className={getActiveClass("salary")}>Salaries</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
