import { Box, Heading, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillCameraFill, BsSearch } from 'react-icons/bs'
import BigScrollerCarousel from '../Components/BigScrollerCarousel'
import CategoriesCarousel from '../Components/CategoriesCarousel'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const DashBoard = () => {
  return (
    <Box>

  {/* -offer  section  */}
<Box h={"35px"}  py={2} bg={"black"} color="white">

<Text>Get 20% off* on delivery charges - limited period offer! </Text>
</Box>

<Navbar/>


{/* search box -- it is only for small screen */}
<Box w={"80%"} display={{base:"block" , md:"none"}} margin="auto">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            fontSize="1.2em"
            children={<BsSearch />}
          />
          <Input placeholder="Enter amount" />
          <InputRightElement children={<BsFillCameraFill />} />
        </InputGroup>
      </Box>



<Box ml={"10%"} mt={15} display={{base:"none" , sm:"block"}}>

<HStack gap={10} fontWeight="bold">
    <Text>Product</Text>
    <Text>Rooms</Text>
    <Text>New At IKEA</Text>
    <Text>Offers</Text>

</HStack>

</Box>

{/* <Heading>DashBoard</Heading> */}

<Box w={{base:"90%" , lg:"82%"}} margin="auto" >

<Stack gap={2} mt={10} textAlign="left" mb={10}>

<Heading>Hej! Welcome back</Heading>
<Text>Join IKEA Family to get inspired, claim discounts, and receive rewards.</Text>
</Stack>


{/* 1st section  */}
<Stack direction={{base:"column" , lg: "row"}} gap={4} >

  <Box >
    <Image src='https://www.ikea.com/images/74/d5/74d5217edf92fc4690c23b44fbd151bc.png?f=xl' alt='stress images' />
  </Box>

  <Box  display="flex" gap={5}>

<Stack  >
  <Image src='https://www.ikea.com/ext/ingkadam/m/7cdbfd13536f1864/original/PH183006.jpg?f=xs' alt='clothes'/>
  <Image src='https://www.ikea.com/ext/ingkadam/m/6e59dcdff4cb6ebe/original/PH185829-crop001.jpg?f=xs' alt='clothes'/>

</Stack>


<Stack  >
  <Image src='https://www.ikea.com/ext/ingkadam/m/6f5c999e57b0899c/original/PH188348-crop001.jpg?f=xs' alt='clothes'/>
  <Image src='https://www.ikea.com/ext/ingkadam/m/2cdb8876440d3bfe/original/PH185831-crop001.jpg?f=xs' alt='clothes'/>

</Stack>

  </Box>


</Stack>


<Heading textAlign={"left"} py={7}  fontSize="30px">Categories for better storage and organisation</Heading>
</Box>


<Box w={{base:"95%" , lg:"90%"}} margin="auto">
<CategoriesCarousel/>

</Box>


<Box w={{base:"95%" , lg:"90%"}} margin="auto">
<BigScrollerCarousel/>

</Box>







<Footer/>


    </Box>
  )
}

export default DashBoard