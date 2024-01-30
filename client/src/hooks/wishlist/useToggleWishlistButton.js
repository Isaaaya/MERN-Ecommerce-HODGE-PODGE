import { useNavigate } from "react-router-dom";
import { useWishlist } from "hooks/wishlist/useWishlist";
import { useGetUser } from "hooks/user/useGetUser";

export const useToggleWishlistButton = ({ productId }) => {
    const navigate = useNavigate();
    const { user } = useGetUser();
    const { isInWishlist, addProductToWishlist, removeProductFromWishlist } =
        useWishlist({ productId });

    const toggleWishlist = () => {
        if (user?.email) {
            if (isInWishlist) removeProductFromWishlist();
            else addProductToWishlist();
        } else navigate("/auth/signin");
    };

    return { isInWishlist, toggleWishlist }
}
