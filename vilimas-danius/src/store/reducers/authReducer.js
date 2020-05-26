const initState = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : {
      isLoading: false,
      isLogged: false,
      user: { email: '', password: '', firstName: '', lastName: '' },
    };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem(
        'auth',
        JSON.stringify(
          Object.assign({}, state, {
            isLogged: true,
            user: action.payload,
          })
        )
      );
      return Object.assign({}, state, {
        isLogged: true,
        user: action.payload,
      });
    case 'LOGIN_FAILURE':
      localStorage.setItem(
        'auth',
        JSON.stringify(
          Object.assign({}, state, {
            isLogged: false,
            user: { email: '', password: '', firstName: '', lastName: '' },
          })
        )
      );
      return Object.assign({}, state, {
        isLogged: false,
        user: { email: '', password: '', firstName: '', lastName: '' },
      });
    default:
      return state;
  }
};
export default authReducer;
