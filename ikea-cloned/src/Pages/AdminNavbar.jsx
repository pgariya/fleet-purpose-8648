import { Box, Button, Image, Center, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../project.png";

const AdminNavbar = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Box
        bg="grey"
        p={2}
        color="white"
        height={{ base: "65px", sm: "85px", md: "85px", lg: "85px" }}>
        <HStack justifyContent={{ base: "space-evenly",sm:"space-evenly", md: "space-evenly" }}>
          <Center>
            <Image
              src={logo}
              boxSize={{ base: "50px", sm: "70px", md: "70px", lg: "70px" }}
              width="100%"
              alt=""
            />
          </Center>
          <Center>
            <Button bg="blue"
              fontSize={{ base: "8px", sm: "10px", md: "12px", lg: "14px" }}
              onClick={() => navigate("/AdminDash")}>
              DASHBOARD
            </Button>
          </Center>
          <Center>
            <Button bg="blue"
              fontSize={{ base: "8px", sm: "10px", md: "12px", lg: "14px" }}
              onClick={() => navigate("/Adminadd")}>
              ADD PRODUCT
            </Button>
          </Center>
          <Center>
            <Button bg="blue"
              fontSize={{ base: "8px", sm: "10px", md: "12px", lg: "14px" }}
              onClick={() => navigate("/AdminManage")}>
              MANAGE PRODUCT
            </Button>
          </Center>
        </HStack>
      </Box>
    </div>
  );
};

export default AdminNavbar;
