import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Settings from "./components/shared/Settings";
import CategoryList from "./components/ui/CategoryList";
import TopNav from "./components/ui/TopNav";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "DUA APP",
  description: "Dua for islamic muslim people",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-100 flex lg:p-[2%] gap-6 ">
          <div className="hidden lg:block">
            <Navbar />
          </div>
          <div className=" flex-1 ">
            <div className="">
              <TopNav />
            </div>
            <div className="flex flex-col lg:flex-row p-[2%] lg:p-0 gap-4">
              <div className="">
                <CategoryList />
              </div>
              <div className="flex-1">{children}</div>
              <div className="hidden 2xl:block">
                <Settings />
              </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </body>
    </html>
  );
}
