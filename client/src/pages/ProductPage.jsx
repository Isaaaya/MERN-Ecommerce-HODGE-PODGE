import { useParams } from "react-router-dom";
import { useGetProduct } from "hooks/product/useGetProduct";
import { useGetProducts } from "hooks/product/useGetProducts";

import {
  ProductsFeed,
  ProductInfo,
  ProductNavigation,
} from "components/Product/index";
import { ProductImagesManager } from "components/Image/index";
import { ProductInfoSkeleton } from "components/Skeletons/index";
import { Container } from "components/Wrappers";

const ProductPage = () => {
  const { productId } = useParams();
  const { product } = useGetProduct({ productId });
  const { products } = useGetProducts({ configData: { limit: 4 } });

  return (
    <section>
      <Container extraStyles="text-[#5a5d74] space-y-7">
        <ProductNavigation
          productCollection={product?.productCollection}
          category={product?.category}
          subcategory={product?.subcategory}
        />
        <div className="flex flex-col gap-10 pb-5 md:flex-row">
          <ProductImagesManager
            images={product?.images}
            title={product?.title}
          />
          {product?._id ? (
            <ProductInfo product={product} />
          ) : (
            <ProductInfoSkeleton />
          )}
        </div>
        <p className="text-3xl text-center text-darkMain">
          You might also like
        </p>
        <ProductsFeed products={products?.slice(0, 4)} />
      </Container>
    </section>
  );
};

export default ProductPage;
