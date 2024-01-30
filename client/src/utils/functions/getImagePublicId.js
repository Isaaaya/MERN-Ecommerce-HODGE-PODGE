export const getImagePublicId = (imageURL) => {
    return imageURL ? imageURL?.split("/").pop().split(".")[0] : null;
}