import Image from "next/image";
import loader from "./assets/loader.png";

const loading = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 w-full bg-white rounded-xl p-4 mb-4">
        <div className="flex gap-4 items-center w-full">
          <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
          <div className="flex flex-col gap-4 w-full">
            <div className="skeleton h-4 w-[80%]"></div>
          </div>
        </div>
        <div className="skeleton h-6 mb-w-full"></div>
        <div className="skeleton h-6 mb-w-full"></div>
        <div className="skeleton h-6 mb-w-full"></div>
        <div className="skeleton h-2 w-28 mt-10"></div>
        <div className="flex gap-4 items-center w-full justify-between">
          <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
          <div className="flex gap-6">
            <div className="skeleton w-8 h-8 rounded-xl shrink-0"></div>
            <div className="skeleton w-8 h-8 rounded-xl shrink-0"></div>
            <div className="skeleton w-8 h-8 rounded-xl shrink-0"></div>
            <div className="skeleton w-8 h-8 rounded-xl shrink-0"></div>
            <div className="skeleton w-8 h-8 rounded-xl shrink-0"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full bg-white rounded-xl p-4 mb-4">
        <div className="flex gap-4 items-center w-full">
          <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
          <div className="flex flex-col gap-4 w-full">
            <div className="skeleton h-4 w-[80%]"></div>
          </div>
        </div>
        <div className="skeleton h-6 mb-w-full"></div>
        <div className="skeleton h-6 mb-w-full"></div>
        <div className="skeleton h-6 mb-w-full"></div>
        <div className="skeleton h-2 w-28 mt-10"></div>
        <div className="flex gap-4 items-center w-full justify-between">
          <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
          <div className="flex gap-6">
            <div className="skeleton w-8 h-8 rounded-xl shrink-0"></div>
            <div className="skeleton w-8 h-8 rounded-xl shrink-0"></div>
            <div className="skeleton w-8 h-8 rounded-xl shrink-0"></div>
            <div className="skeleton w-8 h-8 rounded-xl shrink-0"></div>
            <div className="skeleton w-8 h-8 rounded-xl shrink-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
