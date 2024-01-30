import { PencilSquareIcon } from "assets/icons";
import { Link } from "react-router-dom";

const HandleBannerLink = ({ instanceId }) => {
  return (
    <Link to={`/admin/productCollections/${instanceId}/banner`}>
      <PencilSquareIcon width="25" height="25" />
    </Link>
  );
};

export default HandleBannerLink;
