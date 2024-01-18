import { useActionsPanel } from "hooks/actionsPanel/useActionsPanel";

import {
  CancelUpdatingInstanceButton,
  UpdateInstanceButton,
} from "components/Instance/index";
import { OrderDetails } from "components/Order/index";

const ActionsPanel = ({
  isUpdatingMode,
  setIsUpdatingMode,
  advancedUpdate,
  instance,
  updatedInstance,
  actionOptions,
}) => {
  const { actionButtons, showOrderDetails } = useActionsPanel({
    instanceId: instance?._id,
    setIsUpdatingMode,
    advancedUpdate,
  });

  return (
    <div className="[&_div]:flex [&_div]:items-center [&_div]:gap-2 [&_div]:md:justify-center">
      {!isUpdatingMode && (
        <div>
          {actionOptions?.map((option) => (
            <div key={option}>{actionButtons[option]}</div>
          ))}
        </div>
      )}
      {isUpdatingMode && (
        <div>
          <UpdateInstanceButton
            instanceId={instance?._id}
            updatedInstance={updatedInstance}
            setIsUpdatingMode={setIsUpdatingMode}
          />
          <CancelUpdatingInstanceButton setIsUpdatingMode={setIsUpdatingMode} />
        </div>
      )}
      <OrderDetails showOrderDetails={showOrderDetails} instance={instance} />
    </div>
  );
};

export default ActionsPanel;
