import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetAuthMode } from "hooks/auth/useGetAuthMode";

import { handleAuthAPI } from "api/auth";
import { setUserData } from "utils/functions/setUserData";
import { toast } from 'react-toastify';

export const useAuth = () => {
    const { mode } = useGetAuthMode();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const { mutate: auth, isPending: isAuthPending } = useMutation({
        mutationFn: () => handleAuthAPI({ mode, user }),
        onSuccess: (data) => {
            setUserData(data);
            queryClient.setQueryData(["user"], data);
            navigate("/");
        },
        onError: (error) => {
            if (error.response.data.message) toast.error(error.response.data.message)
            if (error.response.data.errors) error.response.data.errors.map((err) => toast.error(err.msg))
        }
    });

    return { user, setUser, auth, isAuthPending, mode }
}
