import { ADD_CART_ITEMS, DEC, INC } from "./cart.type";

export let increment=() => ({
    type:INC, payload:1
})

export let decrement=() =>({
    type:DEC, payload:1
})

export let add_cart_products=(x) =>({
    type:ADD_CART_ITEMS, payload:x
})