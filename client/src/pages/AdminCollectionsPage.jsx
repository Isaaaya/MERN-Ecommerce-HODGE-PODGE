import { lazy, useState, Suspense } from "react";
import { useListInstances } from "hooks/instance/useListInstances";

import { Spinner } from "components/Icons";
import { CreateInstanceForm } from "components/Instance/index";
import { useEffect } from "react";
const AdminInstancesPage = lazy(() => import("pages/AdminInstancesPage"));

const AdminCollectionsPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const {
    instancesData: collectionsData,
    isInstancesPlaceholderData: isCollectionsPlaceholderData,
    areInstancesLoading,
    areInstancesFetching,
  } = useListInstances({
    configData: { instanceType: "productCollections", page, search, limit: 10 },
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
        instances={collectionsData?.productCollections}
        areInstancesFetching={areInstancesFetching}
        areInstancesLoading={areInstancesLoading}
        fields={["_id", "title"]}
        fieldsTitles={["ID", "Title"]}
        totalPages={collectionsData?.totalPages}
        actionOptions={[
          "startUpdatingModeButton",
          "handleBannerButton",
          "deleteInstanceButton",
        ]}
        searchBy="Title or ID"
        isPlaceholderData={isCollectionsPlaceholderData}
      >
        <CreateInstanceForm
          caption="Add Collection"
          instanceType="productCollections"
        />
      </AdminInstancesPage>
    </Suspense>
  );
};

export default AdminCollectionsPage;
