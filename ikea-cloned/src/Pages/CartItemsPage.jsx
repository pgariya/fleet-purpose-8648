import { Box, Button, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'

const CartItemsPage = () => {

  let [qty,setqty] = useState(0)

  let handleinc=() =>{
    setqty(prev => prev-1)
  }

  let handledec=() =>{
    setqty(prev => prev+1)
  }

  let store= useSelector((state) => state.cartManager)
  console.log(store.cartItems , "cart ");
  
  return (
    <Box>
        <Navbar/>

   <Heading>CartItemsPage</Heading>

<Stack>

  {
     store.cartItems.map((el) => <HStack>

<Box><Image src={el.image}/></Box>
<Box><Heading>Title: {el.title}</Heading></Box>
<Box><Heading>Price: {el.price}</Heading></Box>

<HStack>
<Button onClick={handleinc}>-</Button>
<Button >{qty}</Button>
  <Button onClick={ handledec}>+</Button>
</HStack>

<Box><Heading>Total: 0 </Heading></Box>

<Box><Button>Delete</Button></Box>

     </HStack>)
     
     
  }

  </Stack>



<Stack>
  <Heading>Final Quantity: 0 </Heading>
  <Button>Proceed to Buy </Button>
</Stack>

 
    </Box>
  )
}

export default CartItemsPage