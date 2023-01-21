import { useState } from "react";
import { Box, Text, Image, Grid, Button } from "@chakra-ui/react";
import AdminNavbar from "./AdminNavbar";
import { useEffect } from "react";

const AdminManage = () => {
  const [deletes, setDelete] = useState([]);

  const getdata = async () => {
    let res = await fetch("https://server-jrrq.onrender.com/sofa");
    let data = await res.json();
    setDelete(data);
  };

  const AdminDelete=async(id)=>{
    await fetch(`https://server-jrrq.onrender.com/sofa/${id}`,{
        method: "DELETE"
    })
  }

  const AdminUpdate=async(id)=>{
    let updatePrice=window.prompt("Enter new price")
    let newPrice={
        price:updatePrice
    }
    await fetch(`https://server-jrrq.onrender.com/sofa/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(newPrice)
    })
  }

  useEffect(() => {
    getdata();
  },[deletes]);

  return (
    <div>
      <AdminNavbar />
      <Box>
        <Text>total product : {deletes.length}</Text>
      </Box>
      <Grid
        gap="20px"
        width="90%"
        margin="auto"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}>
        {deletes && deletes?.map((e) => (
          <Box border="1px solid black" key={e.id}>
            <Image width="80%" src={e.image1} alt="" />
            <Text>Title : {e.title}</Text>
            <Text>Rs : {e.price}</Text>
            <Text>Review : {e.reviews}</Text>
            <Button onClick={()=> AdminDelete(e.id)}>Delete</Button>
            <Button onClick={()=> AdminUpdate(e.id)} margin="10px">Update</Button>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default AdminManage;