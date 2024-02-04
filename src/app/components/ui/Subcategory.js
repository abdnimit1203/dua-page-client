import Link from "next/link";
import baseUrl from "@/app/utils/baseurl";


const Subcategory = async (category_id) => {
  console.log(category_id.category_id);

  const res = await fetch(
    `${baseUrl}/sub_category?cat_id=${category_id.category_id}`,
    { cache: "force-cache" }
  );
  const subData = await res.json();
  console.log(subData);

  return (
    <>
      {subData.map((subCategory, idx) => (
        <li key={idx} className="step">
          <Link
            href={`/dua?cat_id=${subCategory.cat_id}&subcat_id=${subCategory.subcat_id}`}
          >
            {subCategory?.subcat_name_en}{" "}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Subcategory;
