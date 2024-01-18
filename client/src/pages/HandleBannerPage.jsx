import { useParams, Link } from "react-router-dom";
import { handleChange } from "utils/functions/handleChange";
import { useCollectionBanner } from "hooks/collectionBanner/useCollectionBanner";

import { ImageUpload } from "components/Image/index";
import {
  ColorPickers,
  UpdateBannerButton,
  DeleteBannerButton,
  CreateBannerButton,
} from "components/CollectionBanner/index";
import { Container } from "components/Wrappers";

const HandleBannerPage = () => {
  const { productCollectionId } = useParams();
  const {
    mode,
    banner,
    setBanner,
    setBannerImage,
    createBanner,
    isCreateBannerPending,
    deleteBanner,
    isDeleteBannerPending,
    updateBanner,
    isUpdateBannerPending,
  } = useCollectionBanner({ productCollectionId });

  return (
    <section>
      <Container>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative flex flex-col gap-10 w-[100%] h-screen bg-white rounded-lg shadow-lg overflow-y-auto p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-semibold capitalize">
                {mode} Banner for Collection
              </h3>
              <Link to="/admin/productCollections">x</Link>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col items-start gap-7 md:flex-row">
                <ImageUpload
                  setValue={setBannerImage}
                  imageUrl={banner?.imageUrl}
                />
                <div className="flex flex-col items-center justify-center gap-5 w-[100%]">
                  <input
                    aria-label="Caption"
                    onChange={(e) => handleChange(e, setBanner)}
                    value={banner?.caption}
                    name="caption"
                    type="text"
                    placeholder="Caption"
                    className="w-[100%] p-2 rounded-md border-2 font-bold"
                    style={{ color: banner?.captionColor }}
                  />
                  <ColorPickers
                    color={banner?.captionColor}
                    setColor={(color) =>
                      setBanner((prevState) => ({
                        ...prevState,
                        captionColor: color.hex,
                      }))
                    }
                  />
                </div>
              </div>
              <textarea
                value={banner?.content}
                onChange={(e) => handleChange(e, setBanner)}
                type="text"
                name="content"
                placeholder="Content"
                className="border-2 rounded-md resize-none text-lg h-[170px] p-4 text-gray-600"
              />
            </div>
            <div className="space-x-5">
              {mode === "update" ? (
                <div className="flex gap-3">
                  <UpdateBannerButton
                    updateBanner={updateBanner}
                    isUpdateBannerPending={isUpdateBannerPending}
                  />
                  <DeleteBannerButton
                    deleteBanner={deleteBanner}
                    isDeleteBannerPending={isDeleteBannerPending}
                  />
                </div>
              ) : (
                <CreateBannerButton
                  isCreateBannerPending={isCreateBannerPending}
                  createBanner={createBanner}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HandleBannerPage;
