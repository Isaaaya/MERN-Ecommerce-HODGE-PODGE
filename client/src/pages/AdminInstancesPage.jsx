import React from "react";

import { InstancesTable } from "components/InstancesTable/index";
import { SearchBar } from "components/common/index";
import Pagination from "components/Pagination/Pagination";
import { Container } from "components/Wrappers";
import { InstancesTableSkeleton } from "components/Skeletons";

const AdminInstancesPage = ({
  instances,
  areInstancesFetching,
  areInstancesLoading,
  page,
  setPage,
  setSearch,
  fieldsTitles,
  fields,
  isPlaceholderData,
  totalPages,
  actionOptions,
  searchBy,
  children,
  advancedUpdate,
}) => {
  return (
    <section className="min-h-fit">
      <Container extraStyles="space-y-10 pb-10 h-full">
        {children}
        <SearchBar
          areInstancesFetching={areInstancesFetching}
          setSearch={setSearch}
          searchBy={searchBy}
        />
        {instances?.length > 0 && (
          <InstancesTable
            advancedUpdate={advancedUpdate}
            actionOptions={actionOptions}
            instances={instances}
            fields={fields}
            fieldsTitles={fieldsTitles}
          />
        )}
        {areInstancesLoading && (
          <InstancesTableSkeleton
            rowsCount={10}
            colsCount={fieldsTitles?.length + 1}
          />
        )}
        {!areInstancesFetching &&
          !areInstancesLoading &&
          instances?.length < 1 && (
            <div className="flex justify-center items-center min-h-[200px]">
              Unfortunately, no instances found.
            </div>
          )}
        {instances?.length > 0 && (
          <Pagination
            page={page}
            setPage={setPage}
            isPlaceholderData={isPlaceholderData}
            totalPages={totalPages}
          />
        )}
      </Container>
    </section>
  );
};

export default AdminInstancesPage;
