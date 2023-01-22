import { ADD_CART_ITEMS, DEC, DEC_CARTITMES_COUNT, INC, INC_CARTITEMS_COUNT, REMOVE_FROM_CART } from "./cart.type"

let initstate={
    count:0 ,
    cartItems:[]
}

export let CartReducer=(state=initstate,action) =>{

switch(action.type){

case INC: {
    return {...state,count:state.count+action.payload}
}

case DEC:{
    return{ ...state, count:state.count-action.payload}
}

case ADD_CART_ITEMS:{
    return {
        ...state,cartItems:[...state.cartItems,action.payload]
    }
}

case INC_CARTITEMS_COUNT:{

   let updateCartItems = state.cartItems.map((el) => {
    
        if(el.id==action.payload){
            return {...el,cart_count:el.cart_count+1}
        }else{
            return el
        }
    })

    return{
        ...state,cartItems:updateCartItems
    }
}

case DEC_CARTITMES_COUNT:{

    let updateCartItems = state.cartItems.map((el) => {
     
         if(el.id==action.payload){
             return {...el,cart_count:el.cart_count-1}
         }else{
             return el
         }
     })
 
     return{
         ...state,cartItems:updateCartItems
     }
 }

case REMOVE_FROM_CART:{


let dataArr= state.cartItems.filter((el) => el.id!==action.payload)


return{
    ...state,cartItems:dataArr
}

}






default:{
    return state
}
}


}