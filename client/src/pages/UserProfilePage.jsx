import { handleChange } from "utils/functions/handleChange";
import { userInputFields } from "utils/constants";
import { useUpdateUser } from "hooks/user/useUpdateUser";
import { camelize } from "utils/functions/camelize";
import { handleKeyDown } from "utils/functions/handleKeyDown";

import { Spinner } from "assets/icons";
import { UpdateUserButton } from "components/User";
import { SignoutButton } from "components/Auth";
import { Container } from "layout";

const UserProfilePage = () => {
  const { updatedUser, updateUser, setUpdatedUser, isUpdateUserPending } =
    useUpdateUser();

  const updateInputFields = updatedUser ? (
    userInputFields.map((input) => {
      if (input.caption === "Password") return null;
      return (
        <input
          onKeyDown={(e) =>
            handleKeyDown(e, { selectedKey: "Enter", callback: updateUser })
          }
          aria-label={input.caption}
          className="p-3 border-b-[2px] border-[#ff8156] focus:outline-none"
          value={updatedUser[camelize(input.caption)] || ""}
          type={input.type}
          key={input.caption}
          name={camelize(input.caption)}
          placeholder={input.caption}
          onChange={(e) => handleChange(e, setUpdatedUser)}
        />
      );
    })
  ) : (
    <Spinner width="25" height="25" />
  );

  return (
    <section className="py-12">
      <Container extraStyles="flex flex-col items-center w-full gap-10 text-center">
        <p className="text-4xl font-semibold text-center">
          Update your profile
        </p>
        <div className="flex flex-col justify-center w-[80%] h-[200px] max-w-[500px] mx-auto gap-6">
          {updateInputFields}
        </div>
        <div className="flex gap-5 mx-auto w-fit">
          <UpdateUserButton
            updateUser={updateUser}
            isUpdateUserPending={isUpdateUserPending}
            updatedUser={updatedUser}
          />
          <SignoutButton />
        </div>
      </Container>
    </section>
  );
};

export default UserProfilePage;
