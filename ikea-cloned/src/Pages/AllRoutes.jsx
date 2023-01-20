import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import CartItemsPage from "./CartItemsPage";
import DashBoard from './DashBoard'
import ProductsList from './ProductsList'
import SingleProductsList from './SingleProductsList'

import SingleSofaProducts from "./SingleSofaProducts";
import SofaProducts from "./SofaProducts";

import AdminLogin from "./adminLogin";
import AdminDash from "./AdminDash";
import FrontPage from "../Components/FrontPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
       <Route path='/dashboard' element={<DashBoard/>}/>
       <Route path='/productslist' element={<ProductsList/>}/>
       <Route path='/productslist/:id' element={<SingleProductsList/>}/>
        <Route path="/login" element={<Login />} />

       <Route path="/signup" element={<Signup />} />
        <Route path="/sofaproducts" element={<SofaProducts/>}/>
        <Route path='/sofaproducts/:id' element={<SingleSofaProducts/>}/>
        <Route path="/cartitemspage" element={<CartItemsPage/>}/>

       
              <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/AdminDash" element={<AdminDash />} />

      </Routes>
    </div>
  );
};

export default AllRoutes;
