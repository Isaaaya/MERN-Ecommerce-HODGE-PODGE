import { ImageUpload } from "components/Image";
import { useImagesManager } from "hooks/imagesManager/useImagesManager";
import { optimizeImage } from "utils/functions/optimizeImage";
import Placeholder from "assets/images/placeholder.webp";
import { SetMainImageButton, RemoveImageButton } from "components/Image";

const ImagesManager = ({ images, setValue }) => {
  const { removeImage, setMainImage, setImages } = useImagesManager({
    setValue,
    images,
  });

  return (
    <div className="grid grid-cols-1 gap-5 px-5 md:grid-cols-2 md:mx-auto">
      <ImageUpload images={images} setValue={setImages} />
      <div className="grid max-md:grid-flow-col md:grid-cols-3 gap-3 overflow-x-auto h-24 md:max-h-[360px] w-fit max-w-full">
        {images?.map((image, index) => (
          <div
            key={index}
            className="relative w-20 h-20 overflow-hidden rounded-lg shadow-sm aspect-square"
          >
            <img
              src={optimizeImage(image, 120, 120)}
              style={{
                background: `url(${Placeholder})`,
              }}
              alt="Product"
              className="object-cover w-full h-full border-2 rounded-lg"
            />
            <RemoveImageButton image={image} removeImage={removeImage} />
            <SetMainImageButton
              isMainImage={images.indexOf(image) === 0}
              image={image}
              setMainImage={setMainImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesManager;
