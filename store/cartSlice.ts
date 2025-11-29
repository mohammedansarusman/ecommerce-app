import { createSlice } from "@reduxjs/toolkit";
import { setUncaughtExceptionCaptureCallback } from "process";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        item:[]
    },
    reducers:{
        setCart: (state,action)=>{
            state.item = action.payload;
        },
    },
})

export const {setCart} = cartSlice.actions;
export default cartSlice.reducer;