import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getInstancesAPI } from "api/instance";

export const useListInstances = ({ configData, enabled }) => {

    const { data: instancesData, isPlaceholderData: isInstancesPlaceholderData, isLoading, isFetching } = useQuery({
        queryKey: [configData?.instanceType, configData],
        queryFn: () => getInstancesAPI(configData),
        placeholderData: keepPreviousData,
        enabled: !!configData && enabled
    });

    return { instancesData, isInstancesPlaceholderData, stillRetrievingData: isLoading || isFetching }
}
