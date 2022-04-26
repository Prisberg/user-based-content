import { createContext, ReactChild, ReactFragment, ReactPortal, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const DEFAULT_STATE = {
  user: null,
  isFetching: false,
  err: false
};

export const AuthContext = createContext(DEFAULT_STATE);

export const AuthContextProvider = (props: {children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;}) => {
  const [state, dispatch] = useReducer(AuthReducer, DEFAULT_STATE, () =>{
    const localBasketData = localStorage.getItem('user');
    return localBasketData ? JSON.parse(localBasketData) : DEFAULT_STATE;

  });
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])
  return (
    <AuthContext.Provider
    value={{
      user: state.user,
      isFetching: state.isFetching,
      err: state.err,
      
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}
