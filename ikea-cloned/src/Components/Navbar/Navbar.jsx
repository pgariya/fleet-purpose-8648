import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  BsFillCameraFill,
  BsSearch,
  BsFillCartCheckFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GrDeliver } from "react-icons/gr";

import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
  let navigate = useNavigate();

  let store = useSelector((state) => state.cartManager);
  // console.log(store.cartItems , "cart Itemsssssss");

  let Navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      justifyContent="space-around"
      alignItems={"center"}
      my={5}>
      <Box>
        <HStack gap={7}>
          {/* menu button and drawer  */}
          <Box>
            <Button
              ref={btnRef}
              colorScheme="teal"
              onClick={onOpen}
              color="white">
              <RxHamburgerMenu />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
              size="md">
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />

                <DrawerBody>
                  <Box>
                    <Heading fontSize={"20px"} display="flex" gap={"20px"}>
                      {" "}
                      <CgProfile /> Hei! Log in or Sign up{" "}
                    </Heading>

                    <Link to={"/dashboard"}>
                      <Image
                        src="/ourlogo.png"
                        alt="logo"
                        w={"50px"}
                        h={"50px"}
                        my={5}
                      />
                    </Link>

                    <Divider />
                  </Box>
                  <VStack gap={5} textAlign="left">
                    <Heading>Products</Heading>

                    <Link to={"/productslist"}>
                      <Heading>Rooms</Heading>
                    </Link>

                    <Heading>New At IKEA</Heading>
                    <Heading>Offers</Heading>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>

          <Link to={"/dashboard"}>
            {" "}
            <Box>
              {" "}
              <Image src="/ourlogo.png" w={"50px"} borderRadius="50%" />{" "}
            </Box>
          </Link>
        </HStack>
      </Box>

      {/* search box  */}
      <Box w={"40%"} display={{ base: "none", md: "block" }}>
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

      {/* stack ---login or cart and delivery  */}
      <Box>
        <HStack gap={7}>
          <Button
            leftIcon={<CgProfile />}
            colorScheme="teal"
            variant="solid"
            display={{ base: "none", lg: "block" }}
            onClick={() => Navigate("/signup")}>
            Hei! Log in or Sign up
          </Button>
          <Button onClick={() => Navigate("/AdminLogin")}>Admin</Button>

          {/* Navigate("/login") */}

          {/* add to cart button and drawer  */}

          {/* <Navigate to="/cartitemspage"> */}

          <Button onClick={() => navigate("/cartitemspage")}>
            <BsFillCartCheckFill />
            <Text>{store.cartItems.length}</Text>
          </Button>

          {/* </Navigate>   */}

          {/* <Link to="/wishlist"> */}
            <Button>
              <GrDeliver />
            </Button>
          {/* </Link> */}
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
