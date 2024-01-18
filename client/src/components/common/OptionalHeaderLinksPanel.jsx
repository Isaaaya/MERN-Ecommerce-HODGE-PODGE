import { Link } from "react-router-dom";
import { useGetUser } from "hooks/user/useGetUser";

import { headerLinks } from "utils/constants";
import { UserSolidIcon } from "components/Icons/index";
import React from "react";

const OptionalHeaderLinksPanel = ({ setIsSideNavMenuOpen }) => {
  const { user } = useGetUser();

  const closeSideNavModal = () => {
    if (setIsSideNavMenuOpen) {
      setIsSideNavMenuOpen(false);
    }
  };

  return (
    <ul className="flex items-end h-full gap-3 list-none">
      {headerLinks.map((page, index) => {
        let content;
        if (user && page.link === "/auth/signin")
          content = (
            <Link aria-label="Go to Profile Page" to="/profile">
              <UserSolidIcon />
            </Link>
          );
        else
          content = (
            <Link aria-label={`Go to ${page.link} Page`} to={`${page.link}`}>
              {page.icon}
            </Link>
          );
        return (
          <li className="text-gray-500" onClick={closeSideNavModal} key={index}>
            {content}
          </li>
        );
      })}
    </ul>
  );
};

export default OptionalHeaderLinksPanel;
