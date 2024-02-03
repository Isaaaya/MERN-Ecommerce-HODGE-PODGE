import { ProductCard } from "components/Product";
import { ProductCardSkeleton } from "components/Skeletons";

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
      <section className="grid grid-cols-2 gap-4 py-4 place-items-start lg:grid-cols-4 w-fit">
        {areProductsLoading &&
          Array.from({ length: 10 }, (_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        {products?.length > 0 &&
          !areProductsLoading &&
          products?.map((product) => (
            <ProductCard
              key={product?._id}
              productId={product?._id}
              title={product?.title}
              images={product?.images}
              productCollection={product?.productCollection}
              price={product?.price}
              productAvailableQuantity={product?.quantity}
            />
          ))}
      </section>
    );
};

export default ProductsFeed;
