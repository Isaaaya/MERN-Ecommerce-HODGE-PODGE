
export const useImagesManager = ({ setValue, images }) => {
    const removeImage = (selectedImage) => {
        setValue((prevState) => ({
            ...prevState,
            images: images.filter((image) => image !== selectedImage),
        }));
    };

    const setMainImage = (selectedImage) => {
        setValue((prevState) => ({
            ...prevState,
            images: [
                selectedImage,
                ...images.filter((image) => image !== selectedImage),
            ],
        }));
    };

    const setImages = (value) => {
        setValue((prevState) => ({
            ...prevState,
            images: [...images, value],
        }));
    };

    return { removeImage, setMainImage, setImages }
}
