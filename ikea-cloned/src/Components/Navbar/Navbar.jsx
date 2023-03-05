import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
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
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  BsFillCameraFill,
  BsSearch,
  BsFillCartCheckFill,
  BsHeartFill,
} from "react-icons/bs";

import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import SearchItem from "./SearchItem";
import axios from "axios";

import { useContext } from "react";
import { AuthContext } from "../../Routes/AuthContext";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [display, setDisplay] = useState(false);
  const { token, logOutUser } = useContext(AuthContext);
console.log(token)

  const callLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (search === "") {
      setDisplay(false);
      setSearchData([]);
    }

    let getRecomandation = async () => {
      let res = await axios.get(
        `https://server-jrrq.onrender.com/chair?q=${search}`
      );
      setSearchData(res.data);
    };

    console.log(searchData);

    const timeoutId = setTimeout(() => {
      if (search !== "") {
        getRecomandation();
      }
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  const btnRef = React.useRef();
  let navigate = useNavigate();

  let store = useSelector((state) => state.cartManager);

  let Navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      justifyContent="space-between"
      alignItems={"center"}
      padding="5px"
      my={5}>
      <Box>
        <HStack gap={7}>
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
              size="sm">
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton fontWeight={"bold"} fontSize="22px" mt={5} />

                <DrawerBody>
                  <Box>

                    <Link to={"/dashboard"}>
                      <Image
                        src="/ourlogo.png"
                        alt="logo"
                        w={"80px"}
                        h={"80px"}
                        borderRadius="50%"
                        my={5}
                      />
                    </Link>

                    <Divider />
                  </Box>
                  <VStack gap={2} textAlign="left" mt={10}>
                    <Menu>
                      <MenuButton
                        w={"100%"}
                        as={Button}
                        rightIcon={<ChevronDownIcon />}>
                        Products
                      </MenuButton>
                      <MenuList w={"180%"}>
                        <Link to={"/sofaproducts"}>
                          <MenuItem>Sofa</MenuItem>
                        </Link>
                        <Link to="/chairproducts">
                          <MenuItem>Chairs</MenuItem>
                        </Link>
                        <MenuItem>Bed </MenuItem>
                        <MenuItem> Clothes </MenuItem>
                      </MenuList>
                    </Menu>

                    <Menu>
                      <MenuButton
                        w={"100%"}
                        as={Button}
                        rightIcon={<ChevronDownIcon />}>
                        Rooms
                      </MenuButton>
                      <MenuList w={"180%"}>
                        <Link to={"/productslist"}>
                          <MenuItem>Kitchen</MenuItem>
                        </Link>
                        <Link to={"/productslist"}>
                          <MenuItem>Bedroom </MenuItem>
                        </Link>
                        <Link to={"/productslist"}>
                          <MenuItem>Outdoor</MenuItem>
                        </Link>
                        <Link to={"/productslist"}>
                          <MenuItem>LivingRoom </MenuItem>
                        </Link>
                      </MenuList>
                    </Menu>

                    <Link to={"/productslist"}></Link>

                    <Button w={"100%"}>New At IKEA</Button>
                    <Button w={"100%"}>Offers</Button>

                    <Box w={"100%"}>
                      <Link to={"/login"}>
                        <Button bg={"teal"} w={"100%"} color="white">
                          {" "}
                          Login{" "}
                        </Button>
                      </Link>
                    </Box>
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
        {/* <Input placeholder="Enter amount" /> */}

        {/* functional input box  */}
        <VStack position={"relative"} w={"100%"}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.2em"
              children={<BsSearch />}
            />

            <Input
              isInvalid
              errorBorderColor="orange.400"
              focusBorderColor="black"
              placeholder="Search for New Furnising Design !"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setDisplay(true);
              }}
            />

            <InputRightElement children={<BsFillCameraFill />} />
          </InputGroup>

          <Flex
            overflowY={"scroll"}
            direction={"column"}
            justifyContent={"center"}
            bg={"white"}
            zIndex={500}
            display={display ? "block" : "none"}
            position={"absolute"}
            top={10}
            w={"100%"}
            borderRadius={8}
            maxH={500}>
            {searchData?.map((el) => (
              <SearchItem key={el.id} setDisplay={setDisplay} {...el} />
            ))}
          </Flex>
        </VStack>
      </Box>

      <Box>
        <HStack gap={7}>

          {!token ? (
            <Button colorScheme="teal" variant="solid" onClick={callLogin}>
              Login
            </Button>
          ) : (
           <Flex gap={2}>
             <Button backgroundColor="white" color="black" variant="solid" disabled >
              {token}
            </Button>
             <Button colorScheme="teal" variant="solid" onClick={logOutUser}>
              Logout
            </Button></Flex>
          )}


          <Button onClick={() => Navigate("/AdminLogin")}>Admin</Button>

          <Button onClick={() => navigate("/cartitemspage")}>
            <BsFillCartCheckFill />
            <Text>{store.cartItems.length}</Text>
          </Button>
          <Link to="/wishlist">
            <Button display={{base:"none",md:"block"}}>
              <BsHeartFill fill="red" fontSize={"22px"} />
            </Button>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
