import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {
    const[token,setToken] = useState(JSON.parse(localStorage.getItem("first_name")));
    const[login_email,set_login_email] = useState(JSON.parse(localStorage.getItem("email")));

    const loginUser=(first_name,email)=>{
       localStorage.setItem("first_name", JSON.stringify(first_name));
       localStorage.setItem("email",JSON.stringify(email));

       setToken(first_name)
       set_login_email(email)
    }

    const logOutUser=()=>{
      localStorage.removeItem("first_name")
      setToken(null)
    }

  return (
    <AuthContext.Provider value={{token,loginUser,logOutUser,login_email}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider;