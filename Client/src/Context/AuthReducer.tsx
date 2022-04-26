
const AuthReducer = (state: any, action: any) => {
  if (action.type === 'LOGIN_START') {
    return {
      user: null,
      isFetching: true,
      err: false,
    };
  };
  if (action.type === 'LOGIN_SUCCESS') {
    return {
      user: action.payload,
      isFetching: false,
      err: false,
    };
  };
  if (action.type === 'LOGIN_FAIlED'){
    return {
      user: null,
      isFetching: false,
      err: true,
    };
  }
  return state;
}

export default AuthReducer;
