import { createInstanceAPI } from "api/instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from 'react-toastify';

export const useCreateInstance = ({ instanceType, data, setData, afterCall }) => {
    const queryClient = useQueryClient();

    const { mutate: createInstance, isPending: isCreateInstancePending, isSuccess: isCreateInstanceSuccess } = useMutation({
        mutationFn: () => createInstanceAPI({ instanceType, data }),
        onSuccess: () => {
            if (instanceType === 'products') {
                queryClient.invalidateQueries({ queryKey: ['products'] })
            }
            else {
                queryClient.invalidateQueries({ queryKey: [instanceType] });
                queryClient.invalidateQueries({ queryKey: ['productCollections'] });
                queryClient.invalidateQueries({ queryKey: ['categories'] });
            }
            afterCall();
            setData();
        },
        onError: (error) => error.response.data.errors.map((err) => toast.error(err.msg))
    });


    return { createInstance, isCreateInstancePending, isCreateInstanceSuccess }

}