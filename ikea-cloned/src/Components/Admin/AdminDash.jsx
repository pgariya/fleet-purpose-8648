import { useState } from "react";
import {
  Box,
  Text,
  Image,
  Grid,
  Button,
  Select,
  Center,
} from "@chakra-ui/react";
import AdminNavbar from "../Navbar/AdminNavbar";
import { useEffect } from "react";

const AdminDash = () => {
  const [dash, setDash] = useState([]);
  const [cate, setCate] = useState("");
  const [total, setTotal] = useState(0);

  const getdata = async (cate) => {
    let res = await fetch(`https://server-jrrq.onrender.com/${cate}`);
    let data = await res.json();
    setDash(data);
  };

  const handleChange = (e) => {
    setCate(e.target.value);
  };
  useEffect(() => {
    getdata(cate);
    setTotal(dash.reduce((acc, el) => acc + el.price, 0));
  }, [dash, cate]);

  return (
    <div>
      <AdminNavbar />
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row", md: "row", lg: "row" }}
        justifyContent="space-evenly"
        margin="15">
        <Button
          disabled
          colorScheme="teal"
          variant="solid"
          margin="5px"
          fontSize={{ base: "10px", sm: "18px" }}>
          Total Product : {dash.length}
        </Button>
        <Button
          disabled
          colorScheme="teal"
          variant="solid"
          margin="5px"
          fontSize={{ base: "10px", sm: "18px" }}>
          Total Inventory : ₹ {total}
        </Button>
      </Box>
      <Box
        width="30%"
        margin="auto"
        marginBottom="20px"
        fontSize={{ base: "10px", sm: "18px" }}
        textAlign="center">
        <Center fontWeight="bold">Select Product to see details</Center>
        <Select
          width="40%"
          margin="auto"
          value={cate}
          placeholder="select"
          onChange={handleChange}
          size={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}>
          <option value="sofa">sofa</option>
          <option value="chair">chair</option>
        </Select>
      </Box>
      <Grid
        gap="30px"
        width="90%"
        margin="auto"
        cursor="pointer"
        marginBottom="20px"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}>
        {dash.map((e) => (
          <Box shadow="md" p={5} key={e.id} fontWeight="bold">
            <Box position="relative">
              <Image src={e.image1} alt="image 1 starting" />

              <Box
                _hover={{ display: "none" }}
                position={"absolute"}
                top="0px"
                left="0px">
                <Image src={e.image2} alt="image 2 starting" />
              </Box>
            </Box>
            <Text>Title : {e.title}</Text>
            <Text>Describe : {e.short_description}</Text>
            <Text>Price : ₹ {e.price}</Text>
            <Text>Review : {e.reviews}</Text>
            <Grid gridTemplateColumns="repeat(3,1fr)" gap="1px">
              <Image width="15" src={e.thumbnail1} alt="" />
              <Image width="15" src={e.thumbnail2} alt="" />
              <Image width="15" src={e.thumbnail3} alt="" />
            </Grid>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default AdminDash;
