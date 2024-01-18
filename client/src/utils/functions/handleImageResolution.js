export const handleImageResolution = (image, width) => {
    if (image) return image.replace("upload/", `upload/w_${width}/`);
    else return;
};