import { useState } from "react";
import { useCreateInstance } from "hooks/instance/useCreateInstance";
import { HandleInstanceButton, InstancePicker } from "Components/Instance";
import { handleKeyDown } from "utils/functions/handleKeyDown";

const CreateInstanceForm = ({ selectInstances, instanceType }) => {
  const [groupData, setGroupData] = useState({ title: "", parentGroupId: "" });
  const { createInstance, isCreateInstancePending } = useCreateInstance({
    instanceType,
    data: groupData,
    setData: () => setGroupData({ title: "", parentGroupId: "" }),
  });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="p-5 m-5 space-y-4 border-2 shadow-md rounded-md w-[90%] max-w-[450px] h-fit"
    >
      <p className="text-lg font-semibold">Add New Instance</p>
      <div className="flex gap-4">
        {selectInstances?.length > 0 && (
          <InstancePicker
            value="parentGroupId"
            data={groupData}
            setData={setGroupData}
            selectInstances={selectInstances}
          />
        )}
        <input
          aria-label="Title"
          value={groupData.title}
          onKeyDown={(e) =>
            handleKeyDown(e, { selectedKey: "Enter", callback: createInstance })
          }
          onChange={(e) =>
            setGroupData({ ...groupData, title: e.target.value })
          }
          className="w-full p-2 text-lg border-2 rounded-md"
          type="text"
          placeholder="Title"
        />
      </div>
      <HandleInstanceButton
        extraStyles="w-fit px-20 h-9 mx-auto"
        caption="Add"
        spinner={isCreateInstancePending}
        disabled={isCreateInstancePending}
        onClick={createInstance}
      />
    </form>
  );
};

export default CreateInstanceForm;
