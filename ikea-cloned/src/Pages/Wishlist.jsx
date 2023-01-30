
import { Box, Button, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { BsHeartFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Navbar/Navbar';
import { remove_from_wishlist } from '../redux/Heart/heart_action';

const Wishlist = () => {
  let dispatch= useDispatch();
    
  let heartdata = useSelector((store) => store.heartManager )

    
console.log(heartdata.heartArr,"wishlist haa yaa")


let Remove_Wishlist=(id) =>{
  dispatch(remove_from_wishlist(id))

}


  return (
    <Stack w="85%"  margin="auto"  gap={10}>

      <Navbar/>

   <HStack gap={10} margin="auto" justifyContent={"center"}  >
    <Box>
   <Heading textAlign={"center"} fontSize="40px" color="red"> WishList </Heading>
    </Box>
  <Box ><BsHeartFill fill="red" fontSize={"30px"} /></Box>
   </HStack>


<Stack gap={8} >


{        
        heartdata.heartArr.map((el) => ( <HStack key={el.title} borderRadius="10px"  boxShadow ="rgba(0, 0, 0, 0.24) 0px 3px 8px" gap={10} justifyContent="space-around" >
          
                 <Box  w={"20%"} boxShadow ="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius={"10px"}>
                  <Image src={el.image1} alt="image 1 starting"   />
                  </Box>
                  <Box w={"20%"} boxShadow ="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius={"10px"} >
                    <Image src={el.image2} alt="image 2 starting"  />
                  </Box>
             

                <Box w={"20%"} p={12}>
                  <Heading fontSize={"40px"} color="red">{el.title}</Heading>   
                  <Text>{el.description} </Text>
                  <Text> Price:  ₹ {el.price}</Text>
                </Box>


                <Box> <Button color={"white"} bg="red" onClick={() => Remove_Wishlist(el.title)}>Delete</Button> </Box>
          
          
          </HStack> )
)

 }


</Stack>


    </Stack>
  )
}

export default Wishlist