import { Button } from "components/common";

const CloseCartButton = ({ onClick, caption, ariaLabel }) => {
  return <Button onClick={onClick} caption={caption} ariaLabel={ariaLabel} />;
};

export default CloseCartButton;
