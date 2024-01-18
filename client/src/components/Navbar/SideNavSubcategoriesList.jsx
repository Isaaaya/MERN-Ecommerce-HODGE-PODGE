import React from "react";
import { SideNavSubcategoryItem } from "components/Navbar/index";

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
