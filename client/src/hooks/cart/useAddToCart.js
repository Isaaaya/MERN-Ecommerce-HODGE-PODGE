import { useContext } from "react";
import { CartContext } from "context/LocalCartContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCartAPI } from "api/cart";
import { getUserData } from "utils/functions/getUserData";

export const useAddToCart = (productId, productPrice) => {
    const user = getUserData();
    const queryClient = useQueryClient();

    const { mutate: add, isPending: isAddToCartPending } = useMutation({
        mutationFn: () => addToCartAPI({ productId }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        },
    });

    const { addToLocalCart } = useContext(CartContext);

    const addToLocalCartWithArgs = addToLocalCart.bind(null, productId, productPrice)

    const addToCart = user?.email ? add : addToLocalCartWithArgs;

    return { addToCart, isAddToCartPending };
};