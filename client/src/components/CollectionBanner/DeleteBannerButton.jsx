import { Button } from "components/Common/index";

const DeleteBannerButton = ({ deleteBanner, isDeleteBannerPending }) => {
  return (
    <Button
      disabled={isDeleteBannerPending}
      spinner={isDeleteBannerPending}
      caption="Delete"
      onClick={deleteBanner}
      extraStyles="w-[120px]"
      theme="danger"
    />
  );
};

export default DeleteBannerButton;
