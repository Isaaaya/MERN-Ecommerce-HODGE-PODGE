import { useLocation } from "react-router-dom";
import { Logo, RunningLine } from "components/Common";
import { Navbar, HeaderLinksPanel, SideNavMenuButton, Container } from "layout";

const Header = () => {
  const location = useLocation();
  const isAnimated = location?.pathname === "/";

  return (
    <header className=" flex flex-col text-[#1f2242] shadow bg-white w-[100%] relative z-30">
      <RunningLine isAnimated={isAnimated} />
      <Container extraStyles="flex flex-col mx-auto gap-6">
        <div className="flex items-center justify-between pt-6 text-end">
          <SideNavMenuButton />
          <Logo theme="light" />
          <HeaderLinksPanel />
        </div>
        <Navbar extraStyles="max-md:hidden" />
      </Container>
    </header>
  );
};

export default Header;
