import { useQuery } from '@tanstack/react-query';
import { useGetUser } from "hooks/user/useGetUser";
import { getCartAPI } from "api/cart";
import { useGetLocalCart } from "./useGetLocalCart";

export const useGetUserCart = () => {
    const { user } = useGetUser();

    const { data: cart } = useQuery({
        queryKey: ["cart"],
        queryFn: getCartAPI,
        enabled: !!user,
    });

    const { fullLocalCart } = useGetLocalCart();
    const userCart = user?.email ? cart : fullLocalCart;

    const cartWithAllAvailableProducts = { products: userCart?.products?.filter((item) => item?.product && item?.product?.quantity > 0) };

    let cartTotalItems;
    let cartTotalPrice;

    if (cartWithAllAvailableProducts?.products?.length > 0) {
        cartTotalItems = cartWithAllAvailableProducts?.products?.reduce((acc, item) => acc + item?.quantity, 0);
        cartTotalPrice = cartWithAllAvailableProducts?.products?.reduce((acc, item) => acc + (item?.product?.price * item?.quantity), 0);
    }

    return { userCart: cartWithAllAvailableProducts, cartTotalItems, cartTotalPrice };
}


