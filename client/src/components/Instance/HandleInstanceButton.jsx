import { Button } from "Components/Common";

const HandleInstanceButton = ({
  caption,
  spinner,
  disabled,
  extraStyles,
  onClick,
}) => {
  return (
    <Button
      spinner={spinner}
      extraStyles={extraStyles}
      caption={caption}
      theme="basicLight"
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export default HandleInstanceButton;
