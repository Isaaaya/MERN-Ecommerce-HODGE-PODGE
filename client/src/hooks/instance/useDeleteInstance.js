import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from 'react-toastify';

import { deleteInstanceAPI } from "api/instance";

export const useDeleteInstance = ({ instanceType, instanceId }) => {
    const queryClient = useQueryClient();

    const { mutate: deleteInstance, isPending: isDeleteInstancePending } = useMutation({
        mutationFn: () => deleteInstanceAPI({ instanceType, instanceId }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [instanceType] });
        },
        onError: (error) => error.response.data.errors.map((err) => toast.error(err.msg))
    });

    return { deleteInstance, isDeleteInstancePending }
}
