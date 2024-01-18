import { useState } from "react";
import { useCreateInstance } from "hooks/instance/useCreateInstance";
import {
  CreateInstanceButton,
  InstancePicker,
} from "components/Instance/index";

const CreateInstanceForm = ({
  caption,
  select,
  selectInstances,
  instanceType,
}) => {
  const [groupData, setGroupData] = useState({ title: "", parentGroupId: "" });
  const { createInstance, isCreateInstancePending } = useCreateInstance({
    instanceType,
    data: groupData,
    setData: () => setGroupData({ title: "", parentGroupId: "" }),
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      createInstance();
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="p-5 m-5 space-y-4 border-2 shadow-md rounded-md w-[90%] md:w-[35%]  min-w-[200px] h-fit"
    >
      <p className="text-lg font-semibold">{caption}</p>
      {select && (
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
        onKeyDown={handleKeyDown}
        onChange={(e) => setGroupData({ ...groupData, title: e.target.value })}
        className="w-full p-2 text-lg border-2 rounded-md"
        type="text"
        placeholder="Title"
      />
      <CreateInstanceButton
        extraStyles="w-[200px] md:w-full h-9 mx-auto"
        caption="Add"
        spinner={isCreateInstancePending}
        disabled={isCreateInstancePending}
        handleClick={createInstance}
      />
    </form>
  );
};

export default CreateInstanceForm;
