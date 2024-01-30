import { useGetProduct } from "hooks/product/useGetProduct";
import { useGetProducts } from "hooks/product/useGetProducts";
import { useScrollToTop } from "hooks/scrollToTop/useScrollToTop";
import { Navigate } from "react-router-dom";

import {
  ProductsFeed,
  ProductInfo,
  ProductNavigation,
} from "components/Product";
import { ProductImagesPanel } from "components/Image";
import { Container } from "layout";

const ProductPage = () => {
  useScrollToTop();
  const { product } = useGetProduct();
  const { products } = useGetProducts({ configData: { limit: 4 } });

  if (product === null) return <Navigate to="/" />;
  else
    return (
      <section>
        <Container extraStyles="text-[#5a5d74] space-y-5">
          <ProductNavigation
            productCollection={product?.productCollection}
            category={product?.category}
            subcategory={product?.subcategory}
          />
          <div className="flex flex-col gap-6 pb-5 md:flex-row">
            <ProductImagesPanel
              images={product?.images}
              title={product?.title}
            />
            <ProductInfo
              product={product}
              productAvailableQuantity={product?.quantity}
            />
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
