import { useState } from "react";
import { fetchByDotOperator } from "utils/functions/fetchByDotOperator";
import { useGetInstanceGroupData } from "hooks/instance/useGetInstanceGroupData";

import { InstanceDataCell, ActionsPanel } from "Components/InstancesTable";

const InstanceDataRow = ({ instance }) => {
  const [updatedInstance, setUpdatedInstance] = useState(null);
  const [isUpdatingMode, setIsUpdatingMode] = useState(false);

  const { fields, fieldsTitles, advancedUpdate, actionOptions } =
    useGetInstanceGroupData();

  const tdClasses =
    "border-[0.5px] md:border-none max-md:before:mr-10 break-words".split(" ");

  return (
    <tr
      key={instance?._id}
      className={`odd:bg-gray-200/[0.3] border-b-2 ${tdClasses.map(
        (tdClass) => `[&_td]:${tdClass}`
      )}`}
    >
      {fields.map((field, index) => (
        <td
          data-cell={fieldsTitles[index]}
          className="max-md:before:content-[attr(data-cell)] before:capitalize before:font-bold md:max-w-[120px] [&_*]:w-[200px] [&_*]:md:w-[110px] [&_*]:rounded-md overflow-x-auto"
          key={field}
        >
          <InstanceDataCell
            instance={instance}
            field={fieldsTitles[index]}
            isUpdatingMode={isUpdatingMode}
            content={fetchByDotOperator(instance, field)}
            setUpdatedInstance={setUpdatedInstance}
            selectedCollectionId={updatedInstance?.productCollection}
          />
        </td>
      ))}
      <td
        data-cell="actions"
        className="max-md:before:content-[attr(data-cell)] before:capitalize before:font-bold md:w-[120px]"
      >
        <ActionsPanel
          actionOptions={actionOptions}
          isUpdatingMode={isUpdatingMode}
          setIsUpdatingMode={setIsUpdatingMode}
          advancedUpdate={advancedUpdate}
          instance={instance}
          updatedInstance={updatedInstance}
        />
      </td>
    </tr>
  );
};

export default InstanceDataRow;
