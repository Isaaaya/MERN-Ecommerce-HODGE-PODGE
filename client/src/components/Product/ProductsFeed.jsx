import { Link } from "react-router-dom";

import { ProductCard } from "components/Product/index";
import { ProductCardSkeleton } from "../Skeletons";

const ProductsFeed = ({
  products,
  areProductsLoading,
  hasProductsErrorOccurred,
}) => {
  if (hasProductsErrorOccurred)
    return (
      <div className="w-[70%] mx-auto text-center">
        Something went wrong on the server. Please, refresh, or come back later.
      </div>
    );
  if (products?.length < 1)
    return (
      <div className="w-[70%] mx-auto text-center">No products found.</div>
    );
  else
    return (
      <section className="grid grid-cols-2 gap-4 py-5 place-items-start lg:grid-cols-4">
        {areProductsLoading &&
          [...Array(2)]
            .fill()
            .map((_, index) => <ProductCardSkeleton key={index} />)}
        {products?.length > 0 &&
          products?.map((product) => (
            <Link to={`/products/${product?._id}`} key={product?._id}>
              <ProductCard {...product} />
            </Link>
          ))}
      </section>
    );
};

export default ProductsFeed;
