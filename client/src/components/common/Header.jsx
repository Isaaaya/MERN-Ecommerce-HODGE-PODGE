import { useLocation } from "react-router-dom";
import { HeaderLinksPanel, Logo, RunningLine } from "components/common/index";
import { SideNavMenu, Navbar } from "components/Navbar/index";
import { Container } from "components/Wrappers";

const Header = () => {
  const location = useLocation();

  return (
    <header className=" flex flex-col text-[#1f2242] shadow-sm bg-white w-[100%] relative">
      <RunningLine isAnimated={location?.pathname === "/"} />
      <Container extraStyles="flex flex-col mx-auto gap-5">
        <div className="flex justify-between pt-6 text-end">
          <SideNavMenu />
          <Logo theme="light" />
          <HeaderLinksPanel />
        </div>
        <Navbar extraStyles="max-md:hidden" />
      </Container>
    </header>
  );
};

export default Header;
