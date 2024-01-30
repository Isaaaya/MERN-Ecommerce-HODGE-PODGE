import { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
    const onClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", onClickOutside, false);
        return () => {
            document.removeEventListener("click", onClickOutside, false);
        };
    }, []);

}
