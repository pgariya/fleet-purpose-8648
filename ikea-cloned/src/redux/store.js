import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./cart/cart.reducer";

export let rootReducer= combineReducers({cartManager:CartReducer})

let composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__


export let store= legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))