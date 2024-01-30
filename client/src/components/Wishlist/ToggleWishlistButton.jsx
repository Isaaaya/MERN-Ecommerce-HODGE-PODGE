import { useToggleWishlistButton } from "hooks/wishlist/useToggleWishlistButton";

import { HeartIcon, HeartSolidIcon } from "assets/icons";

const AddToWishlistButton = ({ productId }) => {
  const { isInWishlist, toggleWishlist } = useToggleWishlistButton({
    productId,
  });

  return (
    <button
      onClick={toggleWishlist}
      className="flex items-center gap-1 text-gray-500"
    >
      <span className="text-xl">
        {isInWishlist ? (
          <HeartSolidIcon width="30" height="30" />
        ) : (
          <HeartIcon width="30" height="30" />
        )}
      </span>{" "}
      Add to Wishlist
    </button>
  );
};

export default AddToWishlistButton;
