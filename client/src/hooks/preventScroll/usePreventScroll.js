import { useEffect } from "react";
export const usePreventScroll = ({ condition }) => {
    useEffect(() => {
        if (document) {
            document.body.style.overflow = condition ? "hidden" : "auto";
        }
    }, [condition]);
}
