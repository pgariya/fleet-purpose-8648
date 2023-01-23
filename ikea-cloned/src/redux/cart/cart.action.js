import { ADD_CART_ITEMS, DEC, DEC_CARTITMES_COUNT, INC, INC_CARTITEMS_COUNT, PAYMENT_CART, REMOVE_FROM_CART } from "./cart.type";

export let increment=() => ({
    type:INC, payload:1
})

export let decrement=() =>({
    type:DEC, payload:1
})


export let payment_cart=() =>({
    type:PAYMENT_CART
})

export let add_cart_products=(x) =>({
    type:ADD_CART_ITEMS, payload:x
})

export let increment_cartitems_count=(id) =>({
    type:INC_CARTITEMS_COUNT,payload:id
})


export let decrement_cart_count=(id) => ({
  type:DEC_CARTITMES_COUNT, payload:id
})


export let remove_from_cart=(id) => ({
    type:REMOVE_FROM_CART, payload:id
})