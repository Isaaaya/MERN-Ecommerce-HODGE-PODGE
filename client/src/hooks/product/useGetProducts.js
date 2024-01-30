import { useQuery } from '@tanstack/react-query';
import { getInstancesAPI } from "api/instance";

export const useGetProducts = ({ configData }) => {
    const productConfigData = {
        ...configData,
        instanceType: "products"
    };

    const { data: productsData, isError: hasProductsErrorOccurred,
        isLoading: areProductsLoading, isPlaceholderData: isProductsPlaceholderData } = useQuery({
            queryKey: ["products", configData],
            queryFn: () => getInstancesAPI(productConfigData),
            enabled: !!productConfigData,
        });

    return { products: productsData?.products, productsTotalPages: productsData?.totalPages, hasProductsErrorOccurred, isProductsPlaceholderData, areProductsLoading }
}