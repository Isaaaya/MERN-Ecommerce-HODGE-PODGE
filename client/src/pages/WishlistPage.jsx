import { useGetWishlist } from "hooks/wishlist/useGetWishlist";

import { ProductsFeed } from "Components/Product";
import { Container } from "layout";

const WishlistPage = () => {
  const { wishlist, isWishlistLoading } = useGetWishlist();

  return (
    <section className="mt-10">
      <h3 className="text-3xl text-center">Your Wishlist</h3>
      <Container extraStyles="flex justify-center items-center min-h-[70vh]">
        <ProductsFeed
          products={wishlist}
          areProductsLoading={isWishlistLoading}
        />
      </Container>
    </section>
  );
};

export default WishlistPage;
