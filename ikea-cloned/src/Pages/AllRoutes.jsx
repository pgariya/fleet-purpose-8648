import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard";
import ProductsList from "./ProductsList";
import SingleProductsList from "./SingleProductsList";
import AdminLogin from "./adminLogin";
import AdminDash from "./AdminDash";

const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<anything/>}/> */}
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/productslist" element={<ProductsList />} />
      <Route path="/productslist/:id" element={<SingleProductsList />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/AdminDash" element={<AdminDash />} />
    </Routes>
  );
};

export default AllRoutes;
