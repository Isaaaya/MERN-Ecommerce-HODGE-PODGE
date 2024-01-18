import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeOneFromCartAPI } from "api/cart";
import { CartContext } from "context/LocalCartContext";
import { getUserData } from "utils/functions/getUserData";

export const useRemoveOneFromCart = (productId, productPrice) => {
    const user = getUserData();
    const queryClient = useQueryClient();
    const { mutate: remove, isPending: isRemoveOneFromCartPending } = useMutation({
        mutationFn: () => removeOneFromCartAPI({ productId }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        },
    });


    const { removeOneFromLocalCart } = useContext(CartContext);

    const removeOneFromLocalCartWithArgs = removeOneFromLocalCart.bind(null, productId, productPrice);

    const removeOneFromCart = user?.email ? remove : removeOneFromLocalCartWithArgs;

    return { removeOneFromCart, isRemoveOneFromCartPending };
}
