import { useParams } from "react-router-dom";
import { useGetFilteredProducts } from "hooks/product/useGetFilteredProducts";

import { SortingSelector } from "components/Sorting/index";
import { ProductsFeed } from "components/Product/index";
import { FilterButton } from "components/Filters/index";
import Pagination from "components/Pagination/Pagination";
import { SearchBar } from "components/common/index";
import { Container } from "components/Wrappers";

const CategoryPage = () => {
  const { categoryId } = useParams();
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
    instanceId: categoryId,
    searchBy: "category",
  });

  return (
    <section>
      <Container extraStyles="space-y-10 py-10">
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

export default CategoryPage;
