import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const ChairProducts = () => {
  let [sofadata, setsofadata] = useState([]);
  let [error, seterror] = useState("");
  let [isloading, setisloading] = useState(false);
  let [count, setcount] = useState(0);

  let getmydata = async () => {
    try {
      setisloading(true);
      let res = await axios.get(`https://server-jrrq.onrender.com/chair`);
      setsofadata(res.data);
      setisloading(false);
    } catch (err) {
      seterror(err.message);
    }
  };

  let handleHigh = () => {
    setcount(count + 1);
    let highdata = sofadata.sort((a, b) => {
      return +b.price - +a.price;
    });
    // console.log("huhihh")

    setsofadata(highdata);

    // console.log(sofadata)
  };

  let handleLow = () => {
    setcount(count + 1);
    let lowdata = sofadata.sort((a, b) => {
      return +a.price - +b.price;
    });
    // console.log("huhihh")

    setsofadata(lowdata);

    // console.log(sofadata)
  };

  useEffect(() => {}, [count]);

  useEffect(() => {
    getmydata();
  }, []);

  console.log(sofadata);

  if (isloading) {
    return (
      <HStack m="auto" w="80%" mt={30}>
        <Skeleton height="600px" w="600px" />
        <Skeleton height="600px" w="600px" />
      </HStack>
    );
  }

  return (
    <Box>
      {error !== "" && <Heading> Error: {error}</Heading>}
      <Navbar />

      <HStack marginLeft={"100px"} gap={5}>
        <Button onClick={handleHigh}> High to Low </Button>
        <Button onClick={handleLow}> Low to High </Button>
      </HStack>

      <Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          gap={4}
          textAlign="left"
          w={"90%"}
          margin="auto">
          {sofadata.map((el) => (
            <Card borderRadius="10px" bg={"white"} key={el.id}>
              <Link to={`/chairproducts/${el.id}`}>
                <CardBody box-shadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px ">
                  <Box position="relative" >
                    <Image  src={el.image1} alt="image 1 starting" />

                    <Box  opacity={0} _hover={{opacity:1}}
                     transition= 'opacity 0.5s ease-in-out'
                      position={"absolute"}
                      top="0px"
                      left="0px">
                      <Image src={el.image2}  alt="image 2 starting" />
                    </Box>
                  </Box>

                  <Heading fontSize="22px" fontWeight="bold" my={2}>
                    {el.title}
                  </Heading>
                  <Text>{el.short_description}</Text>
                  <Heading my={2}> ₹ {el.price}</Heading>
                  <HStack>
                    {" "}
                    <BsFillStarFill fill="#ffad47" />{" "}
                    <BsFillStarFill fill="#ffad47" />{" "}
                    <BsFillStarFill fill="#ffad47" />{" "}
                    <BsFillStarFill fill="#ffad47" />{" "}
                    <BsFillStarFill fill="#ffad47" />
                  </HStack>
                  <Divider my={2} />
                  <Box mt={5}>
                    <Text> More Variants </Text>
                    <HStack gap={5}>
                      <Image
                        src={el.thumbnail1}
                        alt="no variants"
                        transition={"transform 2s"}
                        _hover={{ transform: "scale(1.1)" }}
                      />
                      <Image
                        src={el.thumbnail2}
                        alt="no variants"
                        transition={"transform 2s"}
                        _hover={{ transform: "scale(1.1)" }}
                      />
                      <Image
                        src={el.thumbnail3}
                        alt="no variants"
                        transition={"transform 2s"}
                        _hover={{ transform: "scale(1.1)" }}
                      />
                    </HStack>
                  </Box>
                </CardBody>
              </Link>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      <Footer />
    </Box>
  );
};

export default ChairProducts;
