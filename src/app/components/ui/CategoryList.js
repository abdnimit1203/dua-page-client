import Subcategory from "./Subcategory";
import Image from "next/image";
import icon from "@/app/assets/hug.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import baseUrl from "@/app/utils/baseurl";

const CategoryList = async () => {
  const res = await fetch(`${baseUrl}/category`, {
    cache: "force-cache",
  });
  const data = await res.json();
 
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className=" lg:hidden w-full text-lg font-semibold bg-white rounded-xl p-4 mb-4"
        >
          <FaBars className="inline mr-3" />
          Dua's Category
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className=" max-h-[80vh] rounded-b-xl lg:w-80 xl:w-96 ">
          <h2 className="main-bg rounded-t-xl text-white font-semibold md:text-lg text-center py-5">
            Categories
          </h2>
          <div className="flex flex-col bg-white p-4 rounded-b-xl">
            <form className="relative">
              <button
                type="submit"
                className="absolute left-0 top-0 mt-3 ml-4  bg-white "
              >
                <IoIosSearch className="text-2xl" />
              </button>

              <input
                className=" bg-gray-100 lg:bg-white h-12 px-5 pr-16 rounded-lg text-sm focus:outline-none float-right w-full border mb-6 pl-[50px]"
                type="search"
                name="search"
                placeholder="Search Categories"
              />
            </form>

            {/* Search button ends */}
            <div className="overflow-y-scroll px-2 max-h-[80vh]">
              {data.map((category) => (
                <div className="collapse mb-3" key={category?.id}>
                  <input type="radio" name="my-accordion-1" />

                  <div className="flex  bg-slate-100 px-2 py-4 rounded-xl justify-between collapse-title">
                    <Link href={`/dua?cat_id=${category.cat_id}`}>
                      <div className="flex gap-4  items-center">
                        <div className="">
                          <Image
                            src={icon}
                            alt="icon"
                            height={30}
                            width={30}
                            className="w-full bg-slate-300 p-2 rounded-lg"
                          ></Image>
                        </div>
                        <div className="space-y-1">
                          <p className="main-clr font-semibold ">
                            {category?.cat_name_en}
                          </p>

                          <p className="text-gray-400 text-sm">
                            Subcategory: {category?.no_of_subcat}
                          </p>
                        </div>
                      </div>
                    </Link>
                    <div className="">
                      <p className="font-bold ">{category?.no_of_dua}</p>
                      <p className="text-gray-400">Duas</p>
                    </div>
                  </div>

                  <div className=" px-2 collapse-content ">
                    <ul>
                      <div className="p-1">
                        <ul className="steps steps-vertical ">
                          <Subcategory category_id={category?.cat_id} />
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
