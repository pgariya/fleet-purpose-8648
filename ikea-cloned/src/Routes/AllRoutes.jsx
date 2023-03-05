import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsList from "../Pages/ProductsPage/ProductsList";
import SingleProductsList from "../Pages/SinglePages/SingleProductsList";
import AdminLogin from "../Components/Admin/adminLogin";
import AdminDash from "../Components/Admin/AdminDash";
import AdminAdd from "../Components/Admin/AdminAdd";
import AdminManage from "../Components/Admin/AdminManager";
import CartItemsPage from "../Pages/CartItemsPage";
import DashBoard from "../Pages/DashBoard";
import SingleSofaProducts from "../Pages/SinglePages/SingleSofaProducts";
import SofaProducts from "../Pages/ProductsPage/SofaProducts";
import FrontPage from "../Components/Front/FrontPage";

import Login from "../Components/Signin&out/Login";
import Signup from "../Components/Signin&out/Signup";

import Payment from "../Pages/Payment";
import Wishlist from "../Pages/Wishlist";

import ChairProducts from "../Pages/ProductsPage/ChairProducts";
import SingleChairProducts from "../Pages/SinglePages/SingleChairProducts";

import CinumBun from "../Components/Front/CinumBun";
import { PrivateUserRoute } from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />

        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminDash" element={<AdminDash />} />
        <Route path="/Adminadd" element={<AdminAdd />} />

        <Route path="/chairproducts" element={<ChairProducts />} />
        <Route path="/chairproducts/:id" element={<PrivateUserRoute><SingleChairProducts /></PrivateUserRoute>} />

        <Route path="/AdminManage" element={<AdminManage />} />
        <Route path="/" element={<FrontPage />} />
        <Route path="/productslist" element={<ProductsList />} />
        <Route path="/productslist/:id" element={<PrivateUserRoute><SingleProductsList /></PrivateUserRoute>} />
        <Route path="/sofaproducts" element={<SofaProducts />} />
        <Route path="/sofaproducts/:id" element={<PrivateUserRoute><SingleSofaProducts /></PrivateUserRoute>} />
        <Route path="/cartitemspage" element={<PrivateUserRoute><CartItemsPage /></PrivateUserRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<FrontPage />} />
        <Route path="/sweedan" element={<CinumBun />} />

        <Route path="/payment" element={<Payment />} />
        <Route path="/wishlist" element={<PrivateUserRoute><Wishlist /></PrivateUserRoute>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
