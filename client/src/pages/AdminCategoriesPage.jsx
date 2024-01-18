import { lazy, useState, Suspense, useEffect } from "react";
import { useListInstances } from "hooks/instance/useListInstances";

import { Spinner } from "components/Icons";
import { CreateInstanceForm } from "components/Instance/index";
const AdminInstancesPage = lazy(() => import("pages/AdminInstancesPage"));

const AdminCategoriesPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const {
    instancesData: categoriesData,
    isInstancesPlaceholderData: isCategoriesPlaceholderData,
    areInstancesFetching,
    areInstancesLoading,
  } = useListInstances({
    configData: { instanceType: "categories", page, search, limit: 10 },
  });

  const { instancesData: collectionsData } = useListInstances({
    configData: { instanceType: "productCollections" },
  });

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
        instances={categoriesData?.categories}
        areInstancesFetching={areInstancesFetching}
        areInstancesLoading={areInstancesLoading}
        fields={["_id", "title", "productCollection.title"]}
        fieldsTitles={["ID", "Title", "Collection"]}
        totalPages={categoriesData?.totalPages}
        actionOptions={["startUpdatingModeButton", "deleteInstanceButton"]}
        searchBy="Title or ID"
        isPlaceholderData={isCategoriesPlaceholderData}
      >
        <CreateInstanceForm
          caption="Add Category"
          instanceType="categories"
          select
          selectInstances={collectionsData?.productCollections}
        />
      </AdminInstancesPage>
    </Suspense>
  );
};

export default AdminCategoriesPage;
