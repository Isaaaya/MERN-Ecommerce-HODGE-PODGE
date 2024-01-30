import { useNavigate } from "react-router-dom";
import { PencilIcon } from "assets/icons";

const StartUpdatingModeButton = ({
  instanceId,
  advancedUpdate,
  setIsUpdatingMode,
}) => {
  const navigate = useNavigate();
  const startUpdatingMode = () => {
    if (advancedUpdate) navigate(`/admin/${instanceId}/update`);
    else setIsUpdatingMode(true);
  };
  return (
    <button onClick={startUpdatingMode}>
      <PencilIcon width="25" height="25" />
    </button>
  );
};

export default StartUpdatingModeButton;
