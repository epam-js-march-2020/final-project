export const login = (user) => ({
    type: 'login',
    user
});

export const logOut = () => ({
    type: 'logout'
});