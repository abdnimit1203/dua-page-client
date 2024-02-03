import DuaCard from "./components/ui/DuaCard";

const HomePage = async () => {
  const res = await fetch("http://localhost:3003/api/dua?cat_id=1", {
    cache: "force-cache",
  });
  const singleDua = await res.json();
  console.log(singleDua);
  return (
    <div className="">
      {singleDua.map((dua, idx) => (
        <DuaCard key={idx} dua={dua} />
      ))}
    </div>
  );
};

export default HomePage;
