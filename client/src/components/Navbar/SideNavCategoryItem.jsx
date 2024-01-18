import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SideNavMenuContext } from "context/SideNavMenuContext";

import { PlusIcon, MinusIcon } from "components/Icons/index";
import { SideNavSubcategoriesList } from "components/Navbar/index";

const SideNavCategoryItem = ({ category, setShowCategories }) => {
  const navigate = useNavigate();
  const [showSubcategories, setShowSubcategories] = useState(false);
  const { setIsSideNavMenuOpen } = useContext(SideNavMenuContext);

  return (
    <li className="w-[95%] self-end space-y-6">
      <button
        onClick={() => {
          if (!showSubcategories)
            setShowSubcategories((prevState) => !prevState);
          else {
            navigate(`/categories/${category?._id}`);
            setShowCategories(false);
            setIsSideNavMenuOpen(false);
            setShowSubcategories(false);
          }
        }}
        className="flex items-center justify-between w-full text-gray-500"
      >
        {category?.title}
        <p
          onClick={(e) => {
            e.stopPropagation();
            setShowSubcategories((prevState) => !prevState);
          }}
        >
          {category?.subcategories?.length > 0 &&
            (showSubcategories ? <MinusIcon /> : <PlusIcon />)}
        </p>
      </button>
      {showSubcategories && category?.subcategories?.length > 0 && (
        <SideNavSubcategoriesList
          key={category?._id}
          category={category}
          setShowCategories={setShowCategories}
        />
      )}
    </li>
  );
};

export default SideNavCategoryItem;
