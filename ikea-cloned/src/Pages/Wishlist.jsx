
import { Box, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { BsHeartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Navbar from '../Components/Navbar/Navbar';

const Wishlist = () => {
    
  let heartdata = useSelector((store) => store.heartManager )

    
console.log(heartdata.heartArr,"wishlist haa yaa")


  return (
    <Stack w="85%"  margin="auto"  gap={10}>

      <Navbar/>

   <HStack gap={10} margin="auto" justifyContent={"center"}  >
    <Box>
   <Heading textAlign={"center"} fontSize="40px" color="red"> WishList </Heading>
    </Box>
  <Box ><BsHeartFill fill="red" fontSize={"30px"} /></Box>
   </HStack>


<Stack  >


{        
        heartdata.heartArr.map((el) => ( <HStack key={el.title} borderRadius="10px"  boxShadow ="rgba(0, 0, 0, 0.24) 0px 3px 8px" gap={10} justifyContent="space-around" >
          
                 <Box  w={"25%"} >
                  <Image src={el.image1} alt="image 1 starting"   />
                  </Box>
                  <Box w={"25%"}  >
                    <Image src={el.image2} alt="image 2 starting" />
                  </Box>
             

                <Box w={"25%"}>
                  <Heading fontSize={"40px"}>{el.title}</Heading>
                  <Text>{el.description} </Text>
                  <Text> ₹ {el.price}</Text>
                </Box>
          
          
          </HStack> )
)

 }


</Stack>


    </Stack>
  )
}

export default Wishlist