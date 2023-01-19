import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};
export default AllRoutes;
