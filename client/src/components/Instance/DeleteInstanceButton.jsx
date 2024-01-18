import { WarningModal } from "components/common";

import { TrashIcon } from "components/Icons/index";
import { useState } from "react";

const DeleteInstanceButton = ({ instanceId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        <TrashIcon />
      </button>
      <WarningModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        instanceId={instanceId}
      />
    </>
  );
};

export default DeleteInstanceButton;
