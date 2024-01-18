import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getInstanceByIdAPI } from "api/instance";

export const useHandleProduct = ({ productId, mode }) => {
    const [product, setProduct] = useState({
        title: "",
        description: "",
        extraDetails: "",
        price: "",
        quantity: "",
        productCollection: "",
        category: "",
        subcategory: "",
        images: [],
    });

    const { data: fetchedProduct, isFetching } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => getInstanceByIdAPI({ instanceType: "products", instanceId: productId }),
        enabled: mode === "update" && !!productId,
    });

    useEffect(() => {
        if (fetchedProduct?._id) {
            const {
                title,
                description,
                extraDetails,
                price,
                quantity,
                productCollection,
                category,
                subcategory,
                images,
            } = fetchedProduct;
            setProduct({
                title,
                description,
                extraDetails,
                price,
                quantity,
                productCollection: productCollection?._id,
                category: category?._id,
                subcategory: subcategory?._id,
                images,
            });
        }
    }, [fetchedProduct]);


    useEffect(() => {
        if (mode === 'addProduct') setProduct({
            title: "",
            description: "",
            extraDetails: "",
            price: "",
            quantity: "",
            productCollection: "",
            category: "",
            subcategory: "",
            images: [],
        });
    }, [mode])

    return { product, setProduct, isFetching }
}
