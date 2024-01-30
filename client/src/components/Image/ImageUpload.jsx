import { useImageUpload } from "hooks/imageUpload/useImageUpload";
import Placeholder from "assets/images/placeholder.webp";
import { Spinner } from "assets/icons";

function ImageUpload({ setValue, imageUrl, images }) {
  const { preview, uploadImage, isUploadPicturePending, clearInput } =
    useImageUpload({
      setValue,
      imageUrl,
      images,
    });

  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:px-4 md:px-8 w-[100%]">
      <label htmlFor="hidden-input" className="cursor-pointer w-[100%]">
        <div className="px-3 py-2 text-center bg-gray-200 rounded-md hover:bg-gray-300">
          Upload the image
        </div>
      </label>
      <input
        id="hidden-input"
        type="file"
        className="hidden"
        onChange={(e) => {
          uploadImage(e);
          clearInput(e);
        }}
        accept="image/*"
      />
      <div className="flex items-center justify-center overflow-hidden rounded-md w-72 aspect-square">
        {isUploadPicturePending ? (
          <Spinner width="40" height="40" />
        ) : (
          <img
            src={preview || Placeholder}
            alt="preview"
            className="w-[100%] h-[100%] object-cover"
          />
        )}
      </div>
    </div>
  );
}
export default ImageUpload;
