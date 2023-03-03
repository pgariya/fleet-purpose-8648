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
import { CgProfile } from "react-icons/cg";

import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import SearchItem from "./SearchItem";
import axios from "axios";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nav = useNavigate();
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [display,setDisplay] = useState(false)




  // const handleKeyDown = (event) => {
  //   if (event.keyCode === 13) {
  //     setDisplay(false)
  //     setSearchData([])
  //     nav(`/search?q=${search}`);

  //   }
  // };


  useEffect(() => {
    if(search==""){
      setDisplay(false)
      setSearchData([])
    }

    let getRecomandation = async () => {
      let res = await axios.get(`https://server-jrrq.onrender.com/chair?q=${search}`)
      setSearchData(res.data)
  
    };


    console.log(searchData);

    const timeoutId = setTimeout(() => {
      if(search!=""){
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
  // console.log(store.cartItems , "cart Itemsssssss");

  let Navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      justifyContent="space-around"
      alignItems={"center"}
      my={5}
    >
      <Box>
        <HStack gap={7}>
          {/* menu button and drawer  */}
          <Box>
            <Button
              ref={btnRef}
              colorScheme="teal"
              onClick={onOpen}
              color="white"
            >
              <RxHamburgerMenu />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
              size="sm"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton fontWeight={"bold"} fontSize="22px" mt={5}/>

                <DrawerBody>
                  <Box>
                    {/* <Heading fontSize={"20px"} display="flex" gap={"20px"}>
                      {" "}
                      <CgProfile /> Hei! Log in or Sign up{" "}
                    </Heading> */}

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
                        rightIcon={<ChevronDownIcon />}
                      >
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

                    {/* rooms  */}
                    <Menu>
                      <MenuButton
                        w={"100%"}
                        // border="1px solid grey"
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                      >
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
                    <Button bg={"teal"} w={"100%"} color="white"> Login </Button>
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
            children={<BsSearch/>} />

            <Input
              isInvalid
              errorBorderColor="orange.400"
              focusBorderColor="black"
              // onKeyDown={handleKeyDown}
              placeholder="Search for New Furnising Design !"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setDisplay(true)
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
              display={display? "block" : "none"}
              position={"absolute"}
              top={10}
              w={"100%"}
              borderRadius={8}
              maxH={500}
            >
              {searchData?.map((el) => (
                <SearchItem  key={el.id}  setDisplay={setDisplay} {...el} />
              ))}
            </Flex>
          </VStack>


          
      </Box>

      {/* stack ---login or cart and delivery  */}
      <Box>
        <HStack gap={7}>
          <Button
            leftIcon={<CgProfile />}
            colorScheme="teal"
            variant="solid"
            display={{ base: "none", lg: "block" }}
            onClick={() => Navigate("/signup")}
          >
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
          <Link to="/wishlist">
            <Button>
              <BsHeartFill fill="red" fontSize={"22px"} />
            </Button>
          </Link>
          {/* </Link> */}
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
