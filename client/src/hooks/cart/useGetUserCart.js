import { useQuery } from '@tanstack/react-query';
import { useContext } from "react";
import { useGetUser } from "hooks/user/useGetUser";
import { LocalCartContext } from 'context/LocalCartContext'
import { getCartAPI } from "api/cart";

export const useGetUserCart = () => {
    const { user } = useGetUser();

    const { data: cart } = useQuery({
        queryKey: ["cart"],
        queryFn: getCartAPI,
        enabled: !!user,
    });

    const { localCart } = useContext(LocalCartContext);
    const userCart = user?.email ? cart : localCart;

    const cartWithAllAvailableProducts = { products: userCart?.products?.filter((item) => item?.product && item?.product?.quantity > 0) };

    let cartTotalItems;
    let cartTotalPrice;

    if (cartWithAllAvailableProducts?.products?.length > 0) {
        cartTotalItems = cartWithAllAvailableProducts?.products?.reduce((acc, item) => acc + item?.quantity, 0);

        cartTotalPrice = cartWithAllAvailableProducts?.products?.reduce((acc, item) => acc + (item?.product?.price * item?.quantity), 0);
    }

    return { userCart: cartWithAllAvailableProducts, cartTotalItems, cartTotalPrice };
}


