import { Box, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" ,color:"white" ,borderRadius:"50%"  }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" ,color:"white" ,borderRadius:"50%"  }}
      onClick={onClick}
    />
  );
}

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};



const CategoriesCarousel = () => {

    let [crouselProduct,setCrouselProduct] = useState([]);
    let [ isError, SetIsError] = useState("")

    let getCrousaldata= async () =>{

      try{
        let res= await axios.get("http://localhost:8080/better_storage")
      let data= await res.data
      // console.log(data,"dataaaa")
       setCrouselProduct(data)
      }catch(err){
        console.log(err)
        SetIsError(err.message)
      }
     
     }


     useEffect(() =>{
      getCrousaldata()
      
    },[])
    
    // console.log(crouselProduct,"producctssss")


  return (
    <Box bg={"white"} px={10} py={8}>
        {/* <h1>CategoriesCarousel</h1> */}

      {
        isError!==""  && <h1>{isError}</h1>
      }  

<Box w="100%" margin={"auto"}   >
        


        <Slider {...settings} >
{

crouselProduct.map((el) =>(<Box key={el.id} mr={5}>


<Image src={el.better_image} alt={el.better_title} w="95%" h="350px" borderRadius={"10px"}/>

<Box bg={"white"} color="black"   w="80%" m={"auto"} p={2} px={5} borderRadius="20px"  position={"relative"} bottom="150px" >
<Text>{el.better_title}</Text>
</Box>


</Box>))

}

        </Slider>
      </Box>

    </Box>
  )
}

export default CategoriesCarousel






 
