import { handleChange } from "utils/functions/handleChange";
import { userInputFields } from "utils/constants";
import { useUpdateUser } from "hooks/user/useUpdateUser";

import { Spinner } from "components/Icons";
import { SignoutButton, UpdateUserButton } from "components/common/index";
import { Container } from "components/Wrappers";

const UserProfilePage = () => {
  const { updatedUser, updateUser, setUpdatedUser, isUpdateUserPending } =
    useUpdateUser();

  const updateInputFields = updatedUser ? (
    userInputFields.map((input) => {
      if (input.name === "password") return null;
      return (
        <input
          onKeyDown={(e) => e.key === "Enter" && updateUser()}
          aria-label={input.name}
          className="p-3 border-b-[2px] border-[#ff8156] focus:outline-none"
          value={updatedUser[input.name] || ""}
          type={input.type}
          key={input.name}
          name={input.name}
          placeholder={input.placeholder}
          onChange={(e) => handleChange(e, setUpdatedUser)}
        />
      );
    })
  ) : (
    <Spinner />
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
