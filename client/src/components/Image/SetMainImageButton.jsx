import { Button } from "components/Common/index.js";
import { StarIcon, StarSolidIcon } from "assets/icons";

const SetMainImageButton = ({ isMainImage, image, setMainImage }) => {
  return (
    <Button
      onClick={() => setMainImage(image)}
      extraStyles="absolute bottom-2 left-2 hover:bg-white/[0.4] rounded-full"
      caption={
        isMainImage ? (
          <StarSolidIcon width="20" height="20" />
        ) : (
          <StarIcon width="20" height="20" />
        )
      }
    />
  );
};

export default SetMainImageButton;
