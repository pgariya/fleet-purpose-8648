import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {
    const[token,setToken] = useState(JSON.parse(localStorage.getItem("first_name")));

    const loginUser=(first_name)=>{
       localStorage.setItem("first_name", JSON.stringify(first_name));
       setToken(first_name)
    }

    const logOutUser=()=>{
      localStorage.removeItem("first_name")
      setToken(null)
    }

  return (
    <AuthContext.Provider value={{token,loginUser,logOutUser}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider;