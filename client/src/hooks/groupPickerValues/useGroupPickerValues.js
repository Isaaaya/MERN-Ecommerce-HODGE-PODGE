import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getInstancesAPI } from "api/instance";
import { getCollectionCategoriesAPI } from "api/productCollection";
import { getCategorySubcategoriesAPI } from "api/category";

export const useGroupPickerValues = ({ product }) => {
    const [selectedCollectionId, setSelectedCollectionId] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState("");

    useEffect(() => {
        if (product?.productCollection?.length > 0)
            setSelectedCollectionId(product?.productCollection);
    }, [product?.productCollection]);


    useEffect(() => {
        if (product?.category?.length > 0) setSelectedCategoryId(product?.category);
    }, [product?.category]);


    const { data: collectionsData } = useQuery({
        queryKey: ["productCollections"],
        queryFn: () => getInstancesAPI({ instanceType: "productCollections" }),
    });

    const { data: collectionCategories } = useQuery({
        queryKey: ["collectionCategories", selectedCollectionId],
        queryFn: () => getCollectionCategoriesAPI({ productCollectionId: selectedCollectionId }),
        enabled: !!selectedCollectionId,
    });

    const { data: categorySubcategories } = useQuery({
        queryKey: ["categorySubcategories", selectedCollectionId, selectedCategoryId],
        queryFn: () => getCategorySubcategoriesAPI({ categoryId: product?.category }),
        enabled: !!product?.category,
    });

    useEffect(() => {
        setSelectedCategoryId('');
    }, [selectedCollectionId]);


    const groupPickersValues = [
        {
            setSelectedGroupId: setSelectedCollectionId,
            defaultCaption: "Select collection",
            instances: collectionsData?.productCollections,
            productField: "productCollection",
            defaultValue: product?.productCollection,
        },
        {
            setSelectedGroupId: setSelectedCategoryId,
            defaultCaption: "Select category",
            instances: collectionCategories,
            productField: "category",
            defaultValue: product?.category,
        },
        {
            defaultCaption: "Select subcategory",
            instances: categorySubcategories,
            productField: "subcategory",
            defaultValue: product?.subcategory,
        }];

    return { groupPickersValues };
}
