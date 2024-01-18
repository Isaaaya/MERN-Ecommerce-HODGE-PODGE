import { useNavigate } from "react-router-dom";
import { useWishlist } from "hooks/wishlist/useWishlist";
import { useGetUser } from "hooks/user/useGetUser";

import { HeartIcon, HeartSolidIcon } from "components/Icons/index";

const AddToWishlistButton = ({ productId }) => {
  const navigate = useNavigate();
  const { user } = useGetUser();
  const { isInWishlist, addProductToWishlist, removeProductFromWishlist } =
    useWishlist({ productId });

  const handleWishlist = () => {
    if (user?.email) {
      if (isInWishlist) removeProductFromWishlist();
      else addProductToWishlist();
    } else navigate("/auth/signin");
  };

  return (
    <button
      onClick={handleWishlist}
      className="flex items-center gap-1 text-gray-500"
    >
      <span className="text-xl">
        {isInWishlist ? <HeartSolidIcon /> : <HeartIcon />}
      </span>{" "}
      Add to Wishlist
    </button>
  );
};

export default AddToWishlistButton;
