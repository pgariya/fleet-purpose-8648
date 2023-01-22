import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsFillCameraFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

import AccessoriesCarousel from "../Components/Carousel/AccessoriesCarousel";
import BigScrollerCarousel from "../Components/Carousel/BigScrollerCarousel";
import CategoriesCarousel from "../Components/Carousel/CategoriesCarousel";
import Footer from "../Components/Footer";
import FurnitureCarousel from "../Components/Carousel/FurnitureCarousel";
import Navbar from "../Components/Navbar/Navbar";
import RealExampleCarousel from "../Components/Carousel/RealExampleCarousel";

const DashBoard = () => {
  return (
    <Box m={"auto"}>
      {/* -offer  section  */}
      <Box h={"40px"} py={2} bg={"black"} color="white" textAlign={"center"}>
        <Text>Get 20% off* on delivery charges - limited period offer! </Text>
      </Box>

      <Navbar />

      {/* search box -- it is only for small screen */}
      <Box w={"80%"} display={{ base: "block", md: "none" }} margin="auto">
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

      <Box ml={"10%"} mt={15} display={{ base: "none", sm: "block" }}>
        <HStack gap={10} fontWeight="bold">
          {/* <Text>Product</Text> */}

          <Box>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                fontWeight={"bold"}>
                Product <ChevronDownIcon />
              </MenuButton>
              <MenuList py={2} fontSize="18px" color={"white"} bg={"teal.400"}>
                <Link to="/chairproducts">
                  <MenuItem
                    _hover={{ bg: "teal" }}
                    bg={"teal.400"}
                    color="white">
                    Chairs
                  </MenuItem>
                </Link>

                <Link to={"/sofaproducts"}>
                  <MenuItem
                    _hover={{ bg: "teal" }}
                    bg={"teal.400"}
                    color="white">
                    Sofa
                  </MenuItem>
                </Link>

                <MenuItem _hover={{ bg: "teal" }} bg={"teal.400"} color="white">
                  Bed
                </MenuItem>
                <MenuItem _hover={{ bg: "teal" }} bg={"teal.400"} color="white">
                  Clothes
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Link to={"/productslist"}>
            {" "}
            <Text> Rooms </Text>{" "}
          </Link>
          <Text>New At IKEA</Text>
          <Text>Offers</Text>
        </HStack>
      </Box>

      {/* <Heading>DashBoard</Heading> */}

      <Box w={{ base: "90%", lg: "82%" }} margin="auto">
        <Stack gap={2} mt={10} textAlign="left" mb={10}>
          <Heading>Hej! Welcome back</Heading>
          <Text>
            Join IKEA Family to get inspired, claim discounts, and receive
            rewards.
          </Text>
        </Stack>

        {/* 1st section  */}
        <Stack direction={{ base: "column", lg: "row" }} gap={4}>
          <Box overflow={"hidden"}>
            <Image
              transition={"transform 2s"}
              _hover={{ transform: "scale(1.1)" }}
              src="https://www.ikea.com/images/df/db/dfdb3e950fba6e0cc267542dafc81163.png?f=xl"
              alt="stress images"
            />
          </Box>

          <Box display="flex" gap={5}>
            <Stack overflow={"hidden"}>
              <Image
                src="https://www.ikea.com/ext/ingkadam/m/7cdbfd13536f1864/original/PH183006.jpg?f=xs"
                alt="clothes"
                transition={"transform 2s"}
                _hover={{ transform: "scale(1.1)" }}
              />
              <Image
                src="https://www.ikea.com/ext/ingkadam/m/6e59dcdff4cb6ebe/original/PH185829-crop001.jpg?f=xs"
                alt="clothes"
                transition={"transform 2s"}
                _hover={{ transform: "scale(1.1)" }}
              />
            </Stack>

            <Stack overflow={"hidden"}>
              <Image
                src="https://www.ikea.com/ext/ingkadam/m/6f5c999e57b0899c/original/PH188348-crop001.jpg?f=xs"
                alt="clothes"
                transition={"transform 2s"}
                _hover={{ transform: "scale(1.1)" }}
              />
              <Image
                src="https://www.ikea.com/ext/ingkadam/m/2cdb8876440d3bfe/original/PH185831-crop001.jpg?f=xs"
                alt="clothes"
                transition={"transform 2s"}
                _hover={{ transform: "scale(1.1)" }}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box w={{ base: "95%", lg: "90%" }} margin="auto" textAlign={"left"}>
        <Heading py={7} fontSize="30px">
          Categories for better storage and organisation
        </Heading>
        <CategoriesCarousel />
      </Box>

      <Box w={{ base: "95%", lg: "90%" }} margin="auto">
        <BigScrollerCarousel />
      </Box>

      {/* next div  */}
      <Box w={{ base: "95%", lg: "90%" }} margin="auto" textAlign={"left"}>
        <Heading fontSize="30px" py={5}>
          Explore NEWs at IKEA
        </Heading>

        <Stack direction={{ base: "column", lg: "row" }} gap={4}>
          <Box overflow={"hidden"}>
            <Image
              src="https://www.ikea.com/ext/ingkadam/m/799f68cc5de0ac6b/original/PH189240.jpg?f=xl"
              alt="stress images"
              transition={"transform 2s"}
              _hover={{ transform: "scale(1.1)" }}
            />
          </Box>

          <Box display="flex" gap={5}>
            <Stack overflow={"hidden"}>
              <Image
                src="https://www.ikea.com/images/d8/93/d893954e5ca7add8e2eacd65a2b9ccba.jpg?f=xs"
                alt="clothes"
              />
              <Image
                src="https://www.ikea.com/ext/ingkadam/m/329772020dd61646/original/PH189251.jpg?f=xs"
                alt="clothes"
                transition={"transform 2s"}
                _hover={{ transform: "scale(1.1)" }}
              />
            </Stack>

            <Stack overflow={"hidden"}>
              <Image
                src="https://www.ikea.com/ext/ingkadam/m/6efbc36541036f65/original/PH189222.jpg?f=xs"
                transition={"transform 2s"}
                _hover={{ transform: "scale(1.1)" }}
                alt="clothes"
              />
              <Image
                src="https://www.ikea.com/ext/ingkadam/m/943c2a55da77e47/original/PH189365.jpg?f=xs"
                transition={"transform 2s"}
                _hover={{ transform: "scale(1.1)" }}
                alt="clothes"
              />
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* furniture div --carousel  */}
      <Box w={{ base: "95%", lg: "90%" }} margin="auto" textAlign={"left"}>
        <Heading>Top furniture categories</Heading>
        <FurnitureCarousel />
      </Box>

      {/* top accessories carousel  */}
      <Box w={{ base: "95%", lg: "90%" }} margin="auto" textAlign={"left"}>
        <Heading>Top accessories categories</Heading>
        <AccessoriesCarousel />
      </Box>

      <Box w={{ base: "95%", lg: "90%" }} margin="auto" textAlign={"left"}>
        <Heading>See how our products look in real homes!</Heading>
        <Text py={4}>
          Share your photos on Instagram with #IKEAlifeathome or tag @ikea.india
          to get a chance to be seen here!
        </Text>
        <RealExampleCarousel />
      </Box>

      <Box w={{ base: "95%", lg: "90%" }} margin="auto">
        <Stack direction={{ base: "column", lg: "row" }} gap="10px">
          <Box overflow={"hidden"}>
            <Image
              src="https://www.ikea.com/images/a-hand-showing-ikea-app-download-screen-aec02826f4ecef443ec20186fa64c7d8.jpg?f=l"
              transition={"transform 2s"}
              _hover={{ transform: "scale(1.1)" }}
              h={"700px"}
              alt="hand image"
              w={"100%"}
            />
          </Box>

          <Box overflow={"hidden"}>
            <Image
              src="https://www.ikea.com/images/a3/f8/a3f8a40082462e029a7f5b6a93184b89.jpg?f=l"
              alt="right image"
              transition={"transform 2s"}
              _hover={{ transform: "scale(1.1)" }}
              h={"700px"}
              w={"100%"}
            />
          </Box>
        </Stack>
      </Box>

      <Stack
        gap={4}
        bg="#0058a3"
        color="white"
        w={{ base: "95%", lg: "90%" }}
        margin="auto"
        textAlign={"left"}
        px="50px"
        my={10}
        py="20px">
        <Heading>Click & Collect</Heading>
        <Text>
          You can now collect your orders from R CITY Mall (Mumbai) and
          Electronic City (Bengaluru)
        </Text>
        <Button w={"200px"} color="black">
          {" "}
          Know more{" "}
        </Button>
      </Stack>

      <Stack
        direction={{ base: "column", md: "row" }}
        w={{ base: "95%", lg: "90%" }}
        margin="auto"
        gap={5}
        textAlign="left"
        mb={10}>
        <Box overflow={"hidden"}>
          <Image
            src="https://www.ikea.com/images/top-sellers-fbeed0bb9bf644690c849abb7638a59d.png?f=s"
            alt="all offer"
            transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
          />
          <Heading fontSize={"30px"} mt="20px">
            All Offers
          </Heading>
        </Box>

        <Box overflow={"hidden"}>
          <Image
            src="https://www.ikea.com/images/fd/2e/fd2ef6a20e9487feca33f9be080bb9f3.png?f=s"
            alt="all offer"
            transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
          />
          <Heading fontSize={"30px"} mt="20px">
            Every Day Essential
          </Heading>
        </Box>

        <Box overflow={"hidden"}>
          <Image
            src="https://www.ikea.com/images/ca/4a/ca4a9c34b0474f5e6598269a08a7c10e.png?f=s"
            alt="all offer"
            transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
          />
          <Heading fontSize={"30px"} mt="20px">
            Clearance Sale
          </Heading>
        </Box>
      </Stack>

      <Footer />
    </Box>
  );
};

export default DashBoard;
