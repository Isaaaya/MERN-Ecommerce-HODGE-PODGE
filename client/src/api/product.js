import { API } from './index'

export const listProductsAPI = async ({ limit, search, productCollection, category, subcategory, page, sort, available, images, price }) => {
    const { data } = await API.get(`/products?limit=${limit || ''}&search=${search || ''}&productCollection=${productCollection || ''}&category=${category || ''}&subcategory=${subcategory || ''}&page=${page || ''}&sort=${sort}${available || ''}${images}${price ? '&price=' + price : ''}`);
    return data;
};

