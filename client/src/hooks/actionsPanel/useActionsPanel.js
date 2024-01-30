import { useState } from "react";

import { DeleteInstanceButton } from 'components/Instance/index';
import { HandleBannerLink } from 'components/CollectionBanner/index';
import { ViewOrderInfoButton } from 'components/Order/index';
import {
    StartUpdatingModeButton
} from "components/InstancesTable"


export const useActionsPanel = ({ instanceId, setIsUpdatingMode, advancedUpdate }) => {
    const [showOrderDetails, setShowOrderDetails] = useState(false);

    const startUpdatingModeButton = (
        <StartUpdatingModeButton instanceId={instanceId}
            advancedUpdate={advancedUpdate}
            setIsUpdatingMode={setIsUpdatingMode} />
    );

    const deleteInstanceButton = (
        <DeleteInstanceButton instanceId={instanceId} />
    );

    const handleBannerLink = (
        <HandleBannerLink instanceId={instanceId} />
    );

    const viewOrderInfoButton = (
        <ViewOrderInfoButton setShowOrderDetails={setShowOrderDetails} />
    );

    const actionButtons = {
        startUpdatingModeButton,
        deleteInstanceButton,
        handleBannerLink,
        viewOrderInfoButton,
    };


    return { actionButtons, showOrderDetails }
}
