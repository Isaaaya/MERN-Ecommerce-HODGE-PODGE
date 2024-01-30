import { useQuery } from "@tanstack/react-query";
import { getInstanceByIdAPI } from "api/instance";

export const useGetInstanceById = ({ instanceType, instanceId }) => {
    const { data: groupTypeInstance, isLoading: isGroupTypeInstanceLoading } = useQuery({
        queryKey: [instanceType, instanceId],
        queryFn: () => getInstanceByIdAPI({ instanceType, instanceId }),
        enabled: !!instanceId,
    });

    return { groupTypeInstance, isGroupTypeInstanceLoading }
}
