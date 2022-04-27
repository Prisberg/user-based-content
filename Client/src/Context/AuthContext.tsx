import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

export const APIContext = createContext({});

export function APIContextProvider(props: { children: any }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:4000/user`
      );
      console.log(data);
      setUser(data);
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider value={user!}>{props.children}</APIContext.Provider>
  );
}

// export function useAPI() {
//   const context = useContext(APIContext);
//   if (context === undefined) {
//     throw new Error("Context must be used within a Provider");
//   }
//   return context;
// }
