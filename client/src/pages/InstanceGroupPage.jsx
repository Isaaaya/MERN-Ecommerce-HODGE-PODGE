import { Navigate } from "react-router-dom";

import { ProductsFeed } from "Components/Product";
import { SortingSelector } from "Components/Sorting";
import { FilterButton } from "Components/Filters";
import { SearchBar } from "Components/Common";
import Pagination from "Components/Pagination/Pagination";
import { CollectionBanner } from "Components/CollectionBanner";
import { CollectionBannerSkeleton } from "Components/Skeletons";
import { Container } from "layout";
import { useInstanceGroupPage } from "hooks/instanceGroupPage/useInstanceGroupPage";

const InstanceGroupPage = () => {
  const {
    products,
    totalPages,
    productsMaxPrice,
    productsMinPrice,
    stillRetrievingProducts,
    isProductsPlaceholderData,
    setSearch,
    setSortingType,
    filters,
    setFilters,
    groupTypeInstance,
    isGroupTypeInstanceLoading,
    page,
    setPage,
  } = useInstanceGroupPage();

  if (groupTypeInstance === null) return <Navigate to="/" />;
  return (
    <section className="z-10">
      <Container extraStyles="space-y-10 py-10">
        <h1 className="text-5xl text-center text-darkMain">
          {groupTypeInstance?.title}
        </h1>
        {groupTypeInstance?.banner?.caption ? (
          <CollectionBanner banner={groupTypeInstance?.banner} />
        ) : isGroupTypeInstanceLoading ? (
          <CollectionBannerSkeleton />
        ) : null}
        <SearchBar
          areInstancesFetching={stillRetrievingProducts}
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
          areProductsLoading={stillRetrievingProducts}
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

export default InstanceGroupPage;
