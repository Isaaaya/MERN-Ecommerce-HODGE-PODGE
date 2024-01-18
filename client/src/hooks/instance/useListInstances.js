import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getInstancesAPI } from "api/instance";

export const useListInstances = ({ configData, enabled }) => {
    const { data: instancesData, isPlaceholderData: isInstancesPlaceholderData, isLoading: areInstancesLoading, isFetching: areInstancesFetching } = useQuery({
        queryKey: [configData?.instanceType, configData?.page, configData?.search, configData?.limit],
        queryFn: () => getInstancesAPI(configData),
        placeholderData: keepPreviousData,
        enabled: !!configData && enabled
    });

    return { instancesData, isInstancesPlaceholderData, areInstancesLoading, areInstancesFetching }
}
