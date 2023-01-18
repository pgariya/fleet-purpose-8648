import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import DashBoard from './DashBoard'
import ProductsList from './ProductsList'
import SingleProductsList from './SingleProductsList'


const AllRoutes = () => {
  return (
    
<Routes>

{/* <Route path='/' element={<anything/>}/> */}
<Route path='/dashboard' element={<DashBoard/>}/>
<Route path='/productslist' element={<ProductsList/>}/>
<Route path='/productslist/:id' element={<SingleProductsList/>}/>

</Routes>
  )
}

export default AllRoutes