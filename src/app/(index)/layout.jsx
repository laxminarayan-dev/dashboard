import "../globals.css";
import Navbar from "@/components/Global/Navbar";

export const metadata = {
  title: "MrHalwai Admin Dashboard",
  description: "Admin dashboard for MrHalwai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-stone-100 text-slate-900 min-h-screen ">
          <div className="flex-1 flex flex-col">
            <Navbar />
            <div className="overflow-y-scroll h-screen p-5">
              <div className="ml-0 mt-18 md:ml-64">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
