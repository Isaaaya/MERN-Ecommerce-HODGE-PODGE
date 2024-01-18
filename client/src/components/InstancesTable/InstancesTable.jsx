import { InstanceDataRow } from "components/InstancesTable/index";

const InstancesTable = ({
  instances,
  fields,
  fieldsTitles,
  advancedUpdate,
  actionOptions,
}) => {
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
          <InstanceDataRow
            key={instance?._id}
            instance={instance}
            fields={fields}
            fieldsTitles={fieldsTitles}
            actionOptions={actionOptions}
            advancedUpdate={advancedUpdate}
          />
        ))}
      </tbody>
    </table>
  );
};

export default InstancesTable;
