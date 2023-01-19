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

const SingleFeaturesPage = () => {
  const [liked, setLiked] = useState(false);
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

  useEffect(() => {
    getmydata(params.id);

  }, [params.id,liked]);
 


  console.log(mydata);

  if (isloading) {
    return (
      <HStack m="auto" w="60%" mt={30}>
        <Skeleton height="600px" w="700px" />
      </HStack>
    );
  }


let handleCart=(id) =>{
 
  if(diffproduct.title==id){
    setLiked(!liked)
  }
  console.log(id,"id")
 console.log(mydata.title,"title")

}





  return (
    <Box>
      {error !== "" && <Heading> Error: {error}</Heading>}

      <Stack
        direction={{ base: "column", md: "row" }}
        gap={10}
        w={{ base: "95%", lg: "90%" }}
        margin="auto"
        mt={10}
      >
        <Box w={"35%"}>
          <Image src={mydata.img} />
        </Box>


        <Box w={"60%"} textAlign="left">
          <Heading >{mydata.main_title}</Heading>
          <Text my={10} >{mydata.main_description}</Text>

          <Stack>
            {diffproduct.map((el) => (
              <HStack key={el.title}  gap={20} border="2px solid">

           <Box><Image src={el.image1} alt="image 1 starting"  w={"200px"} h={"200px"}/></Box>
                <Stack w={"40%"} textAlign="left">
                  <Heading fontSize={"25px"}>{el.title}</Heading>
                  <Text>{el.description} </Text>
                  <Text> ₹ {el.price}</Text>
                </Stack>

        <Box w={"60%"}>
          <Heading>{mydata.main_title}</Heading>
          <Text>{mydata.main_description}</Text>

          <Stack>
            {diffproduct.map((el) => (
              <HStack key={el.title}  gap={20}>


<Box><Image src={el.image1} alt="image 1 starting"  w={"100%"} h={"200px"}/></Box>
                <Box>
                  <Heading>{el.title}</Heading>
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

                    onClick={() => setLiked(!liked)}

                  >
                    {liked ? (
                      <BsHeartFill fill="red" fontSize={"24px"} />
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


