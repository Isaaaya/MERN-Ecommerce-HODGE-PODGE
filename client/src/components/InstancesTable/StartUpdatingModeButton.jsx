import React from "react";
import { useNavigate } from "react-router-dom";
import { PencilIcon } from "components/Icons/index";

const StartUpdatingModeButton = ({
  instanceId,
  advancedUpdate,
  setIsUpdatingMode,
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        if (advancedUpdate) navigate(`/admin/${instanceId}/update`);
        else setIsUpdatingMode(true);
      }}
    >
      <PencilIcon />
    </button>
  );
};

export default StartUpdatingModeButton;
