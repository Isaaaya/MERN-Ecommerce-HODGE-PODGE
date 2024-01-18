import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from 'react-toastify';

import { updateInstanceAPI } from "api/instance";

export const useUpdateInstance = ({ instanceType, data, instanceId }) => {
    const queryClient = useQueryClient();

    const { mutate: updateInstance, isPending: isUpdateInstancePending } = useMutation({
        mutationFn: () => updateInstanceAPI({ instanceType, instanceId, newData: data }),
        onSuccess: () => {
            if (instanceType === 'products') queryClient.invalidateQueries({ queryKey: ['products'] })
            else queryClient.invalidateQueries([instanceType, 'productCollections'])
        },
        onError: (error) => error.response.data.errors.map((err) => toast.error(err.msg))
    });

    return { updateInstance, isUpdateInstancePending }
}
