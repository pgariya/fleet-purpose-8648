import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { add_cart_products, increment } from "../redux/cart/cart.action";

const SingleSofaProducts = () => {
  let params = useParams();
  // console.log(params);
  let { id } = params;

  let [sofadata, setsofadata] = useState({});
  let [error, seterror] = useState("");
  let [isloading, setisloading] = useState(false);
  let dispatch= useDispatch();

  let getmydata = async (id) => {
    try {
      setisloading(true);
      let res = await axios.get(`https://server-jrrq.onrender.com/sofa/${id}`);
      setsofadata(res.data);
      setisloading(false);
    } catch (err) {
      seterror(err.message);
    }
  };

  let handleAddCart=() =>{
    console.log(dispatch(increment))
  dispatch(increment())

  let new_item= {
    id:sofadata.id,
    title:sofadata.title,
    image:sofadata.image1,
    price:sofadata.price
   }

  //  console.log(new_item)

  dispatch(add_cart_products(new_item))
  
  // console.log(new_item)

  

  }


  useEffect(() => {
    getmydata(id);
  }, []);

  console.log(sofadata);

  return (
    <div>
      <Heading>SingleSofaProducts</Heading>
      <Navbar/>

      <Stack direction={{ base: "column", md: "row" }} gap={10} margin="auto" mt={10} alignItems="left" w="90%">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}   margin="auto">
          <Image src={sofadata.image1} alt="1st image" />
          <Image src={sofadata.image2} alt="2nd image" />
          <Image src={sofadata.image3} alt="3rd image" />
        </SimpleGrid>

        <Stack gap={2} margin={"auto"}  w={{base:"80%" , md:"45%"}} >
          <Heading textAlign={"left"}>{sofadata.title}</Heading>
          <Text textAlign={"left"}>{sofadata.short_description}</Text>
          <Text textAlign={"left"}> ₹ {sofadata.price}</Text>

          <HStack>
            {" "}
            <BsFillStarFill fill="#ffad47" /> <BsFillStarFill fill="#ffad47" />{" "}
            <BsFillStarFill fill="#ffad47" /> <BsFillStarFill fill="#ffad47" />{" "}
            <BsFillStarFill fill="#ffad47" />
          </HStack>

          <HStack gap={5}>
            <Image
              src={sofadata.thumbnail1}
              alt="no variants"
              transition={"transform 2s"}
              _hover={{ transform: "scale(1.1)" }}
            />
            <Image
              src={sofadata.thumbnail2}
              alt="no variants"
              transition={"transform 2s"}
              _hover={{ transform: "scale(1.1)" }}
            />
            <Image
              src={sofadata.thumbnail3}
              alt="no variants"
              transition={"transform 2s"}
              _hover={{ transform: "scale(1.1)" }}
            />
          </HStack>

          <Box w={"80%"}>
          <Text textAlign={"left"}>{sofadata.long_description}</Text>
          </Box>     


{/* add to cart is here  */}

          <Button onClick={ handleAddCart} bg={"blue.500"} color="white" fontSize={"20px"} w="250px"> <BsFillCartCheckFill fill="white" /> <Text fontSize={"20px"} ml={"10px"} color="white">Add to cart</Text></Button>



        </Stack>
      </Stack>
    </div>
  );
};

export default SingleSofaProducts;
