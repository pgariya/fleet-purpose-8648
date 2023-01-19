import { useState } from "react";
import { Box, Input, Button, Text, Image, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../project.png";

const initial = {
  Name: "",
  password: "",
};

function AdminLogin() {
  const [admin, setAdmin] = useState(initial);
  const navigate = useNavigate();

  const handleAdmin = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };
  const handleClick = () => {
    if (admin.Name === "admins" && admin.password === "admins") {
      navigate("/AdminDash");
    } else {
      alert("You are not Admin");
    }
  };

  return (
    <div>
      <Box bg="grey" p={4} color="white">
        <Center>
          <Image
            src={logo}
            boxSize="100px"
            objectFit="cover"
            alignContent="center"
            alt=""
          />
        </Center>
      </Box>
      <Box
        margin="auto"
        width="450px"
        padding="20px"
        shadow="dark-lg"
        display="flex"
        flexDirection="column"
        height="280px"
        justifyContent="space-evenly"
        marginTop="40px"
        alignItems="center">
        <Text fontWeight="bold">Only Admin Login</Text>
        <Input
          type="text"
          placeholder="Admin"
          width="80%"
          name="Name"
          value={admin.Name}
          onChange={handleAdmin}
        />
        <Input
          type="password"
          placeholder="Enter Password"
          width="80%"
          name="password"
          value={admin.password}
          onChange={handleAdmin}
        />
        <Button width="80%" onClick={handleClick} colorScheme="blue">
          <Text fontSize="18px" fontWeight="bold">
            Submit
          </Text>
        </Button>
      </Box>
    </div>
  );
}

export default AdminLogin;
