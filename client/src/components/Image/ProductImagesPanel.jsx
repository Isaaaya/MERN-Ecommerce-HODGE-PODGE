import { useState } from "react";

import { ImagesCarousel, MainImage } from "Components/Image";

const ProductImagesPanel = ({ images, title }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  return (
    <div className="self-start md:sticky top-5 w-[100%] md:w-[65%] space-y-3">
      <MainImage
        images={images}
        mainImageIndex={mainImageIndex}
        title={title}
      />
      {images?.length > 1 && (
        <ImagesCarousel
          images={images}
          mainImageIndex={mainImageIndex}
          setMainImageIndex={setMainImageIndex}
        />
      )}
    </div>
  );
};

export default ProductImagesPanel;
