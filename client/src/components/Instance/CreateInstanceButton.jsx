import { Button } from "components/common";

const CreateInstanceButton = ({
  caption,
  spinner,
  disabled,
  extraStyles,
  handleClick,
}) => {
  return (
    <Button
      spinner={spinner}
      extraStyles={extraStyles}
      caption={caption}
      theme="basicLight"
      disabled={disabled}
      onClick={handleClick}
    />
  );
};

export default CreateInstanceButton;
