import { Box, Button, Center, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import AdminNavbar from "./AdminNavbar";




const initial = {
  image1:"",
  image2:"",
  image3:"",
  title:"",
  short_description:"",
  long_description:"",
  price:0,
  reviews:0,
  thumbnail1:"",
  thumbnail2:"",
  thumbnail3:"",

}
const AdminAdd = () => {
  const [add,setAdd]=useState(initial)

   const getAdd=async(add)=>{
    let res = await fetch(`https://server-jrrq.onrender.com/sofa`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(add)
    });
    let data= await res.json()
    setAdd(data)
   }

  const handleChange=(e)=>{
    const {name,value} = e.target
    setAdd({...add,[name]:value})
  }

  const addProduct=(e)=>{
    e.preventDefault()
    getAdd(add)
    setAdd(initial)
  }


  return (
    <div>
      <AdminNavbar />
      <Box width="40%" margin="auto">
        <Heading margin="10px">
          <Center>ADD PRODUCTS</Center>
        </Heading>
        <FormControl>
          <FormLabel>image1</FormLabel>
          <Input placeholder="Product Image1" name="image1" value={add.image1} onChange={handleChange} />
          <FormLabel>image2</FormLabel>
          <Input placeholder="Product Image2" name="image2" value={add.image2} onChange={handleChange} />
          <FormLabel>image3</FormLabel>
          <Input placeholder="Product Image3" name="image3" value={add.image3} onChange={handleChange} />
          <FormLabel>title</FormLabel>
          <Input placeholder="Product title" name="title" value={add.title} onChange={handleChange}/>
          <FormLabel>short_description</FormLabel>
          <Input placeholder="Product short_description" name="short_description" value={add.short_description} onChange={handleChange} />
          <FormLabel>long_description</FormLabel>
          <Input placeholder="Product long_description" name="long_description" value={add.long_description} onChange={handleChange} />
          <FormLabel>price</FormLabel>
          <Input placeholder="Product Price" name="price" value={add.price} onChange={handleChange} />
          <FormLabel>reviews</FormLabel>
          <Input placeholder="Product reviews" name="reviews" value={add.reviews} onChange={handleChange} />
          <FormLabel>thumbnail1</FormLabel>
          <Input placeholder="Product thumbnail1" name="thumbnail1" value={add.thumbnail1} onChange={handleChange}/>
          <FormLabel>thumbnail2</FormLabel>
          <Input placeholder="Product thumbnail2" name="thumbnail2" value={add.thumbnail2} onChange={handleChange}/>
          <FormLabel>thumbnail3</FormLabel>
          <Input placeholder="Product thumbnail3" name="thumbnail3" value={add.thumbnail3} onChange={handleChange}/>
        </FormControl>
        <Button  onClick={addProduct}>ADD PRODUCT</Button>
      </Box>
    </div>
  );
};

export default AdminAdd;