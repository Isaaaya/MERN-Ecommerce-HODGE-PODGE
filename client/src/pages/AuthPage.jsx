import { userInputFields } from "utils/constants";
import { Link } from "react-router-dom";
import { handleChange } from "utils/functions/handleChange";
import { handleKeyDown } from "utils/functions/handleKeyDown";
import { useAuth } from "hooks/auth/useAuth";
import { camelize } from "utils/functions/camelize";

import { Container } from "layout";
import { AuthButton } from "Components/Auth";
import { getAuthCaptions } from "utils/functions/getAuthCaptions";

const AuthPage = () => {
  const { user, setUser, auth, isAuthPending, mode } = useAuth();
  const { heading, alternativePagePath, goToAlternativePageLabel } =
    getAuthCaptions(mode);

  return (
    <section className="mx-auto my-[60px] flex flex-col gap-10 text-center">
      <Container extraStyles="flex flex-col items-center gap-10 text-center w-full">
        <p className="max-md:text-3xl text-5xl font-semibold text-[#1e2242]">
          {heading}
        </p>
        <div className="flex flex-col w-[80%] max-w-[500px] mx-auto gap-6">
          {userInputFields.map((input) => {
            if (mode === "signin" && !input.showAtSignin) return null;
            return (
              <input
                onKeyDown={(e) =>
                  handleKeyDown(e, { selectedKey: "Enter", callback: auth })
                }
                aria-label={input.caption}
                className="p-3 border-b-[2px] border-[#ff8156] focus:outline-none"
                value={user[camelize(input.caption)]}
                type={input.type}
                key={input.caption}
                name={camelize(input.caption)}
                placeholder={input.caption}
                onChange={(e) => handleChange(e, setUser)}
              />
            );
          })}
        </div>
        <AuthButton auth={auth} isAuthPending={isAuthPending} mode={mode} />
        <Link
          className="capitalize"
          aria-label={`Go to ${alternativePagePath} Page`}
          to={`/auth/${alternativePagePath}`}
        >
          <p className="underline underline-offset-2">
            {goToAlternativePageLabel}
          </p>
        </Link>
      </Container>
    </section>
  );
};

export default AuthPage;
