import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./cart/cart.reducer";
import { HeartReducer } from "./Heart/heart_reducer";

export let rootReducer= combineReducers({cartManager:CartReducer,heartManager:HeartReducer});

let composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export let store= legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))