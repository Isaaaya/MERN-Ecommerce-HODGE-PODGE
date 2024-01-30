import { API } from "api/index"
import { getSearchQuery } from "utils/functions/getSearchQuery";
import { toast } from "react-toastify";

export const createInstanceAPI = async ({ instanceType, data }) => {
    return await API.post(`/${instanceType}/create`, data)
}

export const getInstancesAPI = async ({ instanceType, ...filters }) => {
    const { searchQuery } = getSearchQuery({ filters });
    const { data } = await API.get(`/${instanceType}?${searchQuery}`);
    return data;
};

export const getInstanceByIdAPI = async ({ instanceType, instanceId }) => {
    try {
        const { data } = await API.get(`/${instanceType}/${instanceId}`);
        return data;
    } catch (error) {
        error.response.data.errors.map((err) => toast.error(err.msg));
    }

}

export const updateInstanceAPI = async ({ instanceType, instanceId, newData }) => {
    return await API.put(`/${instanceType}/${instanceId}`, newData);
}

export const deleteInstanceAPI = async ({ instanceType, instanceId }) => {
    const { data } = await API.delete(`/${instanceType}/${instanceId}`);
    return data;
};
