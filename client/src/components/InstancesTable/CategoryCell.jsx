import React from "react";
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

  return (
    <select
      aria-label="Categories"
      defaultValue={instance?.category?._id || ""}
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
