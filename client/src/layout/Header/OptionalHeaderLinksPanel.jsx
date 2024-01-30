import { Link } from "react-router-dom";
import { useGetUser } from "hooks/user/useGetUser";

import { headerLinks } from "utils/constants";
import { UserSolidIcon } from "assets/icons";

const OptionalHeaderLinksPanel = ({ closeSideNav }) => {
  const { user } = useGetUser();

  return (
    <ul className="flex items-end h-full gap-3 list-none">
      {headerLinks.map((page, index) => {
        let content;
        if (user && page.link === "/auth/signin")
          content = (
            <Link aria-label="Go to Profile Page" to="/profile">
              <UserSolidIcon width="30" height="30" />
            </Link>
          );
        else
          content = (
            <Link aria-label={`Go to ${page.link} Page`} to={`${page.link}`}>
              {page.icon}
            </Link>
          );
        return (
          <li className="text-gray-500" onClick={closeSideNav} key={index}>
            {content}
          </li>
        );
      })}
    </ul>
  );
};

export default OptionalHeaderLinksPanel;
