import { useGetWishlist } from "hooks/wishlist/useGetWishlist";

import { ProductsFeed } from "components/Product/index";
import { Container } from "components/Wrappers";

const WishlistPage = () => {
  const { wishlist, isWishlistLoading, isWishlistFetching } = useGetWishlist();

  const areAnyProductsInWishlist = wishlist?.length > 0;

  return (
    <section className="mt-10 space-y-5">
      <h3 className="text-3xl text-center">Your Wishlist</h3>
      <Container extraStyles="flex justify-center items-center min-h-[70vh]">
        {!areAnyProductsInWishlist &&
          (!isWishlistLoading || !isWishlistFetching) && (
            <div>Wishlist is empty.</div>
          )}
        <ProductsFeed
          products={wishlist}
          areProductsLoading={isWishlistLoading}
        />
      </Container>
    </section>
  );
};

export default WishlistPage;
