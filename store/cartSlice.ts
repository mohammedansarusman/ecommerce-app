import { createSlice } from "@reduxjs/toolkit";
import { warn } from "console";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    setCart: (state, action) => {
      
      /*

       */
      state.item = action.payload;
    },
    addItem:(state,action)=>{
      const id = action.payload;
      const updatedCart = state.item
        .map((item)=>{
          if(item.id===id){
            console.log("id in map",id)
            return {...item, quantity: item?.quantity+1};
          }else{
            return item;
          }
        })
      console.log("map=>",updatedCart);

      state.item = updatedCart;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const updatedCart = state.item
        .map((item) => {
          if (item.id === id) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null; // remove it
            }
          }
          return item; // must return item for non-matching ones
        })
        .filter((item) => item !== null); // remove items with null
      state.item = updatedCart;
    },
  },
});

export const { setCart, removeItem, addItem } = cartSlice.actions;
export default cartSlice.reducer;
