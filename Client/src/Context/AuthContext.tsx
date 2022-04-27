
import React, { createContext, PropsWithChildren, useEffect, useState } from 'react'
import Axios, { AxiosResponse } from 'axios'
import { UserInterface } from '../interface'

export const APIContext = createContext<any>({})
export default function Context(props: PropsWithChildren<any>) {
  const [user,setUser] = useState<UserInterface>()
  useEffect(() => {
      Axios.get("http://localhost:4000/user", { withCredentials: true }).then((res: AxiosResponse) => {
        setUser(res.data);
      })
  }, []);

  return (
    <APIContext.Provider value={user}>{props.children}</APIContext.Provider>
    )
}

// import React, { useContext, useState, useEffect, createContext } from "react";
// import axios from "axios";

// export const APIContext = createContext({});

// export function APIContextProvider(props: { children: any }) {
//   const [user, setUser] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const { data } = await axios.get(
//         `http://localhost:4000/user`
//       );
//       console.log(data);
//       setUser(data);
//     }
//     fetchData();
//   }, []);
//   return (
//     <APIContext.Provider value={user}>{props.children}</APIContext.Provider>
//   );
// }

// export function useAPI() {
//   const context = useContext(APIContext);
//   if (context === undefined) {
//     throw new Error("Context must be used within a Provider");
//   }
//   return context;
// }


