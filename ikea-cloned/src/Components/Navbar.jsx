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
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
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

                    <Image
                      src="https://tse4.mm.bing.net/th?id=OIP.dkG0ervqYt4ox2XJluo48wHaHa&pid=Api&P=0"
                      alt="logo"
                      w={"50px"}
                      h={"50px"}
                      my={5}
                    />

                    <Divider />
                  </Box>
                  <VStack gap={5} textAlign="left">
                    <Heading>Products</Heading>
                    <Heading>Rooms</Heading>
                    <Heading>New At IKEA</Heading>
                    <Heading>Offers</Heading>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>

          <Box>LOGO</Box>
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
            display={{ base: "none", lg: "block" }}>
            Hei! Log in or Sign up
          </Button>
          <Button onClick={() => Navigate("/login")}>admin</Button>

          {/* Navigate("/login") */}

          <Button>
            <BsFillCartCheckFill />
          </Button>

          <Button>
            <GrDeliver />
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
