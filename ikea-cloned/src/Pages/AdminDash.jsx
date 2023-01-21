import { useState } from "react";
import { Box, Text, Image, Grid,Button } from "@chakra-ui/react";
import AdminNavbar from "./AdminNavbar";
import { useEffect } from "react";

const AdminDash = () => {
  const [dash, setDash] = useState([]);
  const[total,setTotal]=useState(0);

  const getdata = async () => {
    let res = await fetch("https://server-jrrq.onrender.com/sofa");
    let data = await res.json();
    setDash(data);
  };

  useEffect(() => {
    getdata();
    setTotal(dash.reduce((acc,el)=>acc+el.price,0))
  }, [dash]);

  return (
    <div>
      <AdminNavbar />
      <Box display="flex" flexDirection={{base:"column",sm:"row",md:"row",lg:"row"}} justifyContent="space-evenly" margin="15">
        <Button disabled colorScheme='teal' variant='solid' margin="5px">Total Product : {dash.length}</Button>
        <Button disabled colorScheme='teal' variant='solid' margin="5px">Total Product : Rs {total}</Button>
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
            <Image width="80%" src={e.image1} alt="" />
            <Text>Title : {e.title}</Text>
            <Text>Describe : {e.short_description}</Text>
            <Text>Price : Rs {e.price}</Text>
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
