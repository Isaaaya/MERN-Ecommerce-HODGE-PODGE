import { useContext } from "react";
import { LocalCartContext } from "context/LocalCartContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCartAPI } from "api/cart";
import { getUserData } from "utils/functions/getUserData";

export const useAddToCart = (product) => {
    const user = getUserData();
    const queryClient = useQueryClient();


    const { mutate: add, isPending: isAddToCartPending } = useMutation({
        mutationFn: () => addToCartAPI({ productId: product?._id }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        },
    });

    const { addToLocalCart } = useContext(LocalCartContext);

    const addToLocalCartWithArgs = addToLocalCart.bind(null, product)

    const addToCart = user?.email ? add : addToLocalCartWithArgs;

    return { addToCart, isAddToCartPending };
};