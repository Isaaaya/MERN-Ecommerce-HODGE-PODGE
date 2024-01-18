import React from "react";
import { Link } from "react-router-dom";
import { useGetUser } from "hooks/user/useGetUser";

import { CartButton } from "components/Cart/index";
import { OptionalHeaderLinksPanel } from "components/common/index";

const HeaderLinksPanel = () => {
  const { user } = useGetUser();
  return (
    <ul className="flex items-center justify-end gap-3 text-lg [&_li]:h-7 [&_li]:md:border-r-2 [&_li]:pr-3 [&_li]:text-gray-500">
      <li className="hidden w-20 md:block">
        {user?.isAdmin && (
          <Link aria-label="Go to Admin Products Page" to="/admin/products">
            Admin
          </Link>
        )}
      </li>
      <div className="hidden md:flex">
        <OptionalHeaderLinksPanel />
      </div>
      <CartButton />
    </ul>
  );
};

export default HeaderLinksPanel;
