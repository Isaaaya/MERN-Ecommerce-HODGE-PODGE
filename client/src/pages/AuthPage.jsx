import { userInputFields } from "utils/constants";
import { Link } from "react-router-dom";
import { handleChange } from "utils/functions/handleChange";
import { useAuth } from "hooks/auth/useAuth";
import { useGetAuthMode } from "hooks/auth/useGetAuthMode";

import { Container } from "components/Wrappers";
import { AuthButton } from "components/common";

const AuthPage = () => {
  const { mode } = useGetAuthMode();
  const { user, setUser, auth, isAuthPending } = useAuth({ mode });

  return (
    <section className=" mx-auto my-[60px] flex flex-col gap-10 text-center">
      <Container extraStyles="flex flex-col items-center gap-10 text-center w-full">
        <p className="max-md:text-3xl text-5xl font-semibold text-[#1e2242]">
          {mode === "signin" ? "Login" : "Create account"}
        </p>
        <div className="flex flex-col w-[80%] max-w-[500px] mx-auto gap-6">
          {userInputFields.map((input) => {
            if (
              mode === "signin" &&
              (input.name === "firstName" || input.name === "lastName")
            )
              return null;
            return (
              <input
                onKeyDown={(e) => e.key === "Enter" && auth()}
                aria-label={input.name}
                className="p-3 border-b-[2px] border-[#ff8156] focus:outline-none"
                value={user[input.name]}
                type={input.type}
                key={input.name}
                name={input.name}
                placeholder={input.placeholder}
                onChange={(e) => handleChange(e, setUser)}
              />
            );
          })}
        </div>
        <AuthButton auth={auth} isAuthPending={isAuthPending} mode={mode} />
        <Link
          aria-label={`Go to ${mode === "signin" ? "signup" : "signin"} Page`}
          to={`/auth/${mode === "signin" ? "signup" : "signin"}`}
        >
          <p className="underline underline-offset-2">
            {mode === "signin"
              ? "Don't have an account yet?"
              : "Already have an account?"}
          </p>
        </Link>
      </Container>
    </section>
  );
};

export default AuthPage;
