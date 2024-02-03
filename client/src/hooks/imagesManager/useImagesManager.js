import { useState } from "react";

export const useImagesManager = ({ setValue, images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
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

    return { removeImage, setMainImage, setImages, selectedImageIndex, setSelectedImageIndex }
}
