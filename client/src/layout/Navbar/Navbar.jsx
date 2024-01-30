import { useListInstances } from "hooks/instance/useListInstances";
import { CollectionLink } from "layout";

const Navbar = ({ extraStyles }) => {
  const { instancesData: collectionsData } = useListInstances({
    configData: { instanceType: "productCollections" },
  });

  return (
    <nav>
      <ul
        className={`flex items-center gap-10 overflow-x-auto w-[85%] mx-auto h-[38px] ${extraStyles}`}
      >
        {collectionsData?.productCollections?.map((collection) => (
          <li className="h-full" key={collection._id}>
            <CollectionLink collection={collection} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
