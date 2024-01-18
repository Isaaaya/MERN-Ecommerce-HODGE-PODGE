import { useQuery } from "@tanstack/react-query";
import { getWishlistAPI } from "api/wishlist";
import { getUserData } from "utils/functions/getUserData";

export const useGetWishlist = () => {
    const { data: wishlistData, isLoading: isWishlistLoading, isFetching: isWishlistFetching } = useQuery({
        queryKey: ["wishlistData"],
        queryFn: getWishlistAPI,
        enabled: !!getUserData(),
    });

    return { wishlist: wishlistData?.wishlist, isWishlistLoading, isWishlistFetching };
}
