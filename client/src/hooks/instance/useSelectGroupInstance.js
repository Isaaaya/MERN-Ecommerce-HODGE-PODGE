import { useState, useEffect } from "react";

export const useSelectGroupInstance = ({ instances, setProduct, productField, setSelectedGroupId }) => {
    const [groupInstances, setGroupInstances] = useState(instances);

    useEffect(() => {
        if (instances?.length > 0) setGroupInstances(instances);
        else setGroupInstances([]);
    }, [instances]);

    const handleGroupInstanceChange = (e) => {
        setProduct((prevState) => ({
            ...prevState,
            [productField]: e.target.value,
        }));
        setSelectedGroupId && setSelectedGroupId(e.target.value);
    };

    return { groupInstances, setGroupInstances, handleGroupInstanceChange }
}
