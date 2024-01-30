import { API } from './index'
import { getSearchQuery } from 'utils/functions/getSearchQuery';

export const listProductsAPI = async ({ ...filters }) => {
    const { searchQuery } = getSearchQuery({ filters, exeptions: ['available', 'images'] })

    const { data } = await API.get(`/products?${searchQuery}`);
    return data;

};

