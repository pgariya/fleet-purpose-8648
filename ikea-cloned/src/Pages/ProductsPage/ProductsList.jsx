import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";

const ProductsList = () => {
  let [mydata, setmydata] = useState([]);
  let [updatedData, setupdatedData] = useState([]);
  let [error, seterror] = useState("");
  let [isloading, setisloading] = useState(false);

  let getmydata = async () => {
    try {
      setisloading(true);
      let res = await axios.get(
        `https://project-bv3o.onrender.com/real_products`
      );
      setmydata(res.data);
      setupdatedData(res.data);
      setisloading(false);
    } catch (err) {
      seterror(err.message);
    }
  };

  useEffect(() => {
    getmydata();
  }, []);

  // filter by clicking any of these

  let handleBedroomData = () => {
    setupdatedData(mydata);
    let newData = mydata.filter((el) => el.item === "bedroom");
    setupdatedData(newData);
  };

  let handleALlData = () => {
    setupdatedData(mydata);
    let newData2 = mydata.filter((el) => el.item !== "");
    setupdatedData(newData2);
  };

  let handleLivingData = () => {
    setupdatedData(mydata);
    let newData3 = mydata.filter((el) => el.item === "living_room");
    setupdatedData(newData3);
  };

  let handleKitchenData = () => {
    setupdatedData(mydata);
    let newData3 = mydata.filter((el) => el.item === "kitchen");
    setupdatedData(newData3);
  };

  let handleWorkSpaceData = () => {
    setupdatedData(mydata);
    let newData3 = mydata.filter((el) => el.item === "workspace");
    setupdatedData(newData3);
  };

  let handleOutdoorData = () => {
    setupdatedData(mydata);
    let newData3 = mydata.filter((el) => el.item === "outdoor");
    setupdatedData(newData3);
  };

  let handleBathroomData = () => {
    setupdatedData(mydata);
    let newData3 = mydata.filter((el) => el.item === "bathroom");
    setupdatedData(newData3);
  };

  let handleChildrenData = () => {
    setupdatedData(mydata);
    let newData3 = mydata.filter((el) => el.item === "children_room");
    setupdatedData(newData3);
  };

  if (isloading) {
    return (
      <HStack m="auto" w="80%" mt={30}>
        <Skeleton height="600px" w="600px" />
        <Skeleton height="600px" w="600px" />
      </HStack>
    );
  }

  return (
    <Box bg={"gray.100"} py={5}>
      {error !== "" && <Heading> Error: {error}</Heading>}

      <Navbar />

      <Box w="90%" m="auto" textAlign={"left"}>
        <Box py={10}>
          <Heading>More inspiration like this</Heading>

          <HStack gap={10} my={5}>
            <Button bg={"red"} color="white" onClick={handleALlData}>
              All
            </Button>
            <Button bg={"red"} color="white" onClick={handleBedroomData}>
              Bedroom
            </Button>
            <Button bg={"red"} color="white" onClick={handleLivingData}>
              Living room
            </Button>
            <Button bg={"red"} color="white" onClick={handleKitchenData}>
              Kitchen
            </Button>
            <Button bg={"red"} color="white" onClick={handleWorkSpaceData}>
              Workspace
            </Button>
            <Button bg={"red"} color="white" onClick={handleOutdoorData}>
              Outdoor
            </Button>
            <Button bg={"red"} color="white" onClick={handleBathroomData}>
              Bathroom
            </Button>
            <Button bg={"red"} color="white" onClick={handleChildrenData}>
              Baby & children room
            </Button>
          </HStack>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={5}
          textAlign="left">
          {updatedData.map((el) => (
            <Link to={`/productslist/${el.id}`}>
              <Card borderRadius="10px" bg={"white"} key={el.id}>
                <CardBody overflow={"hidden"}>
                  <Image
                    src={el.img}
                    alt="croww"
                    borderRadius={10}
                    w="100%"
                    transition={"transform 2s"}
                    _hover={{ transform: "scale(1.1)" }}
                  />
                  <Heading fontSize="22px" fontWeight="bold" my={5}>
                    {el.main_title}
                  </Heading>
                </CardBody>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProductsList;
