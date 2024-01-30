import { useEffect } from "react";
import { useScreenSize } from "hooks/screenSize/useScreenSize";

export const useCloseWhenWidthIsMoreThan = (width, callback) => {

    const { screenSize } = useScreenSize();

    useEffect(() => {
        if (screenSize?.width > width) {
            callback();
        }
    }, [screenSize?.width, callback]);
}
