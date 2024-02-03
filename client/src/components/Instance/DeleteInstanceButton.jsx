import { WarningModal } from "components/Common/index.js";

import { TrashIcon } from "assets/icons";
import { useState } from "react";

const DeleteInstanceButton = ({ instanceId }) => {
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);

  const openWarningModal = () => {
    setIsWarningModalOpen(true);
  };

  const closeWarningModal = () => {
    setIsWarningModalOpen(false);
  };

  return (
    <>
      <button onClick={openWarningModal}>
        <TrashIcon width="25" height="25" />
      </button>
      <WarningModal
        isWarningModalOpen={isWarningModalOpen}
        closeWarningModal={closeWarningModal}
        instanceId={instanceId}
      />
    </>
  );
};

export default DeleteInstanceButton;
