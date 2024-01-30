import { Button } from "components/common";

const CreateBannerButton = ({ createBanner, isCreateBannerPending }) => {
  return (
    <Button
      disabled={isCreateBannerPending}
      spinner={isCreateBannerPending}
      caption="Create"
      onClick={createBanner}
      extraStyles="w-[120px] h-10"
      theme="basicDark"
    />
  );
};

export default CreateBannerButton;
