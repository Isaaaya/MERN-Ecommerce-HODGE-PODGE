import { Link } from "react-router-dom";

import { ChevronDownIcon } from "components/Icons/index";

const CollectionLink = ({ collection }) => {
  return (
    <div className="h-full group">
      <Link
        className="flex items-start text-[#1f2242] tracking-wider  h-full w-max "
        to={`/productCollections/${collection?._id}`}
      >
        {collection?.title}{" "}
        {collection?.categories?.length > 0 && <ChevronDownIcon />}
      </Link>
      <div
        className={`border absolute left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-white py-3 hidden min-h-[150px] shadow-lg z-50 ${
          collection?.categories?.length > 0 && "group-hover:block"
        }`}
      >
        <div className="w-[95%] md:w-[85%] mx-auto flex gap-8">
          {collection?.categories?.map((category) => (
            <div key={category?._id}>
              <Link
                className="text-[#7b0b45] text-xl font-semibold"
                to={`/categories/${category?._id}`}
              >
                {category?.title}
              </Link>
              <div className="flex flex-col text-[#1f2242]/[0.8] text-lg">
                {category.subcategories?.map((subcategory) => (
                  <Link
                    className="text-lg text-start"
                    key={subcategory?._id}
                    to={`/subcategories/${subcategory?._id}`}
                  >
                    {subcategory?.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionLink;
