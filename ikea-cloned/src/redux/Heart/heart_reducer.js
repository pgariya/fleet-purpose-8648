import { HEART_ADD_ITEMS, REMOVE_FROM_WISHLIST } from "./heart.type"


let inintvalue={
    heartArr:[]
}

export let HeartReducer=(state=inintvalue,action) =>{

switch(action.type){

   case HEART_ADD_ITEMS:{
    return {
        ...state,heartArr:[...state.heartArr,action.payload]
    }
}

case REMOVE_FROM_WISHLIST:{


    let dataArr= state.heartArr.filter((el) => el.title!==action.payload)
    
    
    return{
        ...state,heartArr:dataArr
    }
    
    }


    default:{
        return state
    }
}


}