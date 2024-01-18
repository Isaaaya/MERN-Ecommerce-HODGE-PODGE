import { useQuery } from '@tanstack/react-query';
import { getInstanceByIdAPI } from "api/instance";

export const useGetProduct = ({ productId }) => {
    const { data: product } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => getInstanceByIdAPI({ instanceType: "products", instanceId: productId }),
        enabled: !!productId
    });

    return { product };
}
