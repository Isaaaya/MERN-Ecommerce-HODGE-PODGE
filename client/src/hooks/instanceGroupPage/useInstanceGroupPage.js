import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetInstanceById } from "hooks/instance/useGetInstanceById";
import { useGetFilteredProducts } from "hooks/product/useGetFilteredProducts";
import { usePage } from "hooks/page/usePage";

export const useInstanceGroupPage = () => {
    const [search, setSearch] = useState("");
    const [sortingType, setSortingType] = useState("az");
    const [filters, setFilters] = useState({
        available: [],
        images: [],
        price: 0,
    });
    const { page, setPage } = usePage({ filters, search, sortingType });
    const { instanceType, instanceId } = useParams();

    const {
        products,
        totalPages,
        productsMaxPrice,
        productsMinPrice,
        stillRetrievingProducts,
        isProductsPlaceholderData,
    } = useGetFilteredProducts({
        instanceId,
        page,
        search,
        filters,
        sortingType,
        searchBy:
            instanceType === "productCollections"
                ? "productCollection"
                : instanceType === "categories"
                    ? "category"
                    : "subcategory",
    });

    const { groupTypeInstance, isGroupTypeInstanceLoading } = useGetInstanceById({
        instanceType,
        instanceId,
    });

    return {
        products,
        totalPages,
        productsMaxPrice,
        productsMinPrice,
        stillRetrievingProducts,
        isProductsPlaceholderData, setSearch, setSortingType, filters, setFilters, groupTypeInstance, isGroupTypeInstanceLoading, page, setPage
    }
}
