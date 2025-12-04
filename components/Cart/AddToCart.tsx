// parent component - /product/product-details/id/page.tsx

"use client";
import { setCart } from "@/store/cartSlice";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";


const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const existingItem = useSelector((store) => store.cart.item);

  const handleClick = () => {
    const foundItem = existingItem.find((record) => record.id === product.id)
    if (foundItem) {
      const updatedCart = existingItem.map((record)=>{
        if(record.id===product.id){
          return {...record,quantity:record.quantity+1}
        }else{
          return {...record}
        }
      })
      dispatch(setCart(updatedCart))
    } else {
      dispatch(setCart([...existingItem, { ...product, quantity: 1 }]))
    }
    toast.success(
      "Items added to the car",{
          style:{
            background:"green",
            color:"white"
          },
          duration:1000,
        }
    )
  };
  return (
    <Button className="mt-6 w-[120px] h-[30px]" onClick={handleClick}>
      Add to cart
    </Button>
  );
};

export default AddToCart;
