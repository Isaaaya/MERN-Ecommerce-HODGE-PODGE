import { useState, useEffect } from "react";
import { useGetProduct } from "./useGetProduct";

export const useHandleProduct = ({ productId }) => {
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

    const { product: fetchedProduct, isProductFetching: isFetching } = useGetProduct({ productId });

    useEffect(() => {
        if (fetchedProduct?._id) {
            const { productCollection, category, subcategory } = fetchedProduct;
            setProduct({
                ...fetchedProduct, productCollection: productCollection?._id,
                category: category?._id,
                subcategory: subcategory?._id,
            })
        }
    }, [fetchedProduct]);

    return { product, setProduct, isFetching }
}
