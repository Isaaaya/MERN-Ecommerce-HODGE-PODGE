import { API } from './index';

export const getCartAPI = async () => {
    const { data } = await API.get('/users/profile/cart');
    return data;
};

export const addToCartAPI = async ({ productId }) => {
    return await API.post(`/products/${productId}/cart`);
};

export const removeOneFromCartAPI = async ({ productId }) => {
    return await API.delete(`/products/${productId}/cart`);
};


export const removeManyFromCartAPI = async ({ productId, productQuantityInCart }) => {
    return await API.delete(`/products/${productId}/cart-remove-many/${productQuantityInCart}`);
};