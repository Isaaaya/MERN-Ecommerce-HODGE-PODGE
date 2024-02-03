import { useGetProducts } from "hooks/product/useGetProducts";

import { ProductsFeed } from "components/Product";
import { Banner, WhyUs } from "components/Common/index";
import { Container } from "layout";
import { useScrollToTop } from "hooks/scrollToTop/useScrollToTop";

const HomePage = () => {
  useScrollToTop();
  const { products, hasProductsErrorOccurred, areProductsLoading } =
    useGetProducts({ configData: { limit: 12 } });

  return (
    <main>
      <Banner />
      <Container extraStyles="space-y-8">
        <p className="mt-10 text-2xl font-semibold">New Deals for Today</p>
        <ProductsFeed
          hasProductsErrorOccurred={hasProductsErrorOccurred}
          products={products}
          areProductsLoading={areProductsLoading}
        />
      </Container>
      <WhyUs />
    </main>
  );
};

export default HomePage;
