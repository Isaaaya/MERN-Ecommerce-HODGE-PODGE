import { useState, useEffect } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { listProductsAPI } from "api/product";

export const useGetFilteredProducts = ({ instanceId, searchBy }) => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sortingType, setSortingType] = useState("az");
    const [filters, setFilters] = useState({
        available: [],
        images: [],
        price: 0,
    });

    useEffect(() => {
        setPage(1);
    }, [filters]);


    const {
        data: productsData,
        isLoading,
        isFetching,
        isPlaceholderData,
    } = useQuery({
        queryKey: ['products', instanceId, page, sortingType, filters, search, searchBy],
        queryFn: () =>
            listProductsAPI({
                [searchBy]: instanceId,
                search,
                page,
                sort: sortingType,
                available: filters?.available?.reduce(
                    (accumulator, availableOption) =>
                        accumulator + `&available[]=${availableOption}`,
                    ""
                ),
                images: filters?.images?.reduce(
                    (accumulator, imagesOption) =>
                        accumulator + `&images[]=${imagesOption}`,
                    ""
                ),
                price: filters?.price,
            }),
        placeholderData: keepPreviousData,
    });

    return { page, setPage, search, setSearch, sortingType, setSortingType, filters, setFilters, products: productsData?.products, productsMaxPrice: productsData?.maxPrice, productsMinPrice: productsData?.minPrice, totalPages: productsData?.totalPages, areProductsLoading: isLoading, isProductsPlaceholderData: isPlaceholderData, areProductsFetching: isFetching }
}
