import { Button } from "components/common";
import { XMarkIcon } from "assets/icons";

const RemoveImageButton = ({ removeImage, image }) => {
  return (
    <Button
      extraStyles="absolute top-2 right-1 hover:bg-white/[0.4] rounded-full"
      onClick={() => removeImage(image)}
      caption={<XMarkIcon width="20" height="20" />}
    />
  );
};

export default RemoveImageButton;
