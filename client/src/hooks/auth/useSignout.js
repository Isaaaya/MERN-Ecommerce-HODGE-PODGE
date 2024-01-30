import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { signoutAPI } from "api/auth";

export const useSignout = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: signout } = useMutation({
        mutationFn: signoutAPI,
        onSuccess: () => {
            localStorage.removeItem('user');
            queryClient.setQueryData(['user'], null);
            navigate('/');
        }
    });

    return { signout }
}
