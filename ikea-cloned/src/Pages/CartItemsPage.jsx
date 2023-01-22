import { Box, Button, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import {  decrement, decrement_cart_count, increment_cartitems_count, remove_from_cart } from '../redux/cart/cart.action'

const CartItemsPage = () => {
  let dispatch= useDispatch()

  let handleIncrement= (id) =>{

    dispatch(increment_cartitems_count(id))

  }

  let handleDecrement= (id) =>{

    dispatch(decrement_cart_count(id))
    

  }

  let store= useSelector((state) => state.cartManager)
  console.log(store.cartItems , "cart ");
  

  let totalvalue= 0;

  for(let i=0 ; i<store.cartItems.length ; i++){
    totalvalue+=(store.cartItems[i].cart_count+1)*store.cartItems[i].price
    console.log(store);
    console.log("inside", store.cartItems)
  }

  console.log(totalvalue)

let handleRemove=(id)=>{
  dispatch(remove_from_cart(id))
  
}




  return (
    <Box>
        <Navbar/>

   <Heading>CartItemsPage</Heading>

<Stack>

  {
     store.cartItems.map((el) => <Stack direction={{base:"column" , md:"row"}} alignItems="center" justifyContent={"space-around"} border="1px solid grey" >

<Box w={{base:"70%" , md:"18%"}}  ><Image src={el.image} w="100%"/></Box>
<Box><Text  fontSize={"20px"}>Title: {el.title}</Text></Box>
<Box><Text fontSize={"20px"}>Price: {el.price}</Text></Box>

<HStack>
<Button onClick={ () => handleDecrement(el.id) } >-</Button>
<Button >{el.cart_count+1}</Button>
  <Button onClick={ () => handleIncrement(el.id) }>+</Button>
</HStack>

<Box><Text fontSize={"20px"}>Total: {(el.cart_count+1) * el.price} </Text></Box>

<Box><Button onClick={() => handleRemove(el.id)}>Delete</Button></Box>

     </Stack>)
     
     
  }

  </Stack>



<Stack  mb={20} gap={5} mt="10px">
  <Heading>Total Price: {totalvalue} </Heading>
  <Link to={"/payment"}>
  
  <Box>
  <Button bg={"teal"} w="200px" color={"white"} >Proceed to Buy </Button>
  </Box>
  </Link>
</Stack>

 
    </Box>
  )
}

export default CartItemsPage