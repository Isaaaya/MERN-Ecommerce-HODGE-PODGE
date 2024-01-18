import { API } from "./index";

export const getCategorySubcategoriesAPI = async ({ categoryId }) => {
    const { data } = await API.get(`categories/${categoryId}/subcategories`);
    return data;
};