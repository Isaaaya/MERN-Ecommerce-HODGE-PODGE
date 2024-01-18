import { useLocation } from "react-router-dom";

export const useGetHandleProductMode = () => {
    const location = useLocation();
    const mode =
        location.pathname.split("/")[location.pathname.split("/").length - 1];

    return { mode };
}
