import { ProductFormGroupPicker } from "Components/Product";
import { useGroupPickerValues } from "hooks/groupPickerValues/useGroupPickerValues";

const GroupPickerManager = ({ product, setProduct }) => {
  const { groupPickersValues } = useGroupPickerValues({ product });
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-[85%] mx-auto justify-center">
      {groupPickersValues?.map((picker, index) => (
        <ProductFormGroupPicker
          key={index}
          defaultValue={picker?.defaultValue}
          setProduct={setProduct}
          defaultCaption={picker?.defaultCaption}
          setSelectedGroupId={picker?.setSelectedGroupId}
          instances={picker?.instances}
          productField={picker?.productField}
        />
      ))}
    </div>
  );
};

export default GroupPickerManager;
