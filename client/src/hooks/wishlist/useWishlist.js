import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetWishlist } from "./useGetWishlist";
import { addToWishlistAPI, removeOneFromWishlistAPI } from "api/wishlist";

export const useWishlist = ({ productId }) => {
    const { wishlist } = useGetWishlist();
    const [isInWishlist, setIsInWishlist] = useState(false);
    const queryClient = useQueryClient();

    useEffect(() => {
        if (productId && wishlist?.some((product) => product?._id === productId))
            setIsInWishlist(true);
    }, [wishlist, productId]);

    const { mutate: addProductToWishlist } = useMutation({
        mutationFn: () => addToWishlistAPI({ productId }),
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: ["wishlistData"] });

            const prevValues = queryClient.getQueryData(["wishlistData"]);
            if (prevValues) setIsInWishlist(true);
            const newValues = {
                ...prevValues,
                wishlist: [...prevValues.wishlist, productId],
            };
            queryClient.setQueryData(["wishlistData"], newValues);
            return { prevValues };
        },
        onError: (error, _, context) => {
            queryClient.setQueryData("wishlistData", context.prevValues);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["wishlistData"] });
        },
    });

    const { mutate: removeProductFromWishlist } = useMutation({
        mutationFn: () => removeOneFromWishlistAPI({ productId }),
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: ["wishlistData"] });
            setIsInWishlist(false);
            const prevValues = queryClient.getQueryData(["wishlistData"]);
            const newValues = {
                ...prevValues,
                wishlist: prevValues?.wishlist.filter(
                    (value) => value._id !== productId
                ),
            };
            queryClient.setQueryData(["wishlistData"], newValues);
        },
        onError: (error, _, context) => {
            queryClient.setQueryData("wishlistData", context.prevValues);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["wishlistData"] });
        },
    });

    return { isInWishlist, setIsInWishlist, addProductToWishlist, removeProductFromWishlist }
}