import {
  TitleCell,
  CollectionCell,
  CategoryCell,
} from "components/InstancesTable";

const InstanceDataCell = ({
  isUpdatingMode,
  content,
  field,
  setUpdatedInstance,
  selectedCollectionId,
  instance,
}) => {
  let cell = content;
  if (field === "Title")
    cell = (
      <TitleCell content={content} setUpdatedInstance={setUpdatedInstance} />
    );
  if (field === "Collection")
    cell = (
      <CollectionCell
        instance={instance}
        isUpdatingMode={isUpdatingMode}
        field={field}
        setUpdatedInstance={setUpdatedInstance}
      />
    );
  if (field === "Category")
    cell = (
      <CategoryCell
        instance={instance}
        setUpdatedInstance={setUpdatedInstance}
        selectedCollectionId={selectedCollectionId}
        isUpdatingMode={isUpdatingMode}
        field={field}
      />
    );

  if (isUpdatingMode) {
    return cell;
  } else return content;
};

export default InstanceDataCell;
