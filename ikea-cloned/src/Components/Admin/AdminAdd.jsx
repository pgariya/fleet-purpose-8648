import {
  Box,
  Button,
  Center,
  FormControl,
  Select,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import AdminNavbar from "../Navbar/AdminNavbar";

const initial = {
  image1: "",
  image2: "",
  image3: "",
  title: "",
  short_description: "",
  long_description: "",
  price: 0,
  reviews: 0,
  thumbnail1: "",
  thumbnail2: "",
  thumbnail3: "",
};
const AdminAdd = () => {
  const [add, setAdd] = useState(initial);
  const [cate, setCate] = useState("");

  const getAdd = async (add, cate) => {
    let res = await fetch(`https://server-jrrq.onrender.com/${cate}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(add),
    });
    let data = await res.json();
    setAdd(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "price" || name === "reviews") {
      setAdd({ ...add, [name]: +value });
    } else {
      setAdd({ ...add, [name]: value });
    }
  };

  const handleChanges = (e) => {
    setCate(e.target.value);
  };

  const addProduct = (e) => {
    e.preventDefault();
    getAdd(add, cate);
    setAdd(initial);
  };

  return (
    <div>
      <AdminNavbar />
      <Box width="80%" margin="auto" p={4}>
        <Heading margin="10px">
          <Center
            fontSize={{ base: "10px", sm: "18px", md: "20px", lg: "25px" }}>
            ADD PRODUCTS
          </Center>
        </Heading>
        <FormControl
          shadow="xl"
          width="60%"
          margin="auto"
          p={10}
          marginBottom="20px">
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Image1
          </FormLabel>
          <Input
            type="url"
            marginBottom="10px"
            placeholder="Product Image1"
            name="image1"
            value={add.image1}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Image2
          </FormLabel>
          <Input
            type="url"
            marginBottom="10px"
            placeholder="Product Image2"
            name="image2"
            value={add.image2}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Image3
          </FormLabel>
          <Input
            type="url"
            marginBottom="10px"
            placeholder="Product Image3"
            name="image3"
            value={add.image3}
            onChange={handleChange}
          />
          <Select
            value={cate}
            placeholder="select category"
            onChange={handleChanges}
            marginBottom="10px">
            <option value="sofa">sofa</option>
            <option value="chair">chair</option>
          </Select>
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Title
          </FormLabel>
          <Input
            type="text"
            marginBottom="10px"
            placeholder="Product title"
            name="title"
            value={add.title}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Short_Description
          </FormLabel>
          <Input
            type="text"
            marginBottom="10px"
            placeholder="Product short_description"
            name="short_description"
            value={add.short_description}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Long_Description
          </FormLabel>
          <Input
            type="text"
            marginBottom="10px"
            placeholder="Product long_description"
            name="long_description"
            value={add.long_description}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Price
          </FormLabel>
          <Input
            marginBottom="10px"
            placeholder="Product Price"
            name="price"
            value={add.price}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Reviews
          </FormLabel>
          <Input
            marginBottom="10px"
            placeholder="Product reviews"
            name="reviews"
            value={add.reviews}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Thumbnail1
          </FormLabel>
          <Input
            type="url"
            marginBottom="10px"
            placeholder="Product thumbnail1"
            name="thumbnail1"
            value={add.thumbnail1}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Thumbnail2
          </FormLabel>
          <Input
            type="url"
            marginBottom="10px"
            placeholder="Product thumbnail2"
            name="thumbnail2"
            value={add.thumbnail2}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Thumbnail3
          </FormLabel>
          <Input
            type="url"
            marginBottom="10px"
            placeholder="Product thumbnail3"
            name="thumbnail3"
            value={add.thumbnail3}
            onChange={handleChange}
          />
        </FormControl>
        <Center>
          <Button colorScheme="blue" onClick={addProduct}>
            ADD PRODUCT
          </Button>
        </Center>
      </Box>
    </div>
  );
};

export default AdminAdd;
