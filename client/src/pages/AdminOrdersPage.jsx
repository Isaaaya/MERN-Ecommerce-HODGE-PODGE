import { lazy, useState, Suspense, useEffect } from "react";
import { useGetOrders } from "hooks/order/useGetOrders";

import { Spinner } from "components/Icons";
const AdminInstancesPage = lazy(() => import("pages/AdminInstancesPage"));

const AdminOrdersPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const {
    orders,
    isOrdersPlaceholderData,
    ordersTotalPages,
    areOrdersLoading,
    areOrdersFetching,
  } = useGetOrders({
    configData: { page, search, limit: 10 },
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
        instances={orders}
        areInstancesFetching={areOrdersFetching}
        areInstancesLoading={areOrdersLoading}
        fields={["_id", "userEmail", "totalItems", "totalPrice"]}
        fieldsTitles={["ID", "Purchaser", "Items", "Price"]}
        totalPages={ordersTotalPages}
        actionOptions={["viewOrderInfoButton"]}
        searchBy="Title or ID"
        isPlaceholderData={isOrdersPlaceholderData}
      />
    </Suspense>
  );
};

export default AdminOrdersPage;
