import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

<<<<<<< HEAD
const AuthContextProvider = ({children}) => {
    const[token,setToken] = useState(JSON.parse(localStorage.getItem("first_name")));
    const[login_email,set_login_email] = useState(JSON.parse(localStorage.getItem("email")));

    const loginUser=(first_name,email)=>{
       localStorage.setItem("first_name", JSON.stringify(first_name));
       localStorage.setItem("email",JSON.stringify(email));

       setToken(first_name)
       set_login_email(email)
    }
=======
const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("first_name"))
  );

  const loginUser = (first_name) => {
    localStorage.setItem("first_name", JSON.stringify(first_name));
    setToken(first_name);
  };
>>>>>>> ef8c933cdd5f98f3fc5d39701d8017de9b167cbe

  const logOutUser = () => {
    localStorage.removeItem("first_name");
    setToken(null);
  };

  return (
<<<<<<< HEAD
    <AuthContext.Provider value={{token,loginUser,logOutUser,login_email}}>{children}</AuthContext.Provider>
  )
}
=======
    <AuthContext.Provider value={{ token, loginUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
>>>>>>> ef8c933cdd5f98f3fc5d39701d8017de9b167cbe

export default AuthContextProvider;
