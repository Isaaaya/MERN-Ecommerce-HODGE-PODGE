import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getInstanceByIdAPI } from "api/instance";

export const useGetProduct = () => {
    const { productId } = useParams();
    const { data: product, isFetching: isProductFetching, isLoading: isProductLoading } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => getInstanceByIdAPI({ instanceType: "products", instanceId: productId }),
        enabled: !!productId
    });

    return { product, isProductFetching, isProductLoading, productId };
}
