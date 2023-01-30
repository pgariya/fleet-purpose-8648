import { HEART_ADD_ITEMS, REMOVE_FROM_WISHLIST } from "./heart.type";

export let heart_cart_products=(x) =>({
    type:HEART_ADD_ITEMS, payload:x
})

export let remove_from_wishlist=(id) => ({
    type:REMOVE_FROM_WISHLIST, payload:id
})