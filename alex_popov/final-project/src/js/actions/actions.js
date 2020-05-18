export const activate = () => ({
    type: 'activate'
});

export const login = (user) => ({
    type: 'login',
    user
})