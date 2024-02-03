import profile from "@/app/assets/profile.png";
import allduas from "@/app/assets/all-duas.jpg";
import logo from "@/app/assets/logo.png";

import Image from "next/image";
import { IoLanguageSharp } from "react-icons/io5";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import DrawerSettings from "../ui/DrawerSettings";
import SearchBar from "./SearchBar";

const TopNav = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 w-full  items-center justify-end mb-4 p-4 bg-white lg:bg-transparent">
      <div className="col-span-1 flex items-center gap-4 ">
      <Image src={logo} alt="logo" width={50} height={50} className="lg:hidden"></Image>
        <h1 className="text-xl lg:text-2xl font-bold  ">Dua Page</h1>
      </div>
      {/* Search bar code starts here */}
      <div className="col-span-2 hidden sm:block">
        <SearchBar />
      </div>
      {/* profile and setting section */}
      <div className="  col-span-1 flex w-full items-center justify-end pr-4">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className=" m-1">
            <Image src={profile} alt="logo" width={45} height={45}></Image>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Support Us</a>
            </li>
            <li>
              <a>Download Dua App</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Thanks & Credits</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <div className="block 2xl:hidden">
          <DrawerSettings />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
