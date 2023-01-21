import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import ProductsList from "./ProductsList";
import SingleProductsList from "./SingleProductsList";
import AdminLogin from "./adminLogin";
import AdminDash from "./AdminDash";
import AdminAdd from "./AdminAdd";
import AdminManage from "./AdminManager";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/productslist" element={<ProductsList />} />
        <Route path="/productslist/:id" element={<SingleProductsList />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminDash" element={<AdminDash />} />
        <Route path="/Adminadd" element={<AdminAdd />} />
        <Route path="/AdminManage" element={<AdminManage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
