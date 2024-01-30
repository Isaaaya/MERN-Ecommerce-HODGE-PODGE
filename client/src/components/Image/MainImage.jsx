import { optimizeImage } from "utils/functions/optimizeImage";

import Placeholder from "assets/images/placeholder.webp";

const MainImage = ({ images, mainImageIndex, title }) => {
  return (
    <div className="aspect-square max-h-100 w-[100%] rounded-xl overflow-hidden">
      <img
        fetchpriority="high"
        src={
          images?.length > 0
            ? optimizeImage(images[mainImageIndex], 900, 900, "auto:best")
            : Placeholder
        }
        srcSet={
          images?.length > 0
            ? `${optimizeImage(images[0], 300, 300)} 300w,
               ${optimizeImage(images[0], 500, 500)} 710w,
               ${optimizeImage(images[0], 1300, 1300)} 1420w`
            : ""
        }
        alt={title}
        className="object-cover object-center w-[100%] h-[100%]"
      />
    </div>
  );
};

export default MainImage;
