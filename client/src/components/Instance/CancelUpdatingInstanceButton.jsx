import { Button } from "../common/index";
import { XMarkIcon } from "assets/icons";

const CancelUpdatingInstanceButton = ({ setIsUpdatingMode }) => {
  return (
    <Button
      onClick={() => setIsUpdatingMode(false)}
      caption={<XMarkIcon width="25" height="25" />}
    />
  );
};

export default CancelUpdatingInstanceButton;
