import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./ProductsList";
import SingleProductsList from "./SingleProductsList";
import AdminLogin from "./adminLogin";
import AdminDash from "./AdminDash";
import AdminAdd from "./AdminAdd";
import AdminManage from "./AdminManager";
import CartItemsPage from "./CartItemsPage";
import DashBoard from './DashBoard'
import SingleSofaProducts from "./SingleSofaProducts";
import SofaProducts from "./SofaProducts";
import FrontPage from "../Components/FrontPage";

import Payment from "./Payment";
import Wishlist from "./Wishlist";


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
        <Route path="/AdminManage" element={<AdminManage />}/>
        <Route path="/" element={<FrontPage/>}/>
       <Route path='/productslist' element={<ProductsList/>}/>
       <Route path='/productslist/:id' element={<SingleProductsList/>}/>
        <Route path="/sofaproducts" element={<SofaProducts/>}/>
        <Route path='/sofaproducts/:id' element={<SingleSofaProducts/>}/>
        <Route path="/cartitemspage" element={<CartItemsPage/>}/>


       
        
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>


      </Routes>
    </div>
  );
};

export default AllRoutes;
