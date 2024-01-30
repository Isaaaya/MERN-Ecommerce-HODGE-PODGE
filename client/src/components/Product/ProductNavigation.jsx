import { Link } from "react-router-dom";

const ProductNavigation = ({ productCollection, category, subcategory }) => {
  return (
    <div className="flex items-end h-10 space-x-2 text-sm font-bold uppercase">
      {productCollection && category && subcategory && (
        <>
          <span className="text-black hover:underline">
            <Link
              className=""
              to={`/productCollections/${productCollection?._id}`}
            >
              {productCollection?.title}
            </Link>
          </span>
          <span>/</span>
          <span className="text-gray-800 hover:underline">
            <Link to={`/categories/${category?._id}`}>{category?.title}</Link>
          </span>
          <span>/</span>
          <span className="text-gray-500 hover:underline">
            <Link to={`/subcategories/${subcategory?._id}`}>
              {subcategory?.title}
            </Link>
          </span>
        </>
      )}
    </div>
  );
};

export default ProductNavigation;
