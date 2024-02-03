import { Button } from "components/Common/index";

const CloseCartButton = ({ onClick, caption, ariaLabel }) => {
  return <Button onClick={onClick} caption={caption} ariaLabel={ariaLabel} />;
};

export default CloseCartButton;
