import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { setUserData } from "utils/functions/setUserData";
import { updateUserProfileAPI } from "api/user";
import { useGetUser } from "hooks/user/useGetUser";

export const useUpdateUser = () => {
    const [updatedUser, setUpdatedUser] = useState(null);

    const { mutate: updateUser, isPending: isUpdateUserPending, isError: hasUserUpdateErrorOccured } = useMutation({
        mutationFn: (updatedUser) => updateUserProfileAPI({ updatedUser }),
        onSuccess: (data) => {
            setUserData(data);
        },
    });

    const { user } = useGetUser();

    useEffect(() => {
        if (user) setUpdatedUser(user);
    }, [user]);

    return { updatedUser, setUpdatedUser, updateUser, isUpdateUserPending, hasUserUpdateErrorOccured };
}