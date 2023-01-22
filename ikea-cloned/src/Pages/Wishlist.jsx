
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Wishlist = () => {
    
  let heartdata = useSelector((store) => store.heartManager )

    
console.log(heartdata.heartArr)

    
//     console.log(mydata,"mydata")
//     console.log(diffarr,"diff array")


//  let x=diffarr.filter((el) => el.heart !== false)
// console.log(x,"x")





    


    useEffect(() =>
    {
      
      

      

    },[])


   


  return (
    <div>
        <h1>helo</h1>

  


    </div>
  )
}

export default Wishlist