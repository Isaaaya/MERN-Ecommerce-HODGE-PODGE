import React from "react";
import { useSignout } from "hooks/auth/useSignout";

import { Button } from "components/common";

const SignoutButton = () => {
  const { signout } = useSignout();
  return (
    <Button
      onClick={signout}
      caption="Logout"
      theme="danger"
      extraStyles="w-[150px] h-10 mx-auto"
    />
  );
};

export default SignoutButton;
