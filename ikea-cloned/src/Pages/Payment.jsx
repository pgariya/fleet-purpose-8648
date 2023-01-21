import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtnGroup,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { Alert, AlertDescription, AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertIcon, AlertTitle, Box, Button, CircularProgress, HStack, PinInput, PinInputField, Spinner, useDisclosure } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

export default function Payment() {

    let store= useSelector((state) => state.cartManager)
    console.log(store.cartItems , "cart ");
    
  let [changeSkelton , setChangeSkelton]= useState(false)
  let [changeSkelton1 , setChangeSkelton1]= useState(false)


  
    let totalvalue= 0;
  
    for(let i=0 ; i<store.cartItems.length ; i++){
      totalvalue+=(store.cartItems[i].cart_count+1)*store.cartItems[i].price
      console.log(store);
      console.log("inside", store.cartItems)
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    let handleChange=() =>{

      setChangeSkelton(true)

      setTimeout(() =>{
  setChangeSkelton(false)
  onClose()
  setChangeSkelton1(true)
      } , 3000)

    }

if(changeSkelton1){
  return<>
  <Navbar/>
<Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Payment Successfull !
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for Shopping
  </AlertDescription>
</Alert>

  </>
}

  return ( <>
  <Navbar/>
    <MDBContainer className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex flex-row align-items-center">
          <h4 className="text-uppercase mt-1">Eligible</h4>
          <span className="ms-2 me-3">Pay</span>
        </div>
        <a href="#!">Cancel and return to the website</a>
      </div>
      <MDBRow>
        <MDBCol md="7" lg="7" xl="6" className="mb-4 mb-md-0">
          <h5 className="mb-0 text-success">  ₹ {totalvalue} </h5>
          <h5 className="mb-3">Diabites Pump &amp; Supplies</h5>
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row mt-1">
                <h6>Insurance Responsibility</h6>
                <h6 className="fw-bold text-success ms-1">$71.76</h6>
              </div>
              <div className="d-flex flex-row align-items-center text-primary">
                <span className="ms-1">Add Insurer card</span>
              </div>
            </div>
            <p>
              Insurance claim and all neccessary dependencies will be submitted
              to your insurer for the covered portion of this order.
            </p>
            <div
              className="p-2 d-flex justify-content-between align-items-center"
              style={{ backgroundColor: "#eee" }}
            >
              <span>Aetna - Open Access</span>
              <span>Aetna - OAP</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-row mt-1">
                <h6>Patient Balance</h6>
                <h6 className="fw-bold text-success ms-1">$13.24</h6>
              </div>
              <div className="d-flex flex-row align-items-center text-primary">
                <span className="ms-1">Add Payment card</span>
              </div>
            </div>
            <p>
              Insurance claim and all neccessary dependencies will be submitted
              to your insurer for the covered portion of this order.
            </p>
            <div class="d-flex flex-column mb-3">
              <MDBBtnGroup vertical aria-label="Vertical button group">
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option1"
                  autocomplete="off"
                />
                <label className="btn btn-outline-primary btn-lg" for="option1">
                  <div className="d-flex justify-content-between">
                    <span>VISA </span>
                    <span>**** 5436</span>
                  </div>
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option2"
                  autocomplete="off"
                  checked
                />
                <label className="btn btn-outline-primary btn-lg" for="option2">
                  <div className="d-flex justify-content-between">
                    <span>MASTER CARD </span>
                    <span>**** 5038</span>
                  </div>
                </label>
              </MDBBtnGroup>
            </div>
            {/* proceed button  */}
            <MDBBtn onClick={onOpen} color="success" size="lg" block>
              Proceed to payment
            </MDBBtn>


            <>
      
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader> Enter Your Pin </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>

            Are you sure you want to discard all of your notes? 44 words will be
            deleted.

            <HStack>
  <PinInput type='alphanumeric' mask>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>




          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} >
              Cancel
            </Button>
            <Button bg={changeSkelton? "none" : "block"} color='black' ml={3} onClick={handleChange}>
              {changeSkelton ? <CircularProgress isIndeterminate color='green.300' /> : "Done"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>






          </div>
        </MDBCol>
        <MDBCol md="5" lg="4" xl="4" offsetLg="1" offsetXl="2">
          <div className="p-3" style={{ backgroundColor: "#eee" }}>
            <span className="fw-bold">Order Recap</span>
            <div className="d-flex justify-content-between mt-2">
              <span>contracted Price</span> <span>$186.86</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Amount Deductible</span> <span>$0.0</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Coinsurance(0%)</span> <span>+ $0.0</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Copayment </span> <span>+ 40.00</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-2">
              <span className="lh-sm">
                Total Deductible,
                <br />
                Coinsurance and copay
              </span>
              <span>$40.00</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span className="lh-sm">
                Maximum out-of-pocket <br />
                on insurance policy
              </span>
              <span>$40.00</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-2">
              <span>Insurance Responsibility </span> <span>$71.76</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Patient Balance </span> <span>$13.24</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-2">
              <span>Total </span> <span class="text-success">$85.00</span>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  );
}