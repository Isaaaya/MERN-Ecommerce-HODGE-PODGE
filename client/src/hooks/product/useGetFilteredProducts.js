import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { listProductsAPI } from "api/product";
import { useDebounce } from "hooks/debounce/useDebounce";

export const useGetFilteredProducts = ({ instanceId, searchBy, page,
    search,
    filters,
    limit,
    sortingType }) => {

    const debouncedSearch = useDebounce({ value: search, delay: 450 })

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
                search: debouncedSearch,
                page,
                limit,
                sort: sortingType,
                available: filters?.available?.reduce(
                    (accumulator, availableOption) =>
                        accumulator + `available[]=${availableOption}&`,
                    ""
                ),
                images: filters?.images?.reduce(
                    (accumulator, imagesOption) =>
                        accumulator + `images[]=${imagesOption}&`,
                    ""
                ),
                price: filters?.price,
            }),
        placeholderData: keepPreviousData,
    });

    return { products: productsData?.products, productsMaxPrice: productsData?.maxPrice, productsMinPrice: productsData?.minPrice, totalPages: productsData?.totalPages, isProductsPlaceholderData: isPlaceholderData, stillRetrievingProducts: isLoading || isFetching }
}
