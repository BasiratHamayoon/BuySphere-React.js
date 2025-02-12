import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/ProductSlice";
import cartReducer from "./Slices/CartSlice.js";

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer
    }
});
export default store;