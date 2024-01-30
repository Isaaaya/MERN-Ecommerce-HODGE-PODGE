import { useState, useEffect } from "react";

export const useSelectGroupInstance = () => {
    const [selectGroupInstances, setSelectGroupInstances] =
        useState(selectInstances);

    useEffect(() => {
        setSelectGroupInstances(selectInstances);
    }, [selectInstances]);


}
