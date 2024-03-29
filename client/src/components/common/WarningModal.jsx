import { createPortal } from "react-dom";
import { useWarningModal } from "hooks/warningModal/useWarningModal";

import { Button } from "./index";

const WarningModal = ({
  isWarningModalOpen,
  closeWarningModal,
  instanceId,
}) => {
  const { onDelete, isDeleteInstancePending, warningContent } = useWarningModal(
    { instanceId }
  );

  if (!isWarningModalOpen) return null;

  return createPortal(
    <div
      onClick={closeWarningModal}
      className="fixed top-0 w-full h-full bg-black/[0.3] flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] h-[300px] p-10 bg-white border-4 shadow-lg text-darkMain rounded-xl flex flex-col text-justify"
      >
        <p className="text-2xl font-bold">Procceed with the deletion?</p>
        <p className="pt-4">{warningContent} You cannot possibly restore it.</p>

        <div className="flex gap-5 pt-16 mx-auto w-fit">
          <Button
            onClick={closeWarningModal}
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
