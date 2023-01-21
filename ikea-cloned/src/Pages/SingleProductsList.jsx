import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";


const SingleFeaturesPage = () => {



  let params = useParams();
  // console.log(params.id);

  let [mydata, setmydata] = useState([]);
  let [diffproduct, setdiffproduct]= useState([]);
  let [error, seterror] = useState("");
  let [isloading, setisloading] = useState(false);



  let getmydata = async (id) => {
    try {
      setisloading(true);
      let res = await axios.get(`http://localhost:8080/real_products/${id}`);
      setmydata(res.data);
      setdiffproduct(res.data.different_item)
      setisloading(false);
    } catch (err) {
      seterror(err.message);
    }
  };



 
 
  let handleCart=(id) =>{
   console.log(id);
   let update= diffproduct.map((el) => (el.title==id)  ? {...el,heart:!el.heart} : el)
   
   setdiffproduct(update)
   
   console.log(diffproduct);
  
  }

  useEffect(() => {
  
    getmydata(params.id);
  
  }, [params.id]);

  // console.log(mydata);

  if (isloading) {
    return (
      <HStack m="auto" w="60%" mt={30}>
        <Skeleton height="600px" w="700px" />
      </HStack>
    );
  }






  return (
    <Box >
      {error !== "" && <Heading> Error: {error}</Heading>}

      <Navbar/>

      <Stack
        direction={{ base: "column", md: "row" }}
        gap={10}
        w={{ base: "90%", lg: "85%" }}
        margin="auto"
        mt={20}
      >
        <Box width={{base:"98%" , md:"40%"}}  overflow="hidden" >
          <Image src={mydata.img} w={"100%"} transition={"transform 2s"} _hover={{transform: "scale(1.1)"}}/>
        </Box>


        <Box width={{base:"95%" , md:"60%"}} margin="auto" textAlign={"left"}>
          <Heading my={5}>{mydata.main_title}</Heading>
          <Text>{mydata.main_description}</Text>

          <Stack mt={10} textAlign="center">
            {diffproduct.map((el) => (
              <HStack key={el.title}  justifyContent="space-between"  >


      <Box w={"150px"} position="relative" ><Image  src={el.image1}  alt="image 1 starting"  />

      <Box position={"absolute"} top="0px" left={"0px"}  _hover={{display:"none"}}  >
      <Image  src={el.image2} alt="image 2 starting"  />
      </Box>

      </Box>
                <Box  >
                  <Heading fontSize={"25px"}>{el.title}</Heading>
                  <Text>{el.description} </Text>
                  <Text> ₹ {el.price}</Text>
                </Box>


                <Box>
                  
                  <Flex
                    p={4}
                    alignItems="center"
                    justifyContent={"space-between"}
                    roundedBottom={"sm"}
                    borderLeft={"1px"}
                    cursor="pointer"
                    onClick={() => handleCart(el.title) }
                  >
                    {el.heart ? (
                      <BsHeartFill  fill="red" fontSize={"24px"} />
                    ) : (
                      <BsHeart fontSize={"24px"} />
                    )}
                  </Flex>

                </Box>

              </HStack>
            ))}
          </Stack>


        </Box>




      </Stack>
    </Box>
  );
};


export default SingleFeaturesPage;


