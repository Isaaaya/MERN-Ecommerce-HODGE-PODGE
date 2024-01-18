import { createPortal } from "react-dom";
import { useEffect } from "react";
import { useDeleteInstance } from "hooks/instance/useDeleteInstance";
import { useGetAdminInstanceType } from "hooks/instance/useGetAdminInstanceType";
import { getDeletionWarning } from "utils/functions/getDeletionWarning";

import { Button } from "components/common";

const WarningModal = ({ isModalOpen, setIsModalOpen, instanceId }) => {
  const { instanceType } = useGetAdminInstanceType();
  const { deleteInstance, isDeleteInstancePending } = useDeleteInstance({
    instanceType,
    instanceId,
  });
  const warningContent = getDeletionWarning(instanceType);

  const onDelete = () => {
    deleteInstance();
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (document) {
      document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return createPortal(
    <div
      onClick={() => setIsModalOpen(false)}
      className="fixed top-0 w-full h-full bg-black/[0.3] flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] h-[300px] p-10 bg-white border-4 shadow-lg text-darkMain rounded-lg flex flex-col justify-center items-center gap-7"
      >
        Are you sure you want to delete this item? {warningContent} You cannot
        possibly restore it.
        <div className="flex gap-10">
          <Button
            onClick={() => setIsModalOpen(false)}
            theme="basicDark"
            extraStyles="w-20 h-10"
            caption="Cancel"
          />
          <Button
            theme="danger"
            extraStyles="w-20 h-10"
            disabled={isDeleteInstancePending}
            spinner={isDeleteInstancePending}
            onClick={onDelete}
            caption="Delete"
          />
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default WarningModal;
