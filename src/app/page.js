import DuaCard from "./components/ui/DuaCard";
import SubSection from "./components/ui/SubSection";
import baseUrl from "@/app/utils/baseurl";

const HomePage = async () => {
  const res = await fetch(`${baseUrl}/sub_category?cat_id=1`, {
    cache: "force-cache",
  });
  const singleDua = await res.json();
  console.log(singleDua);
  return (
    <div className="">
      {singleDua.map((dua, idx) => (
        <SubSection key={idx} subDua={dua} />
      ))}
    </div>
  );
};

export default HomePage;
