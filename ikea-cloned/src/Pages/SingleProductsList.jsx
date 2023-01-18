
import {
    Box,
    Heading,
    HStack,
    Skeleton, 
  } from "@chakra-ui/react";
  
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  
  
  
  const SingleFeaturesPage = () => {
    let params = useParams();
    console.log(params.id);
  
    let [mydata, setmydata] = useState([]);
    let [error, seterror] = useState("");
    let [isloading,setisloading] = useState(false);
  
    let getmydata = async (id) => {
      try {
        setisloading(true)
        let res = await axios.get(
          `http://localhost:8080/real_products/${id}`
        );
        setmydata(res.data);
        setisloading(false)
      } catch (err) {
        seterror(err.message);
      }
    };
  
    useEffect(() => {
      getmydata(params.id);
    }, [params.id]);
  
    console.log(mydata);
  
    if(isloading){
      return (
    
    <HStack m='auto' w='60%' mt={30}>
      <Skeleton height='600px' w='700px'/>
      
    </HStack>
    
      )
    }
  
  
  
  
  
    return (
      <Box>
       
{error !== ""  && <Heading> Error: {error}</Heading>}
  
   
 
  
  
  
      </Box>
    );
  };
  
  export default SingleFeaturesPage;
  