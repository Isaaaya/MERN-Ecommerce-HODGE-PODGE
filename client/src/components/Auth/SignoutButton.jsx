import { useSignout } from "hooks/auth/useSignout";

import { Button } from "components/Common";

const SignoutButton = () => {
  const { signout } = useSignout();
  return (
    <Button
      onClick={signout}
      caption="Logout"
      theme="danger"
      extraaStyles="w-[150px] h-10 mx-auto"
    />
  );
};

export default SignoutButton;
