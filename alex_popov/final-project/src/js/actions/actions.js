
/**
 * login action used for insert and chaging information about the user in the storage
 */
export const login = (user) => ({
    type: 'login',
    user
});

/**
 * logout action
 */
export const logOut = () => ({
    type: 'logout'
});