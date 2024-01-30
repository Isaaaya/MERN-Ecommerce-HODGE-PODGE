import { useEffect } from "react";
import { useGetCollectionCategories } from "hooks/collection/useGetCollectionCategories";

const CategoryCell = ({
  setUpdatedInstance,
  selectedCollectionId,
  isUpdatingMode,
  field,
  instance,
}) => {
  const { collectionCategories } = useGetCollectionCategories({
    selectedCollectionId,
    isUpdatingMode,
    field,
  });

  useEffect(() => {
    if (instance?.category?._id) {
      setUpdatedInstance((prevState) => ({
        ...prevState,
        category: instance?.category?._id,
      }));
    }
  }, [instance?.category?._id, setUpdatedInstance]);

  if (collectionCategories)
    return (
      <select
        aria-label="Categories"
        defaultValue={instance?.category?._id}
        onChange={(e) =>
          setUpdatedInstance((prevState) => ({
            ...prevState,
            category: e.target.value,
          }))
        }
      >
        {collectionCategories?.map((category) => (
          <option key={category?._id} value={category?._id}>
            {category?.title}
          </option>
        ))}
      </select>
    );
};

export default CategoryCell;
