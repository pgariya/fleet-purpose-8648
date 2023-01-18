
import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import DashBoard from './DashBoard'
import ProductsList from './ProductsList'
import SingleProductsList from './SingleProductsList'
import Login from "../Components/Login";
import Signup from "../Components/Signup";

const AllRoutes = () => {
  return (
    
<Routes>

{/* <Route path='/' element={<anything/>}/> */}
<Route path='/dashboard' element={<DashBoard/>}/>
<Route path='/productslist' element={<ProductsList/>}/>
<Route path='/productslist/:id' element={<SingleProductsList/>}/>
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
</Routes>
  )
}


export default AllRoutes;

