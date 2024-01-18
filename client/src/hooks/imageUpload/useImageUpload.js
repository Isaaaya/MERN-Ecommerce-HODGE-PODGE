import { useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export const useImageUpload = ({ imageUrl, images, setValue }) => {
    const [preview, setPreview] = useState(
        imageUrl || (images && images[images?.length - 1]) || ""
    );

    useEffect(() => {
        if (imageUrl?.length > 0) setPreview(imageUrl);
    }, [imageUrl]);

    useEffect(() => {
        if (images?.length > 0) setPreview(images[images?.length - 1])
        else setPreview('');
    }, [images]);

    const imageUpload = async (e) => {
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
        formData.append('quality', 'auto:best');
        formData.append(
            "upload_preset",
            process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
        );

        uploadPicture(formData);
    };

    const { mutate: uploadPicture } = useMutation({
        mutationFn: (formData) =>
            axios.post(
                `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
                formData
            ),
        onSuccess: (res) => {
            setValue(res.data.secure_url);
        },
    });


    return { preview, imageUpload }
}
