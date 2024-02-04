import DuaCard from "../components/ui/DuaCard";
import SubSection from "../components/ui/SubSection";

export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" },{ id: "4" }, { id: "5" }, { id: "6" },{ id: "7" }, { id: "8"}, { id: "9" },{ id: "10" }];
  }
const Dua = async ({ searchParams }) => {
  console.log(searchParams);
  const res = await fetch(`http://localhost:3003/api/sub_category?cat_id=${searchParams.cat_id}`,{ cache: "force-cache"})
  const subDuaData = await res.json();
  console.log(subDuaData.length);
  return (
    <div className="">
      {/* <div className="flex flex-col justify-center items-center font-semibold w-full border-4 borer">
        <h2>DUA WILL BE HERE</h2>
        <p>Selected query:</p>
        <p>Category : {searchParams.cat_id}</p>
        <p>Subcategory : {searchParams.subcat_id}</p>
        <p>Total Dua : {subDuaData.length}</p>
      </div> */}
      <div>
        {
            subDuaData.map((subDua,idx)=><SubSection key={idx} subDua={subDua}/>)
        }
        </div>
    </div>
  );
};

export default Dua;
