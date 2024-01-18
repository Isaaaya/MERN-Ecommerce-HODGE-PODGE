import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getInstancesAPI } from "api/instance";


export const useGetOrders = ({ configData }) => {
    const orderConfigData = {
        instanceType: "orders",
        ...configData
    }
    const { data: ordersData, isPlaceholderData: isOrdersPlaceholderData, isLoading: areOrdersLoading, isFetching: areOrdersFetching } = useQuery({
        queryKey: ["orders", configData?.page, configData?.search],
        queryFn: () => getInstancesAPI(orderConfigData),
        placeholderData: keepPreviousData,
        enabled: !!configData
    });

    return { orders: ordersData?.orders, isOrdersPlaceholderData, ordersTotalPages: ordersData?.totalPages, areOrdersLoading, areOrdersFetching }
}
