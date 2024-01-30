import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeOneFromCartAPI } from "api/cart";
import { LocalCartContext } from "context/LocalCartContext";
import { getUserData } from "utils/functions/getUserData";

export const useRemoveOneFromCart = (product) => {
    const user = getUserData();
    const queryClient = useQueryClient();
    const { mutate: remove, isPending: isRemoveOneFromCartPending } = useMutation({
        mutationFn: () => removeOneFromCartAPI({ productId: product?._id }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        },
    });

    const { removeOneFromLocalCart } = useContext(LocalCartContext);

    const removeOneFromLocalCartWithArgs = removeOneFromLocalCart.bind(null, product);

    const removeOneFromCart = user?.email ? remove : removeOneFromLocalCartWithArgs;

    return { removeOneFromCart, isRemoveOneFromCartPending };
}
