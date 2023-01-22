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
import AdminNavbar from "../../Pages/AdminNavbar";
import { useEffect } from "react";

const AdminManage = () => {
  const [deletes, setDelete] = useState([]);
  const [cate, setCate] = useState("");
  const [total, setTotal] = useState(0);

  const getdata = async (cate) => {
    let res = await fetch(`https://server-jrrq.onrender.com/${cate}`);
    let data = await res.json();
    setDelete(data);
  };

  const AdminDelete = async (id, cate) => {
    await fetch(`https://server-jrrq.onrender.com/${cate}/${id}`, {
      method: "DELETE",
    });
  };

  const AdminUpdate = async (id, cate) => {
    let updatePrice = window.prompt("Enter new price");
    let newPrice = {
      price: +(updatePrice),
    };
    console.log(newPrice)
    await fetch(`https://server-jrrq.onrender.com/${cate}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrice),
    });
  };

  const handleChange = (e) => {
    setCate(e.target.value);
  };

  useEffect(() => {
    getdata(cate);
    setTotal(+(deletes.reduce((acc, el) => acc + el.price, 0)));
  }, [deletes, cate]);

  return (
    <div>
      <AdminNavbar />
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row", md: "row", lg: "row" }}
        justifyContent="space-evenly"
        margin="15">
        <Button disabled colorScheme="teal" variant="solid" margin="5px" fontSize={{base:"10px",sm:"18px"}}>
          Total Product : {deletes.length}
        </Button>
        <Button disabled colorScheme="teal" variant="solid" margin="5px" fontSize={{base:"10px",sm:"18px"}}>
          Total Inventory : ₹ {total}
        </Button>
      </Box>
      <Box width="30%" margin="auto" marginBottom="20px" fontSize={{base:"10px",sm:"18px"}} textAlign="center">
        <Center fontWeight="bold">Select Product to see details</Center>
        <Select
          width="40%"
          margin="auto"
          value={cate}
          placeholder="select"
          onChange={handleChange}
          size={{base:"xs",sm:"sm",md:"md",lg:"lg"}}>
          <option value="sofa">sofa</option>
          <option value="chair">chair</option>
        </Select>
      </Box>
      <Grid
        gap="25px"
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
        {deletes.map((e) => (
          <Box shadow="md" p={4} key={e.id} fontWeight="bold">
            <Image width="80%" src={e.image1} alt="" />
            <Text>Title : {e.title}</Text>
            <Text>Price : ₹ {e.price}</Text>
            <Text>Review : {e.reviews}</Text>
            <Button fontSize={{base:"18px",sm:"12px",md:"15px",lg:"14px"}} colorScheme="blue" onClick={() => AdminDelete(e.id,cate)}>
              Delete
            </Button>
            <Button
            fontSize={{base:"18px",sm:"12px",md:"15px",lg:"14px"}}
              colorScheme="blue"
              onClick={() => AdminUpdate(e.id,cate)}
              margin="10px">
              Update
            </Button>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default AdminManage;
