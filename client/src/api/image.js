import axios from "axios"

export const uploadImageAPI = async ({ formData }) => {
    return await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
    )
}
