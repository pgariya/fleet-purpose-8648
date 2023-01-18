import { Box,  Image,  Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import {IoIosArrowDroprightCircle , IoIosArrowDropleftCircle} from "react-icons/io"

function NextArrow(props) {
  console.log(props)
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle style={{ ...style,fontSize:"30px", display: "block", color:"black",borderRadius:"50%" , }} />
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
      <IoIosArrowDropleftCircle style={{ ...style,fontSize:"30px", display: "block",color:"black",borderRadius:"50%" , position:"relative", right:"15px" , zIndex:"5" }}/>
    </div>
  );
}

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
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



const RealExampleCarousel = () => {

    let [scroller,setscroller] = useState([]);
    let [ isError, SetIsError] = useState("")

    let getCrousaldata= async () =>{

      try{
        let res= await axios.get("http://localhost:8080/real_example")
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
        <Box bg={"white"} px={10} py={8}>
            {/* <h1>CategoriesCarousel</h1> */}
    
          {
            isError!==""  && <h1>{isError}</h1>
          }  
    
    <Box w="100%" margin={"auto"}   >
            
    
    
            <Slider {...settings} >
    {
    
    scroller.map((el) =>(<Box key={el.id} mr={5}>
    
    
    <Image src={el.image} alt="immages_real" w="95%" h="320px" borderRadius={"10px"}/>
    
   
    
    
    </Box>))
    
    }
    
            </Slider>
          </Box>
    
        </Box>
      )
}

export default RealExampleCarousel






 
