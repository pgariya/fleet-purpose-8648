

import { Box, Card, CardBody,  Heading, HStack, Image, SimpleGrid, Skeleton} from '@chakra-ui/react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import React, { useEffect, useState } from 'react'


const ProductsList = () => {

  let [mydata,setmydata] = useState([]);
let [error,seterror]= useState("");
let [isloading,setisloading]= useState(false);


let getmydata= async () =>{
    try{
      setisloading(true)
        let res= await axios.get(`http://localhost:8080/real_products`)
        setmydata(res.data)
        setisloading(false)
    }catch(err){
        seterror(err.message)
    }
}

useEffect(() =>{
    getmydata()
},[])


// console.log(mydata)


if(isloading){
  return (

<HStack m='auto' w='80%' mt={30}>
  <Skeleton height='600px' w='600px'/>
  <Skeleton height='600px' w='600px'/>
 
</HStack>

  )
}



  return (
    <Box bg={'gray.100'}>

{error !== ""  && <Heading> Error: {error}</Heading>}





 <Box w='90%' m='auto'mt='100px'>
  <SimpleGrid columns={{base:1,md:2 ,lg:3}} gap={5} textAlign='left'>

  {

mydata.map((el) => (

<Link to={`/productslist/${el.id}`}>
<Card  borderRadius='10px' bg={'white'} key={el.id} >
  <CardBody>
  <Image src={el.img} alt="croww" borderRadius={10} w="100%"  />
  <Heading fontSize='22px' fontWeight='bold' my={5}>{el.main_title}</Heading>
  
  </CardBody>
</Card>
</Link>



))


}

  </SimpleGrid>

 </Box>




    </Box>
  )
}

export default ProductsList