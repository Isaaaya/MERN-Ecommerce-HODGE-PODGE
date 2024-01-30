import { useState, useEffect } from "react";

export const useSelectGroupInstance = ({ instances, setProduct, productField, setSelectedGroupId }) => {
    const [groupInstances, setGroupInstances] = useState(instances);

    useEffect(() => {
        if (instances?.length > 0) setGroupInstances(instances);
        else setGroupInstances([]);
    }, [instances]);

    const handleGroupInstanceChange = (e) => {
        if (productField === 'productCollection') {
            setProduct((prevState) => ({
                ...prevState,
                [productField]: e.target.value,
                category: '',
                subcategory: '',
            }));
        }
        if (productField === 'category') {
            setProduct((prevState) => ({
                ...prevState,
                [productField]: e.target.value,
                subcategory: '',
            }));
        }
        else setProduct((prevState) => ({
            ...prevState,
            [productField]: e.target.value,
        }));
        setSelectedGroupId(e.target.value);
    };

    return { groupInstances, setGroupInstances, handleGroupInstanceChange }
}
