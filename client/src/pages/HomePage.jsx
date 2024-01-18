import { useGetProducts } from "hooks/product/useGetProducts";

import { ProductsFeed } from "components/Product/index";
import {
  Banner,
  FeauturedInfo,
  WhyUs,
} from "components/HomePageSections/index";
import { Container } from "components/Wrappers";

const HomePage = () => {
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
        <FeauturedInfo />
      </Container>
      <WhyUs />
    </main>
  );
};

export default HomePage;
