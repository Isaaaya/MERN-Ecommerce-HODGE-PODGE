import { useDeleteInstance } from "hooks/instance/useDeleteInstance";
import { useParams } from "react-router-dom";
import { getDeletionWarning } from "utils/functions/getDeletionWarning";

export const useWarningModal = ({ instanceId }) => {
    const { instanceType } = useParams();
    const { deleteInstance, isDeleteInstancePending } = useDeleteInstance({
        instanceType,
        instanceId,
    });
    const warningContent = getDeletionWarning(instanceType);

    const onDelete = () => {
        deleteInstance();
    };


    return { onDelete, isDeleteInstancePending, warningContent }
}
