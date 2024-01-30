import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getInstancesAPI } from "api/instance";
import { getCollectionCategoriesAPI } from "api/productCollection";
import { getCategorySubcategoriesAPI } from "api/category";

export const useGroupPickerValues = ({ product }) => {
    const [selectedCollectionId, setSelectedCollectionId] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState("");
    const [selectedSubcategoryId, setSelectedSubcategoryId] = useState("");

    useEffect(() => {
        if (!selectedCollectionId) {
            setSelectedCollectionId(product?.productCollection);
            setSelectedCategoryId(product?.category);
            setSelectedSubcategoryId(product?.subcategory);
        }
    }, [product]);

    useEffect(() => {
        return () => {
            if (selectedCollectionId) {
                setSelectedCategoryId('');
                setSelectedSubcategoryId('');
            }
        }
    }, [selectedCollectionId])

    const { data: collectionsData, isLoading: isLoadingCollections } = useQuery({
        queryKey: ["productCollections"],
        queryFn: () => getInstancesAPI({ instanceType: "productCollections" }),
        enabled: !!product && !selectedCollectionId,
    });

    const { data: collectionCategories, isLoading: isLoadingCollectionCategories } = useQuery({
        queryKey: ["collectionCategories", selectedCollectionId],
        queryFn: () => getCollectionCategoriesAPI({ productCollectionId: selectedCollectionId }),
        enabled: !!selectedCollectionId && !isLoadingCollections,
    });

    const { data: categorySubcategories, isLoading: isLoadingCategorySubcategories } = useQuery({
        queryKey: ["categorySubcategories", selectedCategoryId],
        queryFn: () => getCategorySubcategoriesAPI({ categoryId: selectedCategoryId }),
        enabled: !!selectedCategoryId && !!selectedCollectionId && !isLoadingCollectionCategories,
    });

    const groupPickersValues = [
        {
            setSelectedGroupId: setSelectedCollectionId,
            defaultCaption: "Select collection",
            instances: collectionsData?.productCollections,
            productField: "productCollection",
            defaultValue: selectedCollectionId,
            isLoading: isLoadingCollections,
        },
        {
            setSelectedGroupId: setSelectedCategoryId,
            defaultCaption: "Select category",
            instances: collectionCategories,
            productField: "category",
            defaultValue: selectedCategoryId,
            isLoading: isLoadingCollectionCategories,
        },
        {
            setSelectedGroupId: setSelectedSubcategoryId,
            defaultCaption: "Select subcategory",
            instances: categorySubcategories,
            productField: "subcategory",
            defaultValue: selectedSubcategoryId,
            isLoading: isLoadingCategorySubcategories,
        },
    ];

    return { groupPickersValues };
};
