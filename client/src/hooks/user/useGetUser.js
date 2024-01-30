import { useQuery } from '@tanstack/react-query';
import { getUserData } from "utils/functions/getUserData";
import { getUserProfileAPI } from "api/user";

export const useGetUser = () => {
    const { data: user, isLoading: isUserLoading } = useQuery({
        queryKey: ["user"],
        queryFn: getUserProfileAPI,
        enabled: !!getUserData(),
    });

    return { user, isUserLoading };
};