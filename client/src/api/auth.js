import { API } from "./index";

export const handleAuthAPI = async ({ mode, user }) => {
    const { data } = await API.post(`http://localhost:4001/api/auth/${mode}`, user);
    return data;
};


export const signoutAPI = async () => {
    return await API.post(`http://localhost:4001/api/auth/signout`);
};