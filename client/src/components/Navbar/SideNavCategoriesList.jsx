import React from "react";
import { SideNavCategoryItem } from "components/Navbar/index";

const SideNavCategoriesList = ({ collection, setShowCategories }) => {
  return (
    <ul className="flex flex-col justify-end w-full space-y-8">
      {collection?.categories?.map((category) => (
        <SideNavCategoryItem
          setShowCategories={setShowCategories}
          key={category?._id}
          category={category}
        />
      ))}
    </ul>
  );
};

export default SideNavCategoriesList;
