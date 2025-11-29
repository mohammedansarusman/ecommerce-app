"use client";
import { setCart } from "@/store/cartSlice";
import { Button } from "../ui/button";
import { useDispatch,useSelector } from "react-redux";


const AddToCart = ({ product }) => {
  const existingItem = useSelector((store)=>store.cart.item)
  console.log("product in add cart=>", existingItem);

  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(setCart([...existingItem,product]))
  }
  return <Button className="mt-6 w-[120px] h-[30px]" onClick={handleClick}>Add to cart</Button>;
};

export default AddToCart;
