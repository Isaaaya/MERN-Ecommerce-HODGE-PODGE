import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SideNavMenuContext } from "context/SideNavMenuContext";

import { ChevronUpIcon, ChevronDownIcon } from "components/Icons/index";
import { SideNavCategoriesList } from "components/Navbar/index";

const SideNavCollectionItem = ({ collection }) => {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);
  const { setIsSideNavMenuOpen } = useContext(SideNavMenuContext);

  const doesCollectionHaveCategories = collection?.categories?.length > 0;

  const handleCollection = () => {
    if (!showCategories) setShowCategories((prevState) => !prevState);
    else {
      navigate(`/productCollections/${collection?._id}`);
      setIsSideNavMenuOpen(false);
      setShowCategories(false);
    }
  };

  const handleShowCategories = (e) => {
    e.stopPropagation();
    setShowCategories((prevState) => !prevState);
  };

  return (
    <>
      <li className="w-full pb-2 border-b-2">
        <button
          className="flex items-center justify-between w-full tracking-wider text-gray-600"
          onClick={handleCollection}
        >
          {collection?.title}
          <span className="text-orange-600" onClick={handleShowCategories}>
            {doesCollectionHaveCategories &&
              (showCategories ? <ChevronUpIcon /> : <ChevronDownIcon />)}
          </span>
        </button>
      </li>
      {showCategories && (
        <SideNavCategoriesList
          key={collection?._id}
          collection={collection}
          setShowCategories={setShowCategories}
        />
      )}
    </>
  );
};

export default SideNavCollectionItem;
