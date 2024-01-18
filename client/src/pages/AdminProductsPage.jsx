import { lazy, useState, Suspense, useEffect } from "react";
import { useGetProducts } from "hooks/product/useGetProducts";

import { Spinner } from "components/Icons";
const AdminInstancesPage = lazy(() => import("pages/AdminInstancesPage"));

const AdminProductsPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const fieldsTitles = ["ID", "Title", "Collection", "Category", "Subcategory"];

  const {
    products,
    isProductsPlaceholderData,
    productsTotalPages,
    areProductsLoading,
    areProductsFetching,
  } = useGetProducts({ configData: { page, search, limit: 10 } });

  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      }
    >
      <AdminInstancesPage
        page={page}
        setPage={setPage}
        setSearch={setSearch}
        instances={products}
        areInstancesFetching={areProductsFetching}
        areInstancesLoading={areProductsLoading}
        fields={[
          "_id",
          "title",
          "productCollection.title",
          "category.title",
          "subcategory.title",
        ]}
        fieldsTitles={fieldsTitles}
        totalPages={productsTotalPages}
        actionOptions={["startUpdatingModeButton", "deleteInstanceButton"]}
        searchBy="Title or ID"
        isPlaceholderData={isProductsPlaceholderData}
        advancedUpdate={true}
      />
    </Suspense>
  );
};

export default AdminProductsPage;
