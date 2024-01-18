import { useQuery } from "@tanstack/react-query";
import { getInstanceByIdAPI } from "api/instance";

export const useGetInstance = ({ instanceType, instanceId }) => {
    const { data: groupTypeInstance, isLoading: isGroupTypeInstanceLoading } = useQuery({
        queryKey: [instanceType, instanceId],
        queryFn: () => getInstanceByIdAPI({ instanceType, instanceId }),
    });

    return { groupTypeInstance, isGroupTypeInstanceLoading }
}
