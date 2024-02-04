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
        <div className="bg-slate-100 flex lg:p-[2%] sm:gap-6 ">
          <div className="hidden lg:block lg:fixed z-10">
            <Navbar />
          </div>
          <div className=" flex-1 ">
            <div className="lg:fixed lg:w-[100%] lg:bg-slate-100 top-0">
              <TopNav />
            </div>
            <div className="flex flex-col lg:flex-row p-[2%] lg:p-0 gap-4">
              <div className=" lg:fixed lg:left-[8vw] top-[100px]">
                <CategoryList />
              </div>
              <div className="flex-1 2xl:pl-[30%] 2xl:pr-[18%] lg:pl-[40vw]">{children}</div>
              <div className="hidden 2xl:block 2xl:fixed right-5 top-[100px]">
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
