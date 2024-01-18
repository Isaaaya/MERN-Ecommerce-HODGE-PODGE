import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { signoutAPI } from "api/auth";

export const useSignout = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: signout } = useMutation({
        mutationFn: signoutAPI,
        onSuccess: async () => {
            localStorage.removeItem('user');
            // await queryClient.invalidateQueries({ queryKey: ["user"] });
            queryClient.setQueryData(['user'], null);
            navigate('/');
        }
    });

    return { signout }
}
