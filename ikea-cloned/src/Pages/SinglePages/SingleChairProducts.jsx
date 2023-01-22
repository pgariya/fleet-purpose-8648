import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Skeleton
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillStarFill } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { add_cart_products, increment } from "../../redux/cart/cart.action";

const SingleChairProducts = () => {
  let params = useParams();
  // console.log(params);
  let { id } = params;

  let [sofadata, setsofadata] = useState({});
  let [error, seterror] = useState("");
  let [isloading, setisloading] = useState(false);
  let dispatch = useDispatch();

  let getmydata = async (id) => {
    try {
      setisloading(true);
      let res = await axios.get(`https://server-jrrq.onrender.com/chair/${id}`);
      setsofadata(res.data);
      setisloading(false);
    } catch (err) {
      seterror(err.message);
    }
  };

  let handleAddCart = () => {
    console.log(dispatch(increment));
    dispatch(increment());

    let new_item = {
      id: sofadata.id,
      title: sofadata.title,
      image: sofadata.image1,
      price: sofadata.price,
      cart_count: 0,
    };

    //  console.log(new_item)

    dispatch(add_cart_products(new_item));

    // console.log(new_item)
  };

  useEffect(() => {
    getmydata(id);
  }, [id]);

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
    <div>
      {error !== "" && <Heading> Error: {error}</Heading>}
      <Navbar />

      <Stack
        direction={{ base: "column", md: "row" }}
        gap={10}
        margin="auto"
        mt={10}
        w="90%"
        mb={20}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          margin="auto"
          mt={{ base: "none", md: "-30px", lg: "10px" }}>
          <Image src={sofadata.image1} alt="1st image" />
          <Image src={sofadata.image2} alt="2nd image" />
          {/* <Image src={sofadata.image3} alt="3rd image" /> */}
        </SimpleGrid>

        <Stack gap={2} margin={"auto"} w={{ base: "80%", md: "45%" }}>
          <Heading textAlign={"left"}>{sofadata.title}</Heading>
          <Text textAlign={"left"}>{sofadata.short_description}</Text>
          <Text textAlign={"left"}> ₹ {sofadata.price}</Text>

          <HStack>
            {" "}
            <BsFillStarFill fill="#ffad47" /> <BsFillStarFill fill="#ffad47" />{" "}
            <BsFillStarFill fill="#ffad47" /> <BsFillStarFill fill="#ffad47" />{" "}
            <BsFillStarFill fill="#ffad47" />
          </HStack>

          <HStack gap={{ base: "1px", md: "5px" }}>
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

          <Box>
            <HStack h="50px" overflow={"hidden"} position="relative">
              <Image
                src="https://m.media-amazon.com/images/G/31/A2I_CEPC/VSX/vsx_sprite_2x.png"
                alt="offeers image"
                position={"absolute"}
                top="-50px"
              />
              <Text fontWeight={"bold"} position="absolute" left={"50px"}>
                offers
              </Text>
            </HStack>

            <HStack textAlign={"left"}>
              <Stack gap={1} border="1px solid grey" p={2}>
                <Text fontWeight={"bold"}>No Cost EMI</Text>
                <Text>
                  Avail No Cost EMI on select cards for orders above ₹3000
                </Text>
                <Text color={"teal"}>1 offer</Text>
              </Stack>

              <Stack gap={1} p={2} border="1px solid grey">
                <Text fontWeight={"bold"}>No Cost EMI</Text>
                <Text>
                  Avail No Cost EMI on select cards for orders above ₹3000
                </Text>
                <Text color={"teal"}>1 offer</Text>
              </Stack>

              <Stack gap={1} p={2} border="1px solid grey">
                <Text fontWeight={"bold"}>No Cost EMI</Text>
                <Text>
                  Avail No Cost EMI on select cards for orders above ₹3000
                </Text>
                <Text color={"teal"}>1 offer</Text>
              </Stack>
            </HStack>
          </Box>

          <Stack
            textAlign={"left"}
            w={{ base: "90%", md: "80%" }}
            p={5}
            border={"1px solid grey"}
            box-shadow="rgb(38, 57, 77) 0px 20px 30px -10px ">
            <HiInformationCircle fontSize={"25px"} />
            <Text fontWeight={"bold"}>Made In India</Text>
            <Text>
              Designed by IKEA of Sweden. Bringing quality, design, and
              affordability together.
            </Text>
          </Stack>

          {/* add to cart is here  */}

          <Button
            onClick={handleAddCart}
            bg={"blue.500"}
            color="white"
            fontSize={"20px"}
            w={{ base: "90%", md: "60%" }}>
            {" "}
            <BsFillCartCheckFill fill="white" />{" "}
            <Text fontSize={"20px"} ml={"10px"} color="white">
              Add to cart
            </Text>
          </Button>
        </Stack>
      </Stack>

      <Footer />
    </div>
  );
};

export default SingleChairProducts;
