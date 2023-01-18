import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<anything/>}/> */}

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
