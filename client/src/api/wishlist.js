import { API } from './index';

export const getWishlistAPI = async () => {
    const { data } = await API.get('/users/profile/wishlist');
    return data;
}

export const addToWishlistAPI = async ({ productId }) => {
    const { data } = await API.post(`/products/${productId}/wishlist`);
    return data;
};

export const removeOneFromWishlistAPI = async ({ productId }) => {
    const { data } = await API.delete(`/products/${productId}/wishlist`);
    return data;
};
