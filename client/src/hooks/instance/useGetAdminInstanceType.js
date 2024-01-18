import { useLocation } from "react-router-dom";

export const useGetAdminInstanceType = () => {
    const { pathname } = useLocation();
    const instanceType = pathname.split("/admin/")[1];

    return { instanceType };
}
