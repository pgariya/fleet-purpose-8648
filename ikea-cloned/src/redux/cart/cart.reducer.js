import { ADD_CART_ITEMS, DEC, INC } from "./cart.type"

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

default:{
    return state
}
}


}