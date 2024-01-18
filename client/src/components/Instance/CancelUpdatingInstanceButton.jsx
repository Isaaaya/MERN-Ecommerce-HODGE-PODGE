import React from "react";
import { Button } from "components/common";
import { XMarkIcon } from "components/Icons";

const CancelUpdatingInstanceButton = ({ setIsUpdatingMode }) => {
  return (
    <Button onClick={() => setIsUpdatingMode(false)} caption={<XMarkIcon />} />
  );
};

export default CancelUpdatingInstanceButton;
