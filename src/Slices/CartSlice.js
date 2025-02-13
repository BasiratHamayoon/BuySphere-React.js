import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartProducts: [],
        message: ""
    },

    reducers: {
        addToCart: (state, action) => {
                state.message = "Add cart Product";
                state.cartProducts.push(action.payload);
        },

        removeFromCart: (state, action) => {

            const isExist = state.cartProducts.find((item) => item.id === action.payload.id);
            if(isExist) {
            state.message = "Remove Cart From the Cart Component throug Cross icon";
            state.cartProducts = state.cartProducts.filter((item) => item.id !== action.payload.id);
            }
        },
    },
});

export const {addToCart, removeFromCart} = CartSlice.actions;
export default CartSlice.reducer;