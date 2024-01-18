import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SideNavMenuContext } from "context/SideNavMenuContext";

const SideNavSubcategoryItem = ({ subcategory, setShowCategories }) => {
  const navigate = useNavigate();
  const { setIsSideNavMenuOpen } = useContext(SideNavMenuContext);
  return (
    <li key={subcategory?._id} className="w-[95%] self-end">
      <button
        className="text-[18px] text-gray-500"
        onClick={() => {
          navigate(`/subcategories/${subcategory?._id}`);
          setIsSideNavMenuOpen(false);
          setShowCategories(false);
        }}
      >
        {subcategory?.title}
      </button>
    </li>
  );
};

export default SideNavSubcategoryItem;
