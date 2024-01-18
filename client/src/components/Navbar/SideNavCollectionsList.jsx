import { SideNavCollectionItem } from "components/Navbar/index";
import { useListInstances } from "hooks/instance/useListInstances";

const SideNavCollectionsList = () => {
  const { instancesData: productCollectionsData } = useListInstances({
    configData: { instanceType: "productCollections", limit: 100 },
  });

  return (
    <ul className="flex flex-col items-start h-full pb-3 overflow-x-auto text-xl gap-7 last:text-end">
      {productCollectionsData?.productCollections?.map((collection) => (
        <SideNavCollectionItem key={collection?._id} collection={collection} />
      ))}
    </ul>
  );
};

export default SideNavCollectionsList;
