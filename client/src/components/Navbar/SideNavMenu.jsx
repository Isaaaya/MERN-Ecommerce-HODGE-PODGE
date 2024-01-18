import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useScreenSize } from "hooks/screenSize/useScreenSize";
import { useGetUser } from "hooks/user/useGetUser";

import { XMarkIcon, MenuIcon } from "components/Icons/index";
import { OptionalHeaderLinksPanel } from "components/common/index";
import { SideNavCollectionsList } from "components/Navbar/index";
import { SideNavMenuContext } from "context/SideNavMenuContext";

const SideNavMenu = () => {
  const { user } = useGetUser();
  const { isSideNavMenuOpen, setIsSideNavMenuOpen } =
    useContext(SideNavMenuContext);
  const { screenSize } = useScreenSize();

  useEffect(() => {
    if (document) {
      document.body.style.overflow = isSideNavMenuOpen ? "hidden" : "auto";
    }
  }, [isSideNavMenuOpen]);

  useEffect(() => {
    if (screenSize?.width > 767) {
      setIsSideNavMenuOpen(false);
    }
  }, [screenSize?.width, setIsSideNavMenuOpen]);

  return (
    <div className="w-[70px] md:w-[230px] text-start flex items-center">
      <button
        aria-label="Open Side Navbar Button"
        className="w-8 h-8 md:invisible"
        onClick={() => setIsSideNavMenuOpen((prevState) => !prevState)}
      >
        <MenuIcon />
      </button>
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 left-0 h-screen bg-white border-2 transition-all duration-300 ease-in-out w-full z-50 p-6 space-y-7 overflow-y-auto ${
          !isSideNavMenuOpen && "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <button
            aria-label="Close Side Navbar Button"
            className="text-black"
            onClick={() => setIsSideNavMenuOpen(false)}
          >
            <XMarkIcon />
          </button>
          <div className="flex items-center gap-3">
            {user?.isAdmin && (
              <Link
                onClick={() => setIsSideNavMenuOpen(false)}
                aria-label="Go to Admin Products Page"
                to="/admin/products"
              >
                Admin
              </Link>
            )}
            <OptionalHeaderLinksPanel
              setIsSideNavMenuOpen={setIsSideNavMenuOpen}
            />
          </div>
        </div>
        <nav>
          <SideNavCollectionsList />
        </nav>
      </aside>
    </div>
  );
};

export default SideNavMenu;
