import { useUpdateInstance } from "hooks/instance/useUpdateInstance";
import { useGetAdminInstanceType } from "hooks/instance/useGetAdminInstanceType";
import { Button } from "components/common";
import { DoneIcon } from "components/Icons";

const UpdateInstanceButton = ({
  updatedInstance,
  instanceId,
  setIsUpdatingMode,
}) => {
  const { instanceType } = useGetAdminInstanceType();
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
      caption={<DoneIcon />}
      disabled={isUpdateingPending}
      onClick={handleUpdate}
    />
  );
};

export default UpdateInstanceButton;
