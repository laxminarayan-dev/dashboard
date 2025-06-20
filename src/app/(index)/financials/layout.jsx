import Navigator from "@/components/Financial/Navigator";

export default function FinancialsLayout({ children }) {
  return (
    <div>
      <h1 className="text-3xl my-2 text-gray-800 font-bold">
        Financial Management
      </h1>
      <p className="text-gray-600 text-sm mb-4">
        Manage your financial data here.
      </p>
      <Navigator />
      {children}
    </div>
  );
}
