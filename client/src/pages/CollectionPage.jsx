import { useParams } from "react-router-dom";
import { useGetInstance } from "hooks/instance/useGetInstance";
import { useGetFilteredProducts } from "hooks/product/useGetFilteredProducts";

import { ProductsFeed } from "components/Product/index";
import { SortingSelector } from "components/Sorting/index";
import { FilterButton } from "components/Filters/index";
import { SearchBar } from "components/common/index";
import Pagination from "components/Pagination/Pagination";
import { CollectionBanner } from "components/CollectionBanner/index";
import { CollectionBannerSkeleton } from "components/Skeletons/index";
import { Container } from "components/Wrappers";

const CollectionPage = () => {
  const { productCollectionId } = useParams();
  const {
    page,
    setPage,
    setSearch,
    filters,
    setFilters,
    setSortingType,
    products,
    totalPages,
    productsMaxPrice,
    productsMinPrice,
    areProductsLoading,
    areProductsFetching,
    isProductsPlaceholderData,
  } = useGetFilteredProducts({
    instanceId: productCollectionId,
    searchBy: "productCollection",
  });

  const {
    groupTypeInstance: collection,
    isGroupTypeInstanceLoading: isCollectionLoading,
  } = useGetInstance({
    instanceType: "productCollections",
    instanceId: productCollectionId,
  });

  return (
    <section>
      <Container extraStyles="space-y-10 py-10">
        <h1 className="text-5xl text-center text-darkMain">
          {collection?.title}
        </h1>
        {collection?.banner?.caption ? (
          <CollectionBanner banner={collection?.banner} />
        ) : isCollectionLoading ? (
          <CollectionBannerSkeleton />
        ) : null}
        <SearchBar
          areInstancesFetching={areProductsFetching}
          searchBy="Title or ID"
          setSearch={setSearch}
        />
        <div className="flex items-center justify-between">
          <SortingSelector setSortingType={setSortingType} />
          <FilterButton
            maxMinPrice={{
              max: productsMaxPrice,
              min: productsMinPrice,
            }}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
        <ProductsFeed
          products={products}
          areProductsLoading={areProductsLoading}
        />
        <Pagination
          page={page}
          setPage={setPage}
          isPlaceholderData={isProductsPlaceholderData}
          totalPages={totalPages}
        />
      </Container>
    </section>
  );
};

export default CollectionPage;
