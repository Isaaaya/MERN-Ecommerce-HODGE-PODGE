import { API } from './index';

export const getCartAPI = async () => {
    const { data } = await API.get('/users/profile/cart');
    return data;
};

export const addToCartAPI = async ({ productId }) => {
    const { data } = await API.post(`/products/${productId}/cart`);
    return data;
};

export const removeOneFromCartAPI = async ({ productId }) => {
    const { data } = await API.delete(`/products/${productId}/cart`);
    return data;
};


export const removeManyFromCartAPI = async ({ productId, productQuantityInCart }) => {
    const { data } = await API.delete(`/products/${productId}/cart-remove-many/${productQuantityInCart}`);
    return data;
};