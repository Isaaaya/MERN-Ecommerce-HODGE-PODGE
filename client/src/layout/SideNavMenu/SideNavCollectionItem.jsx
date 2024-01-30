import { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SideNavMenuContext } from "context/SideNavMenuContext";
import { useCloseWhenWidthIsMoreThan } from "hooks/sideNavMenu/useCloseWhenWidthIsMoreThan";
import { useClickOutside } from "hooks/clickOutside/useClickOutside";

import { ChevronUpIcon, ChevronDownIcon } from "assets/icons";
import { SideNavCategoriesList } from "layout";

const SideNavCollectionItem = ({ collection }) => {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);
  const { setIsSideNavMenuOpen } = useContext(SideNavMenuContext);
  const wrapperRef = useRef();

  useCloseWhenWidthIsMoreThan(767, setShowCategories);
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

  useClickOutside(wrapperRef, () => setShowCategories(false));

  return (
    <>
      <li ref={wrapperRef} className="w-full pb-2 border-b-2">
        <button
          className="flex items-center justify-between w-full tracking-wider text-gray-600"
          onClick={handleCollection}
        >
          {collection?.title}
          <span className="text-orange-600" onClick={handleShowCategories}>
            {doesCollectionHaveCategories &&
              (showCategories ? (
                <ChevronUpIcon width="27" height="27" />
              ) : (
                <ChevronDownIcon width="27" height="27" />
              ))}
          </span>
        </button>
      </li>
      {showCategories && doesCollectionHaveCategories && (
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
