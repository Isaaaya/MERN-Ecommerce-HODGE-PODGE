import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { uploadImageAPI } from "api/image";

export const useImageUpload = ({ imageUrl, images, setValue }) => {
    const [preview, setPreview] = useState(
        imageUrl || (images && images[images?.length - 1]) || ""
    );

    const clearInput = (e) => {
        e.target.value = null;
    };

    useEffect(() => {
        if (imageUrl?.length > 0) setPreview(imageUrl);
    }, [imageUrl]);

    useEffect(() => {
        if (images?.length > 0) setPreview(images[images?.length - 1])
        else setPreview('');
    }, [images]);

    const uploadImage = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];

        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(file);
        }

        reader.onload = () => {
            setPreview(reader.result);
        };

        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", 'HODGE-PODGE');
        formData.append(
            "upload_preset",
            process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
        );

        uploadPicture(formData);
    };

    const { mutate: uploadPicture, isPending: isUploadPicturePending } = useMutation({
        mutationFn: (formData) => uploadImageAPI({ formData }),
        onSuccess: (res) => {
            setValue(res.data.secure_url);
        },
    });


    return { preview, uploadImage, isUploadPicturePending, clearInput }
}
