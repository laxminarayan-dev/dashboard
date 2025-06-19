import "../globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "MrHalwai Admin Dashboard",
  description: "Admin dashboard for MrHalwai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-100 dark:bg-slate-900 min-h-[100-dvh] ">
          <div className="flex-1 flex flex-col">
            <Navbar />
            <div className="overflow-y-scroll h-screen p-5">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
