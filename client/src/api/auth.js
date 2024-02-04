import { API } from "api/index";

export const handleAuthAPI = async ({ mode, user }) => {
    const { data } = await API.post(`/auth/${mode}`, user);
    return data;
};


export const signoutAPI = async () => {
    return await API.post(`/auth/signout`);
};