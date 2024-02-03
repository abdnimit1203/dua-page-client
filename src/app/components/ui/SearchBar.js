import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className=" relative mx-auto text-gray-600">
      <input
        className=" bg-gray-100 lg:bg-white h-12 px-5 pr-16 rounded-lg text-sm focus:outline-none float-right"
        type="search"
        name="search"
        placeholder="Search by Dua Name"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-2 mr-2 btn btn-sm bg-white lg:bg-slate-200 "
      >
        <IoIosSearch className="text-xl text-slate-500" />
      </button>
    </div>
  );
};

export default SearchBar;
