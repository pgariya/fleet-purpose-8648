import React, { useContext, useState } from "react";
import {
  MDBCol,
  MDBRow,
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
  Image,
  PinInput,
  PinInputField,
  Stack,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import { payment_cart } from "../redux/cart/cart.action";
import { Link } from "react-router-dom";
import { AuthContext } from "../Routes/AuthContext";


import emailjs from "@emailjs/browser";




export default function Payment() {
  let [formInputObj, setformInputObj] = useState({
    fullname: "",
    cardnumber: "",
    password: "",
    cvv: "",
  });
  let dispatch = useDispatch();
  const toast = useToast();
  let store = useSelector((state) => state.cartManager);
  console.log(store.cartItems, "cart ");

  let [changeSkelton, setChangeSkelton] = useState(false);
  let [changeSkelton1, setChangeSkelton1] = useState(false);
  let [handlePinValue, sethandlePinValue] = useState("");
  const [otp, setOTP] = useState("");

  const { login_email } = useContext(AuthContext);
  console.log(login_email, "emailll ha kya yaa");


  // let serve = process.env.REACT_APP_ServeID;
  // let template = process.env.REACT_APP_TemplateId;
  // let publickey = process.env.REACT_APP_PublicKey;


  let totalvalue = 0;

  for (let i = 0; i < store.cartItems.length; i++) {
    totalvalue +=
      (store.cartItems[i].cart_count + 1) * store.cartItems[i].price;
    // console.log(store);
    // console.log("inside", store.cartItems);
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  let handleChange = () => {
    if (handlePinValue && otp == localStorage.getItem("paymentotp")) {
      setTimeout(() => {
        setChangeSkelton(false);
        onClose();
        setChangeSkelton1(true);

        dispatch(payment_cart());
        console.log(store.cartItems, "cart arrrrrrrrrr");
      }, 3000);

      setChangeSkelton(true);
    } else {
      toast({
        title: ` Please enter your correct pin  `,
        description: " Please fill the valid password ",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleInputChange = (value) => {
    setOTP(value);
  };

  let handlePin = (val) => {
    console.log(val, "alert box my pin input ke value");
    sethandlePinValue(val);
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
            // height="200px"
            w="70%"
            margin={"auto"}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius={20}

            // bg={"none"}
          >
            <AlertIcon boxSize="40px" mt={10} />
            <AlertTitle mt={5} mb={5} fontSize="50px">
              Payment Successfull !
            </AlertTitle>
            <AlertDescription mt={5}>
              <VStack p={5} bg="none" gap={3}>
                <Text fontSize={"24px"} textAlign="left" lineHeight={"28px"}>
                  We sent you confirmation email with your order details . Thank
                  You!{" "}
                </Text>

                <HStack fontSize={"24px"} fontWeight="bold">
                  <Heading color={"blue"}>Order Number :</Heading>{" "}
                  <Box pt={2}>
                    <Text> {Date.now()} </Text>
                  </Box>{" "}
                </HStack>

                <Box>
                  <Image
                    src="https://www.cloudways.com/blog/wp-content/uploads/Thank-you-page.png"
                    w={"90%"}
                    h="400px"
                  />
                </Box>

                <Text fontSize={"20px"}>
                  For more Shopping{" "}
                  <Link style={{ color: "blue" }} to={"/dashboard"}>
                    Go to Home Page
                  </Link>
                </Text>
              </VStack>
            </AlertDescription>
          </Alert>
        </Box>

        <Footer />
      </>
    );
  }

  let handleChangeInput = (e) => {
    console.log(e.target.value, e.target.name);
    let { name, value } = e.target;

    setformInputObj({ ...formInputObj, [name]: value });
  };

  console.log(formInputObj);

  let handlePayment = () => {
    // onClick={onOpen}

    for (let key in formInputObj) {
      if (formInputObj[key] === "") {
        toast({
          title: `${key}  field is Empty  `,
          description: " Please fill all the information ",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });

        return;
      }
    }

    if (formInputObj.cvv.length !== 4) {
      toast({
        title: `please enter your 4 digit CVV Number`,
        description: " Please fill the correct information ",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      return;
    }

    const otp = Math.floor(Math.random() * 900000) + 100000;

    // console.log(serve, template, publickey);

    emailjs
      .send(
        "service_qgoxj3p",
        "template_uuykh6x",
        {
          user_email_id: login_email,
          otp: otp,
        },
        "d37Tq2_YNubBoYD1z"
      )
      .then(
        function (res) {
          toast({
            title: `Please Check Your Email .`,
            description: " OTP is Sent In Your Email Id",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });

          onOpen();
          localStorage.setItem("paymentotp", otp);
          console.log(otp);
        },
        function (err) {
          toast({
            title: `Something Went Wrong .`,
            description: " Please Give Your Correct Email Id ",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
        }
      );

    
  };

  return (
    <>
      <Navbar />

      <Stack py={5} gap={5} mb={10}>
        <Box w={{ base: "90%", lg: "40%" }} margin="auto">
          <Box md="5" lg="4" xl="4">
            <Box
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              p={5}
              // p={5}
              style={{ backgroundColor: "#eee" }}
              h={"500px"}
              borderRadius="20px"
            >
              <Heading textAlign={"Center"} color="blue.500">
                Order Recap
              </Heading>
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
                mb="2"
              >
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
                mb="2"
              >
                <Heading fontSize={"25px"} color="blue.500">
                  Total{" "}
                </Heading>{" "}
                <Heading fontSize={"25px"} color="blue.500">
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
            }}
          >
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

                    {/* //input box form validation */}

                    <MDBInput
                      label="Cardholder's Name"
                      id="form3"
                      type="text"
                      size="lg"
                      name="fullname"
                      onChange={handleChangeInput}
                      value={formInputObj.fullname}
                      // value="Prakash Gariya"
                    />
                    <MDBRow className="my-4">
                      <MDBCol size="7">
                        <MDBInput
                          label="Card Number"
                          id="form4"
                          type="number"
                          size="lg"
                          name="cardnumber"
                          onChange={handleChangeInput}
                          value={formInputObj.cardnumber}
                          // value="1234 5678 1234 5678"
                        />
                      </MDBCol>
                      <MDBCol size="3">
                        <MDBInput
                          label="Expire"
                          id="form5"
                          type="password"
                          minLength={8}
                          size="lg"
                          name="password"
                          value={formInputObj.password}
                          placeholder="MM/YYYY"
                          onChange={handleChangeInput}
                        />
                      </MDBCol>
                      <MDBCol size="2">
                        <MDBInput
                          label="CVV"
                          id="form6"
                          type="password"
                          name="cvv"
                          size="lg"
                          value={formInputObj.cvv}
                          placeholder="CVV"
                          onChange={handleChangeInput}
                        />
                      </MDBCol>
                    </MDBRow>
                    {/* proceed button  */}
                    <MDBBtn
                      onClick={handlePayment}
                      color="success"
                      size="lg"
                      block
                    >
                      Proceed to payment
                    </MDBBtn>

                    <>
                      <AlertDialog
                        motionPreset="slideInBottom"
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                        isOpen={isOpen}
                        isCentered
                      >
                        <AlertDialogOverlay />

                        <AlertDialogContent>
                          <AlertDialogHeader>
                            {" "}
                            Enter Your Pin{" "}
                          </AlertDialogHeader>
                          <AlertDialogCloseButton />
                          <AlertDialogBody p={5}>
                            Please Enter 6 Digit Pin which is send in Your Email
                            ID ********
                            <HStack mt={5}>
                              <PinInput
                                type="alphanumeric"
                                mask
                                onComplete={handlePin}
                                onChange={handleInputChange}
                              >
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
                              onClick={handleChange}
                            >
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
