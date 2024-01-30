import { useSelectGroupInstance } from "hooks/instance/useSelectGroupInstance";

const ProductFormGroupPicker = ({
  instances,
  defaultCaption,
  setProduct,
  setSelectedGroupId,
  productField,
  defaultValue,
}) => {
  const { handleGroupInstanceChange, groupInstances } = useSelectGroupInstance({
    instances,
    setProduct,
    productField,
    setSelectedGroupId,
  });

  return (
    <select
      aria-label="Instances"
      value={defaultValue}
      onChange={handleGroupInstanceChange}
      className="p-2 text-gray-600 border-2 rounded-lg"
    >
      <option>{defaultCaption}</option>
      {groupInstances?.map((instance) => (
        <option key={instance?._id} value={instance?._id}>
          {instance?.title}
        </option>
      ))}
    </select>
  );
};

export default ProductFormGroupPicker;
