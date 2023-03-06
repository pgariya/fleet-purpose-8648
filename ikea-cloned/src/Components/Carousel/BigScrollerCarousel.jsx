import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import {BsArrowRightSquareFill } from "react-icons/bs"
import {IoIosArrowDroprightCircle , IoIosArrowDropleftCircle} from "react-icons/io"

function NextArrow(props) {
  console.log(props)
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle style={{ ...style,fontSize:"50px", display: "block",position:"relative", right:"15px",color:"black",borderRadius:"50%"  }} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <IoIosArrowDropleftCircle style={{ ...style,fontSize:"50px", display: "block",color:"black",borderRadius:"50%" , position:"relative", right:"12px" , zIndex:"5" }}/>
    </div>
  );
}

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
};

let array_color=["#6c2f21" , "#cb9a5f" , "#21315e" , "#234031" , "#591745" , "#ffdb00"]

const BigScrollerCarousel = () => {

    let [scroller,setscroller] = useState([]);
    let [ isError, SetIsError] = useState("")

    let getCrousaldata= async () =>{

      try{
        let res= await axios.get("https://project-bv3o.onrender.com/big_scroller")
      let data= await res.data
      // console.log(data,"dataaaa")
       setscroller(data)
      }catch(err){
        console.log(err)
        SetIsError(err.message)
      }
     
     }


     useEffect(() =>{
      getCrousaldata()
      
    },[])
    
    // console.log(scroller,"producctssss")


  return (
    <Box bg={"white"} px={5} py={3}  >
        {/* <h1>CategoriesCarousel</h1> */}

      {
        isError!==""  && <h1>{isError}</h1>
      }  

<Box w="100%" margin={"auto"}   >
        


        <Slider {...settings}  >
{

scroller.map((el) =>(<Box key={el.id}  >


<Image src={el.image} alt={el.title} w="95%" h="500px"  m="auto" />

<Stack  w="95%" m={"auto"}    bg={array_color[el.id-9]} color="white" p={2} h="350px">

  <Stack w={"85%"} margin="auto" gap={5} textAlign="left">

<Heading fontSize={"30px"} color="white">{el.heading}</Heading>
<Text>{el.title}</Text>
<Box fontSize={"50px"} ><BsArrowRightSquareFill/></Box>
  </Stack>

</Stack>


</Box>))

}

        </Slider>
      </Box>

    </Box>
  )
}

export default BigScrollerCarousel






 
