import { Button } from "components/Common/index.js";

const AuthButton = ({ auth, isAuthPending, mode }) => {
  return (
    <Button
      extraStyles="w-[120px] mx-auto h-10"
      theme="basicDark"
      onClick={auth}
      disabled={isAuthPending}
      spinner={isAuthPending}
      caption={mode === "signin" ? "Sign In" : "Sign up"}
    />
  );
};

export default AuthButton;
