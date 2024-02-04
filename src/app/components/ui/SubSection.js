import DuaCard from "./DuaCard";

const SubSection = async ({ subDua }) => {
  console.log(subDua);
  const res = await fetch(
    `http://localhost:3003/api/dua?cat_id=${subDua.cat_id}&subcat_id=${subDua.subcat_id}`,
    { cache: "force-cache" }
  );
  const duaData = await res.json();
  return (
    <div>
      <div className="bg-white p-4 rounded-xl mb-4 font-semibold">
        <h2>
          <span className="main-clr">Section: </span> {subDua?.subcat_name_en}
        </h2>
      </div>
      {duaData.map((dua, idx) => (
        <DuaCard key={idx} dua={dua} />
      ))}
    </div>
  );
};

export default SubSection;
