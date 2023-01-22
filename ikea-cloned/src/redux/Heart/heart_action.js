import { HEART_ADD_ITEMS } from "./heart.type";

export let heart_cart_products=(x) =>({
    type:HEART_ADD_ITEMS, payload:x
})