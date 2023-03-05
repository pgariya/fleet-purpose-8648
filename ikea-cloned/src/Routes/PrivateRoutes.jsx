import { Navigate } from "react-router-dom";
import React from "react";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";


export const PrivateUserRoute = ({children}) =>{
  const { token } = useContext(AuthContext);

  console.log(token);

  return token? children : <Navigate to="/login" />;
}