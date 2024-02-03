import { Link } from "react-router-dom";
import { useGetUser } from "hooks/user/useGetUser";
import { usePreventScroll } from "hooks/preventScroll/usePreventScroll";
import { useCloseWhenWidthIsMoreThan } from "hooks/sideNavMenu/useCloseWhenWidthIsMoreThan";

import { SideNavCollectionsList, OptionalHeaderLinksPanel } from "layout";

const SideNavMenu = ({ closeSideNav, isSideNavMenuOpen }) => {
  const { user } = useGetUser();
  useCloseWhenWidthIsMoreThan(767, closeSideNav);
  usePreventScroll({ condition: isSideNavMenuOpen });

  const adminLink = user?.isAdmin && (
    <Link
      className="self-end text-[#0B6623] font-serif font-semibold"
      onClick={closeSideNav}
      aria-label="Go to Admin Products Page"
      to="/admin/products"
    >
      Admin
    </Link>
  );

  return (
    <div
      onClick={closeSideNav}
      className={
        isSideNavMenuOpen
          ? `fixed h-screen top-0 left-0 bg-black/[0.5] w-screen z-50 overflow-hidden`
          : ""
      }
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 left-0 h-screen bg-white border-2 transition-all duration-300 ease-in-out w-[70%] z-50 p-6 space-y-10 overflow-y-auto flex flex-col text-center ${
          !isSideNavMenuOpen && "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-3">
            {adminLink}
            <OptionalHeaderLinksPanel closeSideNav={closeSideNav} />
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
