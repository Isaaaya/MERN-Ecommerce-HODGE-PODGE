import { Button } from "Components/Common";

const CloseCartButton = ({ onClick, caption, ariaLabel }) => {
  return <Button onClick={onClick} caption={caption} ariaLabel={ariaLabel} />;
};

export default CloseCartButton;
