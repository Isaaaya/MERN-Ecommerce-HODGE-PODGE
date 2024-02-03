import { Button } from "components/Common/index";

const UpdateBannerButton = ({ updateBanner, isUpdateBannerPending }) => {
  return (
    <Button
      disabled={isUpdateBannerPending}
      spinner={isUpdateBannerPending}
      caption="Update"
      onClick={updateBanner}
      extraStyles="w-[120px] h-10"
      theme="basicDark"
    />
  );
};

export default UpdateBannerButton;
