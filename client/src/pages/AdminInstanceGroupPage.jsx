import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { useAdminInstanceGroupPage } from "hooks/adminInstanceGroupPage/useAdminInstanceGroupPage";

import { Spinner } from "assets/icons";
import { InstancesTable } from "components/InstancesTable";
import { CreateInstanceForm } from "components/Instance";
import { SearchBar } from "../components/Common/index";
import Pagination from "components/Pagination/Pagination";
import { Container } from "layout";
import { InstancesTableSkeleton } from "components/Skeletons";

const AdminInstanceGroupPage = () => {
  const {
    instancesData,
    instanceType,
    isInstancesPlaceholderData,
    stillRetrievingData,
    instanceGroupData,
    parentInstancesData,
    instancesAreFound,
    page,
    setPage,
    search,
    setSearch,
  } = useAdminInstanceGroupPage();

  if (!stillRetrievingData && !instancesData) return <Navigate to="/" />;

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <Spinner width="25" height="25" />
        </div>
      }
    >
      <section className="min-h-fit">
        <Container extraStyles="space-y-10 pb-10 h-full">
          <SearchBar
            search={search}
            setSearch={setSearch}
            searchBy={instanceGroupData?.searchBy}
          />
          {instanceGroupData?.hasCreateInstanceForm && (
            <CreateInstanceForm
              instanceType={instanceType}
              selectInstances={
                parentInstancesData &&
                parentInstancesData[instanceGroupData?.parentGroup]
              }
            />
          )}
          {stillRetrievingData && !instancesAreFound && (
            <InstancesTableSkeleton
              rowsCount={10}
              colsCount={instanceGroupData?.fieldsTitles?.length + 1}
            />
          )}
          {instancesAreFound && (
            <>
              <InstancesTable instances={instancesData[instanceType]} />
              <Pagination
                page={page}
                setPage={setPage}
                isPlaceholderData={isInstancesPlaceholderData}
                totalPages={instancesData?.totalPages}
              />
            </>
          )}
          {!stillRetrievingData && !instancesAreFound && (
            <div className="flex justify-center items-center min-h-[200px]">
              Unfortunately, no instances found.
            </div>
          )}
        </Container>
      </section>
    </Suspense>
  );
};

export default AdminInstanceGroupPage;
