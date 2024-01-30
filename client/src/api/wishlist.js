import { API } from './index';

export const getWishlistAPI = async () => {
    const { data } = await API.get('/users/profile/wishlist');
    return data;
}

export const addToWishlistAPI = async ({ productId }) => {
    return await API.post(`/products/${productId}/wishlist`);
};

export const removeOneFromWishlistAPI = async ({ productId }) => {
    return await API.delete(`/products/${productId}/wishlist`);
};
