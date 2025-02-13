import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/ProductSlice";
import cartReducer from "./Slices/CartSlice.js";
import favoriteReducer from "./Slices/FavoriteSlice.js";

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        favorite: favoriteReducer

    }
});
export default store;