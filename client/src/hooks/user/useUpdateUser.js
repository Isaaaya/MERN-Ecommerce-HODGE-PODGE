import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { setUserData } from "utils/functions/setUserData";
import { updateUserProfileAPI } from "api/user";
import { useGetUser } from "hooks/user/useGetUser";
import { toast } from 'react-toastify';

export const useUpdateUser = () => {
    const [updatedUser, setUpdatedUser] = useState(null);
    const { user } = useGetUser();

    useEffect(() => {
        if (user) setUpdatedUser(user);
    }, [user]);

    const { mutate: updateUser, isPending: isUpdateUserPending, isError: hasUserUpdateErrorOccured } = useMutation({
        mutationFn: (updatedUser) => updateUserProfileAPI({ updatedUser }),
        onSuccess: (data) => {
            setUserData(data);
        },
        onError: (error) => error.response.data.errors.map((err) => toast.error(err.msg))
    });

    return { updatedUser, setUpdatedUser, updateUser, isUpdateUserPending, hasUserUpdateErrorOccured };
}