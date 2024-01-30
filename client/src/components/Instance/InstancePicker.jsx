const InstancePicker = ({ data, setData, value, selectInstances }) => {
  return (
    <select
      aria-label="Instances"
      onChange={(e) => setData({ ...data, [value]: e.target.value })}
      className="p-2 text-lg border rounded-md w-[100%] text-gray-500"
    >
      <option>Select</option>
      {selectInstances &&
        selectInstances?.map((instance) => (
          <option key={instance?._id} value={instance?._id}>
            {instance?.title}
          </option>
        ))}
    </select>
  );
};

export default InstancePicker;
