import { Button } from "components/common";

const UpdateUserButton = ({ updateUser, isUpdateUserPending, updatedUser }) => {
  const handleUpdateUser = () => {
    updateUser(updatedUser);
  };
  return (
    <Button
      theme="basicDark"
      extraStyles="w-[150px] h-10 mx-auto"
      caption="Update"
      disabled={isUpdateUserPending}
      spinner={isUpdateUserPending}
      onClick={handleUpdateUser}
    />
  );
};

export default UpdateUserButton;
