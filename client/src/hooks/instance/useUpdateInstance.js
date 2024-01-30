import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from 'react-toastify';

import { updateInstanceAPI } from "api/instance";

export const useUpdateInstance = ({ instanceType, data, instanceId, afterCall }) => {
    const queryClient = useQueryClient();

    const { mutate: updateInstance, isPending: isUpdateInstancePending, isSuccess: isUpdateInstanceSuccess } = useMutation({
        mutationFn: () => updateInstanceAPI({ instanceType, instanceId, newData: data }),
        onSuccess: () => {
            if (instanceType === 'products') {
                queryClient.invalidateQueries({ queryKey: ['product', instanceId] })
            }
            else {
                queryClient.invalidateQueries({ queryKey: [instanceType] });
                queryClient.invalidateQueries({ queryKey: ['productCollections'] });
                queryClient.invalidateQueries({ queryKey: ['categories'] });
            }
            afterCall();
        },
        onError: (error) => error.response.data.errors.map((err) => toast.error(err.msg))
    });

    return { updateInstance, isUpdateInstancePending, isUpdateInstanceSuccess }
}
