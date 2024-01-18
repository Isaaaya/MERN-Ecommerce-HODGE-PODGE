import { API } from "./index"

export const createInstanceAPI = async ({ instanceType, data }) => {
    return await API.post(`/${instanceType}/create`, data)
}

export const getInstancesAPI = async ({ instanceType, page, limit, search }) => {
    const { data } = await API.get(`/${instanceType}?page=${page || ''}&limit=${limit || ''}&search=${search || ''}`);
    return data;
};

export const getInstanceByIdAPI = async ({ instanceType, instanceId }) => {
    const { data } = await API.get(`/${instanceType}/${instanceId}`);
    return data;
}

export const updateInstanceAPI = async ({ instanceType, instanceId, newData }) => {
    return await API.put(`/${instanceType}/${instanceId}`, newData);
}

export const deleteInstanceAPI = async ({ instanceType, instanceId }) => {
    return await API.delete(`/${instanceType}/${instanceId}`);
};
