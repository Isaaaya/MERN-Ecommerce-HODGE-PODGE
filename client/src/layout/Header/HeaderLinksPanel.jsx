import { Link } from "react-router-dom";
import { useGetUser } from "hooks/user/useGetUser";

import { CartButton } from "components/Cart";
import { OptionalHeaderLinksPanel } from "layout";

const HeaderLinksPanel = () => {
  const { user } = useGetUser();
  const adminLink = user?.isAdmin && (
    <Link aria-label="Go to Admin Products Page" to="/admin/products">
      Admin
    </Link>
  );

  return (
    <ul className="flex items-center justify-center gap-3 text-lg [&_li]:h-7 [&_li]:md:border-r-2 [&_li]:pr-3 [&_li]:text-gray-500">
      <li className="hidden w-20 md:block">{adminLink}</li>
      <div className="hidden md:flex">
        <OptionalHeaderLinksPanel />
      </div>
      <CartButton />
    </ul>
  );
};

export default HeaderLinksPanel;
