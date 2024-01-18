import { API } from './index';

export const getUserProfileAPI = async () => {
    const { data } = await API.get('/users/profile');
    return data;
};

export const updateUserProfileAPI = async ({ updatedUser }) => {
    const { data } = await API.put('/users/profile', updatedUser);
    return data;
};