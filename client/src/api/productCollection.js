import { API } from "api/index"

export const getCollectionCategoriesAPI = async ({ productCollectionId }) => {
    const { data } = await API.get(`productCollections/${productCollectionId}/categories`);
    return data;
};

export const createCollectionBannerAPI = async ({ productCollectionId, banner }) => {
    return await API.post(`productCollections/${productCollectionId}/banner`, banner);
};

export const updateCollectionBannerAPI = async ({ productCollectionId, updatedBanner }) => {
    return await API.put(`productCollections/${productCollectionId}/banner`, updatedBanner);
};


export const deleteCollectionBannerAPI = async ({ productCollectionId }) => {
    return await API.delete(`productCollections/${productCollectionId}/banner`);
};