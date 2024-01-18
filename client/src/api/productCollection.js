import { API } from "./index"


export const getCollectionCategoriesAPI = ({ productCollectionId }) => {
    return API.get(`productCollections/${productCollectionId}/categories`).then((res) => res.data);
};

export const createCollectionBannerAPI = async ({ productCollectionId, banner }) => {
    return await API.post(`productCollections/${productCollectionId}/banner`, banner);
};

export const updateCollectionBannerAPI = async ({ productCollectionId, banner }) => {
    return await API.put(`productCollections/${productCollectionId}/banner`, banner);
};


export const deleteCollectionBannerAPI = async ({ productCollectionId }) => {
    return await API.delete(`productCollections/${productCollectionId}/banner`);
};