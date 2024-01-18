import { NavLink } from "react-router-dom";
import { adminNavbarLinks } from "../../utils/constants";

import { Container } from "components/Wrappers";

const AdminNavbar = () => {
  return (
    <Container>
      <nav className="pt-10">
        <ul className="flex h-10 px-4 overflow-x-auto gap-7">
          {adminNavbarLinks.map((item) => (
            <li key={item.link} className="whitespace-nowrap">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" +
                  (isActive ? " activated border-b-4 font-semibold pb-1" : "")
                }
                aria-label="Go to the Admin Page"
                to={`/admin/${item.link}`}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default AdminNavbar;
