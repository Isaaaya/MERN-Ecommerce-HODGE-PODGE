import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SideNavMenuContext } from "context/SideNavMenuContext";

const SideNavSubcategoryItem = ({ subcategory, setShowCategories }) => {
  const navigate = useNavigate();
  const { setIsSideNavMenuOpen } = useContext(SideNavMenuContext);
  if (!subcategory) return null;

  const { _id, title } = subcategory;

  const onClick = () => {
    navigate(`/subcategories/${_id}`);
    setIsSideNavMenuOpen(false);
    setShowCategories(false);
  };

  return (
    <li className="w-[95%] self-end">
      <button className="text-[18px] text-gray-500" onClick={onClick}>
        {title}
      </button>
    </li>
  );
};

export default SideNavSubcategoryItem;
