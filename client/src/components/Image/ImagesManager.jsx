import { ImageUpload } from "components/Image/index";
import { StarIcon, StarSolidIcon } from "components/Icons/index";
import { useImagesManager } from "hooks/imagesManager/useImagesManager";

const ImagesManager = ({ images, setValue }) => {
  const { removeImage, setMainImage, setImages } = useImagesManager({
    setValue,
    images,
  });

  return (
    <div className="grid grid-cols-1 gap-5 px-5 md:grid-cols-2 md:mx-auto">
      <ImageUpload images={images} setValue={setImages} />
      <div className="grid max-md:grid-flow-col md:grid-cols-3 gap-3 overflow-x-auto h-fit max-h-20 md:max-h-[360px]  md:w-fit">
        {images?.map((image, index) => (
          <div
            key={index}
            className="relative w-20 h-20 overflow-hidden rounded-lg aspect-square"
          >
            <img
              src={image}
              alt="Product"
              className="object-cover w-full h-full"
            />
            <button
              type="button"
              onClick={() => removeImage(image)}
              className="absolute top-2 right-2 hover:bg-white/[0.4] px-2 rounded-full"
            >
              x
            </button>
            <button
              type="button"
              onClick={() => setMainImage(image)}
              className="absolute bottom-2 left-2 hover:bg-white/[0.4] p-1 rounded-full"
            >
              {images.indexOf(image) !== 0 ? <StarIcon /> : <StarSolidIcon />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesManager;
