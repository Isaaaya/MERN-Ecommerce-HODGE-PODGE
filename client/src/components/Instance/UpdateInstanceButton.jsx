import { useParams } from "react-router-dom";
import { useUpdateInstance } from "hooks/instance/useUpdateInstance";
import { Button } from "components/Common/index";
import { DoneIcon } from "assets/icons";

const UpdateInstanceButton = ({
  updatedInstance,
  instanceId,
  setIsUpdatingMode,
}) => {
  const { instanceType } = useParams();
  const { updateInstance, isUpdateingPending } = useUpdateInstance({
    instanceType,
    instanceId,
    data: updatedInstance,
  });

  const handleUpdate = () => {
    updateInstance();
    setIsUpdatingMode(false);
  };
  return (
    <Button
      caption={<DoneIcon width="25" height="25" />}
      disabled={isUpdateingPending}
      onClick={handleUpdate}
    />
  );
};

export default UpdateInstanceButton;
