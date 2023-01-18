import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import DashBoard from './DashBoard'


const AllRoutes = () => {
  return (
    
<Routes>

{/* <Route path='/' element={<anything/>}/> */}
<Route path='/dashboard' element={<DashBoard/>}/>




</Routes>
  )
}

export default AllRoutes