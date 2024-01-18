import { useLocation } from "react-router-dom";

export const useGetAuthMode = () => {
    const { pathname } = useLocation();
    const mode = pathname.split("/auth/")[1];

    return { mode };
}
