export const setUserData = (user) => {
    return localStorage.setItem('user', JSON.stringify(user));
};