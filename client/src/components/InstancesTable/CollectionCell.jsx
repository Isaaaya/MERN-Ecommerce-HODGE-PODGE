import React from "react";
import { useListInstances } from "hooks/instance/useListInstances";
import { useEffect } from "react";

const CollectionCell = ({
  isUpdatingMode,
  field,
  setUpdatedInstance,
  instance,
}) => {
  const { instancesData: collectionsData } = useListInstances({
    configData: { instanceType: "productCollections" },
    enabled: isUpdatingMode && field === "Collection",
  });

  useEffect(() => {
    if (instance?.productCollection?._id)
      setUpdatedInstance((prevState) => ({
        ...prevState,
        productCollection: instance?.productCollection?._id,
      }));
  }, [instance?.productCollection?._id, setUpdatedInstance]);

  return (
    <select
      aria-label="Collections"
      defaultValue={instance?.productCollection?._id || ""}
      onChange={(e) =>
        setUpdatedInstance((prevState) => ({
          ...prevState,
          productCollection: e.target.value,
        }))
      }
    >
      {collectionsData?.productCollections?.map((collection) => (
        <option key={collection?._id} value={collection?._id}>
          {collection?.title}
        </option>
      ))}
    </select>
  );
};

export default CollectionCell;
