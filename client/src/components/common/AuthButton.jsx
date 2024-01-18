import React from "react";
import { Button } from "components/common";

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
