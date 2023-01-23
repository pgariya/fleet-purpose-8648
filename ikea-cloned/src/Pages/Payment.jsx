import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtnGroup,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  Heading,
  HStack,
  PinInput,
  PinInputField,
  Spinner,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import { payment_cart } from "../redux/cart/cart.action";

export default function Payment() {

  let dispatch= useDispatch();
  let store = useSelector((state) => state.cartManager);
  console.log(store.cartItems, "cart ");

  let [changeSkelton, setChangeSkelton] = useState(false);
  let [changeSkelton1, setChangeSkelton1] = useState(false);

  let totalvalue = 0;

  for (let i = 0; i < store.cartItems.length; i++) {
    totalvalue +=
      (store.cartItems[i].cart_count + 1) * store.cartItems[i].price;
    console.log(store);
    console.log("inside", store.cartItems);
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  let handleChange = () => {
    setChangeSkelton(true);




    setTimeout(() => {
      setChangeSkelton(false);
      onClose();
      setChangeSkelton1(true);

      dispatch(payment_cart())
      console.log(store.cartItems,"cart arrrrrrrrrr")

    }, 3000);




  };

  if (changeSkelton1) {




    return (
      <>
        <Navbar />

        <Box mb={20}>
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px">
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="50px">
              Payment Successfull !
            </AlertTitle>
            <AlertDescription maxWidth="sm" mt={5}>
              Thanks for Shopping
            </AlertDescription>
          </Alert>
        </Box>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <Stack py={5} gap={5} mb={10}>
        {/* <Box className="d-flex justify-content-between align-items-center mb-5">
        <Box className="d-flex flex-row align-items-center">
          <Heading className="text-uppercase mt-1">Eligible</Heading>
          <span className="ms-2 me-3">Pay</span>
        </Box>
        <a href="#!">Cancel and return to the website</a>
      </Box> */}
        <Box w={{ base: "90%", lg: "40%" }} margin="auto">
          <Box md="5" lg="4" xl="4">
            <Box
              p={5}
              style={{ backgroundColor: "#eee" }}
              h={"500px"}
              borderRadius="20px">
              <Heading textAlign={"Center"}>Order Recap</Heading>
              <Box justifyContent={"space-between"} mt="10" display={"flex"}>
                <Text fontWeight={"bold"}>Amount</Text>{" "}
                <Text> ₹ {totalvalue} </Text>
              </Box>
              <Box justifyContent={"space-between"} mt="5" display={"flex"}>
                <Text fontWeight={"bold"}>Delivery Charges</Text>{" "}
                <Text>₹100.0</Text>
              </Box>
              <Box justifyContent={"space-between"} mt="5" display={"flex"}>
                <Text fontWeight={"bold"}>Shipping Charges</Text>{" "}
                <Text> ₹ 00.0</Text>
              </Box>
              <Box justifyContent={"space-between"} mt="5" display={"flex"}>
                <Text fontWeight={"bold"}>GST(18%)</Text>{" "}
                <Text>+ ₹ {totalvalue / 10} </Text>
              </Box>
              <Box justifyContent={"space-between"} mt="5" display={"flex"}>
                <Text fontWeight={"bold"}>Extra Charges</Text>{" "}
                <Text> ₹ 0.00 </Text>
              </Box>
              <Box
                justifyContent={"space-between"}
                mt="5"
                display={"flex"}
                mb="2">
                <Text fontWeight={"bold"}>Purchase Total </Text>{" "}
                <Text> ₹{totalvalue}</Text>
              </Box>

              <Box mt="10">
                <hr />
              </Box>
              <Box
                justifyContent={"space-between"}
                mt="10"
                display={"flex"}
                mb="2">
                <Heading fontSize={"25px"}>Total </Heading>{" "}
                <Heading fontSize={"25px"}>
                  {" "}
                  ₹ {totalvalue + totalvalue / 10 + 100}{" "}
                </Heading>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            w={"90%"}
            margin="auto"
            borderRadius={20}
            className="py-5"
            fluid
            style={{
              backgroundImage:
                "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
            }}>
            <Box display={"flex"} justifyContent="center">
              <MDBCol md="10" lg="8" xl="5">
                <MDBCard className="rounded-5">
                  <MDBCardBody className="p-4">
                    <div className="text-center mb-4">
                      <Heading>Payment</Heading>
                    </div>
                    <p className="fw-bold mb-4 pb-2">Saved cards:</p>
                    <div className="d-flex flex-row align-items-center mb-4 pb-1">
                      <img
                        className="img-fluid"
                        src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                        alt="second_im"
                      />
                      <div className="flex-fill mx-3">
                        <div className="form-outline">
                          <MDBInput
                            label="Card Number"
                            id="form1"
                            type="text"
                            size="lg"
                            value="**** **** **** 3193"
                            
                          />
                        </div>
                      </div>
                      <a href="#!">Remove card</a>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4 pb-1">
                      <img
                        className="img-fluid"
                        src="https://img.icons8.com/color/48/000000/visa.png"
                        alt="third img"
                      />
                      <div className="flex-fill mx-3">
                        <div className="form-outline">
                          <MDBInput
                            label="Card Number"
                            id="form2"
                            type="text"
                            size="lg"
                            value="**** **** **** 4296"
                           
                          />
                        </div>
                      </div>
                      <a href="#!">Remove card</a>
                    </div>
                    <p className="fw-bold mb-4"> Pay with this Card :</p>
                    <MDBInput
                      label="Cardholder's Name"
                      id="form3"
                      type="text"
                      size="lg"
                      // value="Prakash Gariya"
                    />
                    <MDBRow className="my-4">
                      <MDBCol size="7">
                        <MDBInput
                          label="Card Number"
                          id="form4"
                          type="number"
                          size="lg"
                          // value="1234 5678 1234 5678"
                        />
                      </MDBCol>
                      <MDBCol size="3">
                        <MDBInput
                          label="Expire"
                          id="form5"
                          type="password"
                          size="lg"
                          placeholder="MM/YYYY"
                        />
                      </MDBCol>
                      <MDBCol size="2">
                        <MDBInput
                          label="CVV"
                          id="form6"
                          type="password"
                          size="lg"
                          placeholder="CVV"
                        />
                      </MDBCol>
                    </MDBRow>
                    {/* proceed button  */}
                    <MDBBtn onClick={onOpen} color="success" size="lg" block>
                      Proceed to payment
                    </MDBBtn>

                    <>
                      <AlertDialog
                        motionPreset="slideInBottom"
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                        isOpen={isOpen}
                        isCentered>
                        <AlertDialogOverlay />

                        <AlertDialogContent>
                          <AlertDialogHeader>
                            {" "}
                            Enter Your Pin{" "}
                          </AlertDialogHeader>
                          <AlertDialogCloseButton />
                          <AlertDialogBody p={5}>
                            Please Enter 6 Digit Pin which is send in Your
                            Mobile Number ********55
                            <HStack mt={5}>
                              <PinInput type="alphanumeric" mask>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                              </PinInput>
                            </HStack>
                          </AlertDialogBody>
                          <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                              Cancel
                            </Button>
                            <Button
                              bg={changeSkelton ? "none" : "block"}
                              color="black"
                              ml={3}
                              onClick={handleChange}>
                              {changeSkelton ? (
                                <CircularProgress
                                  isIndeterminate
                                  color="green.300"
                                />
                              ) : (
                                "Done"
                              )}
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </Box>
          </Box>
        </Box>
      </Stack>

      <Footer />
    </>
  );
}
