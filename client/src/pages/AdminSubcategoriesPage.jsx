import { lazy, useState, Suspense, useEffect } from "react";
import { useListInstances } from "hooks/instance/useListInstances";

import { Spinner } from "components/Icons";
import { CreateInstanceForm } from "components/Instance/index";
const AdminInstancesPage = lazy(() => import("pages/AdminInstancesPage"));

const AdminSubcategoriesPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const {
    instancesData: subcategoriesData,
    isInstancesPlaceholderData: isSubcategoriesPlaceholderData,
    areInstancesFetching,
    areInstancesLoading,
  } = useListInstances({
    configData: { instanceType: "subcategories", page, search, limit: 10 },
  });

  const { instancesData: categoriesData } = useListInstances({
    configData: { instanceType: "categories" },
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
        instances={subcategoriesData?.subcategories}
        areInstancesFetching={areInstancesFetching}
        areInstancesLoading={areInstancesLoading}
        fields={["_id", "title", "productCollection.title", "category.title"]}
        fieldsTitles={["ID", "Title", "Collection", "Category"]}
        totalPages={subcategoriesData?.totalPages}
        actionOptions={["startUpdatingModeButton", "deleteInstanceButton"]}
        searchBy="Title or ID"
        isPlaceholderData={isSubcategoriesPlaceholderData}
      >
        <CreateInstanceForm
          caption="Add Subcategory"
          instanceType="subcategories"
          select
          selectInstances={categoriesData?.categories}
        />
      </AdminInstancesPage>
    </Suspense>
  );
};

export default AdminSubcategoriesPage;
