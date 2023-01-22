import {
  Box,
  Button,
  Divider,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  Heading,
  HStack,
  Image,
  useDisclosure,
  Drawer,
  VStack,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../project.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from "react";

const AdminNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  let navigate = useNavigate();
  return (
    <div>
      <Box bg="grey" p={4}>
        <HStack gap={10} alignItems="center">
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
                <DrawerCloseButton />

                <DrawerBody>
                  <Box
                    display="flex"
                    gap={"20px"}
                    justifyContent="space-evenly"
                    alignItems="center"
                    margin="20px">
                    <Image
                      src={logo}
                      alt=""
                      width={{ base: "35%", sm: "30%", mg: "40%", lg: "30%" }}
                      height={{ base: "65px", sm: "70px", lg: "120px" }}
                      borderRadius="50%"
                    />
                    <Heading
                      fontSize={{
                        base: "12px",
                        sm: "14px",
                        md: "20px",
                        lg: "30px",
                      }}>
                      {" "}
                      ADMIN PANEL
                    </Heading>
                  </Box>
                  <Divider />
                  <VStack
                    gap={2}
                    margin="10px"
                    alignContent="start"
                    alignItems="flex-start">
                    <Button
                      fontSize={{ base: "9px", sm: "18px" }}
                      width="100%"
                      onClick={() => navigate("/AdminDash")}>
                      ADMIN DASHBOARD
                    </Button>
                    <Button
                      fontSize={{ base: "9px", sm: "18px" }}
                      width="100%"
                      onClick={() => navigate("/Adminadd")}>
                      ADMIN ADD PRODUCT
                    </Button>
                    <Button
                      fontSize={{ base: "9px", sm: "18px" }}
                      width="100%"
                      onClick={() => navigate("/AdminManage")}>
                      ADMIN MANAGER
                    </Button>
                    <Button
                      fontSize={{ base: "9px", sm: "18px" }}
                      width="100%"
                      onClick={() => navigate("/dashboard")}>
                      USER SIDE
                    </Button>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>

          <Box>
            <Center>
              <Image src={logo} w={"100px"} />
            </Center>
          </Box>
        </HStack>
      </Box>
    </div>
  );
};

export default AdminNavbar;
