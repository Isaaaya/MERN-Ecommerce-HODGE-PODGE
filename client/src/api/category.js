import { API } from "api/index";

export const getCategorySubcategoriesAPI = async ({ categoryId }) => {
    const { data } = await API.get(`categories/${categoryId}/subcategories`);
    return data;
};