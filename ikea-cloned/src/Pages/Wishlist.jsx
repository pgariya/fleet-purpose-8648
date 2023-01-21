import { Box, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Wishlist = () => {
    let [mydata,setmydata] = useState([]);

  let [error,seterror]= useState("");
  let [isloading,setisloading]= useState(false);
 let [heartdata,setheartdata] = useState([])

    let getmydata= async () =>{
        try{
          setisloading(true)
            let res= await axios.get(`http://localhost:8080/real_products`)
            setmydata(res.data)
  
            setisloading(false)
        }catch(err){
            seterror(err.message)
        }
    }


    let arr1= mydata.map((el) =>  {
      return el.different_item
    } )

    console.log(arr1,"arr1")
 
   console.log(arr1[0] ,"each items")
   
   
   function getHeart() {

  setheartdata(arr1[0])

  let x =  heartdata.filter((el) => el.heart !== false )
  return x
  


}





    


    useEffect(() =>{
        getmydata()
      let y=  getHeart()
      console.log(y)
console.log(Wishlist);

    },[])


  return (
    <div>
        <h1>helo</h1>

  


    </div>
  )
}

export default Wishlist