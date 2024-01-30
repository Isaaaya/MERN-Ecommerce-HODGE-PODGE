import { useContext } from "react";

import { MenuIcon } from "assets/icons";
import { SideNavMenuContext } from "context/SideNavMenuContext";
import SideNavMenu from "./SideNavMenu";

const SideNavMenuButton = () => {
  const { isSideNavMenuOpen, setIsSideNavMenuOpen } =
    useContext(SideNavMenuContext);

  const openSideNav = () => {
    setIsSideNavMenuOpen(true);
  };

  const closeSideNav = () => {
    setIsSideNavMenuOpen(false);
  };

  return (
    <div className="flex items-end">
      <button
        aria-label="Open Side Navbar Button"
        className="flex items-end w-8 h-8 md:invisible"
        onClick={openSideNav}
      >
        <MenuIcon width="30" height="30" />
      </button>
      <SideNavMenu
        closeSideNav={closeSideNav}
        isSideNavMenuOpen={isSideNavMenuOpen}
      />
    </div>
  );
};

export default SideNavMenuButton;
