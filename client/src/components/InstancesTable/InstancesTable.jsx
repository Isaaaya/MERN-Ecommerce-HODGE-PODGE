import { useGetInstanceGroupData } from "hooks/instance/useGetInstanceGroupData";

import { InstanceDataRow } from "components/InstancesTable";

const InstancesTable = ({ instances }) => {
  const { fieldsTitles } = useGetInstanceGroupData();

  return (
    <table className="p-4 w-[100%] [&_th]:p-4 [&_td]:p-4 md:[&_th]:text-center md:[&_td]:text-center max-md:[&_td]:grid max-md:[&_td]:grid-cols-2">
      <thead className="py-10 max-md:hidden">
        <tr>
          {fieldsTitles?.map((title) => (
            <th key={title}>{title}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {instances?.map((instance) => (
          <InstanceDataRow key={instance?._id} instance={instance} />
        ))}
      </tbody>
    </table>
  );
};

export default InstancesTable;
