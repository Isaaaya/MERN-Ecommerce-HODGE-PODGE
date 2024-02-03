import { useState } from "react";

import { DeleteInstanceButton } from 'Components/Instance/index';
import { HandleBannerLink } from 'Components/CollectionBanner/index';
import { ViewOrderInfoButton } from 'Components/Order/index';
import {
    StartUpdatingModeButton
} from "Components/InstancesTable"


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
