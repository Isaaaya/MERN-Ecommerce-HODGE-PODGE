import { SideNavSubcategoryItem } from "layout";

const SideNavSubcategoriesList = ({ category, setShowCategories }) => {
  return (
    <ul className="flex flex-col justify-end text-start">
      {category?.subcategories?.map((subcategory) => (
        <SideNavSubcategoryItem
          key={subcategory?._id}
          setShowCategories={setShowCategories}
          subcategory={subcategory}
        />
      ))}
    </ul>
  );
};

export default SideNavSubcategoriesList;
