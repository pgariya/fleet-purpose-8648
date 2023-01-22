import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./ProductsList";
import SingleProductsList from "./SingleProductsList";
import AdminLogin from "../Components/Admin/adminLogin";
import AdminDash from "../Components/Admin/AdminDash";
import AdminAdd from "../Components/Admin/AdminAdd";
import AdminManage from "../Components/Admin/AdminManager";
import CartItemsPage from "./CartItemsPage";
import DashBoard from "./DashBoard";
import SingleSofaProducts from "./SingleSofaProducts";
import SofaProducts from "./SofaProducts";
import FrontPage from "../Components/FrontPage";
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
        <Route path="/" element={<FrontPage />} />
        <Route path="/productslist" element={<ProductsList />} />
        <Route path="/productslist/:id" element={<SingleProductsList />} />
        <Route path="/sofaproducts" element={<SofaProducts />} />
        <Route path="/sofaproducts/:id" element={<SingleSofaProducts />} />
        <Route path="/cartitemspage" element={<CartItemsPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
