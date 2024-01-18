import { useState } from "react";

import { ImagesCarousel, MainImage } from "components/Image/index";

const ProductImagesManager = ({ images, title }) => {
  const [mainImage, setMainImage] = useState(0);
  return (
    <div className="self-start md:sticky top-5 w-[100%] md:w-[65%] space-y-3">
      <MainImage images={images} mainImage={mainImage} title={title} />
      {images?.length > 1 && (
        <ImagesCarousel
          images={images}
          mainImage={mainImage}
          setMainImage={setMainImage}
        />
      )}
    </div>
  );
};

export default ProductImagesManager;
