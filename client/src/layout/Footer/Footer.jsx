import { footerNavigations } from "utils/constants";
import { Separator, Logo } from "Components/Common";
import { ArrowRightIcon } from "assets/icons";
import { Container } from "layout";

const Footer = () => {
  return (
    <footer className="bg-[#1e1d1d] text-white/[0.7] py-12 w-[100%]">
      <Container>
        <>
          <Logo theme="dark" />
          <Separator />
        </>
        <div className="flex justify-between gap-10 text-sm text-start max-sm:flex-col max-sm:text-center max-sm:items-center">
          {footerNavigations.map((navigation) => (
            <div key={navigation.title} className="w-[50%] flex flex-col gap-6">
              <p className="tracking-widest uppercase">{navigation.title}</p>
              <div className="flex flex-col gap-5">
                {navigation.values.map((value) => (
                  <p key={value}>{value}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col max-sm:items-center">
          <p className="py-8 tracking-widest text-white uppercase">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
          <div className="flex justify-between gap-10 max-sm:flex-col">
            <div className="relative max-w-[350px]">
              <input
                autoComplete="email"
                name="email"
                type="email"
                placeholder="Email"
                aria-label="Email"
                className="bg-inherit border-b-2 border-yellow pb-5 w-[100%]"
              />
              <button
                aria-label="Send Email"
                className="absolute top-0 bottom-0 right-5"
              >
                <ArrowRightIcon width="25" height="25" />
              </button>
            </div>
          </div>
        </div>
        <Separator />
        <div className="space-y-4 text-center text-white/[0.7]">
          <p>© 2024, HODGE PODGE</p>
          <p>
            Designed with great help of{" "}
            <a
              href="http://www.freepik.com"
              target="_blank"
              rel="noreferrer"
              className="underline "
            >
              Freepik
            </a>{" "}
            Thank You a lot!
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
