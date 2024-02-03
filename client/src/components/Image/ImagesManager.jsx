import { ImageUpload } from "components/Image";
import { useImagesManager } from "hooks/imagesManager/useImagesManager";
import { optimizeImage } from "utils/functions/optimizeImage";
import Placeholder from "assets/images/placeholder.webp";
import { SetMainImageButton, RemoveImageButton } from "components/Image";

const ImagesManager = ({ images, setValue }) => {
  const {
    removeImage,
    setMainImage,
    setImages,
    selectedImageIndex,
    setSelectedImageIndex,
  } = useImagesManager({
    setValue,
    images,
  });

  return (
    <div className="grid grid-cols-1 gap-5 px-5 md:grid-cols-2 md:mx-auto">
      <ImageUpload
        selectedImageIndex={selectedImageIndex}
        images={images}
        setValue={setImages}
      />
      <div className="grid max-md:grid-flow-col md:grid-cols-3 gap-3 overflow-x-auto md:max-h-[360px] w-fit h-fit max-w-full max-h-full">
        {images?.map((image, index) => (
          <div
            key={index}
            className="relative w-20 h-20 overflow-hidden rounded-lg shadow-sm aspect-square"
          >
            <img
              src={optimizeImage(image, 120, 120)}
              onClick={() => setSelectedImageIndex(index)}
              style={{
                background: `url(${Placeholder})`,
              }}
              alt="Product"
              className="object-cover w-full h-full rounded-lg cursor-pointer"
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
