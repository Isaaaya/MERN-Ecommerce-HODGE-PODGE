import { useListInstances } from "hooks/instance/useListInstances";
import { CollectionLink } from "components/Navbar/index";

const Navbar = ({ extraStyles }) => {
  const { instancesData: collectionsData } = useListInstances({
    configData: { instanceType: "productCollections" },
  });

  return (
    <nav>
      <ul
        className={`flex items-center gap-12 overflow-x-auto w-[80%] mx-auto h-9 ${extraStyles}`}
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
