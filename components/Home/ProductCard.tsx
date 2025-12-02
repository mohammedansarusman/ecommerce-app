'use client'
import { Product } from "@/typing";
import Image from "next/image";
import { Heart, ShoppingBag, Star} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { setCart } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";




type Props = {
  product: Product;
};
const ProductCard = ({ product }: Props) => {

  const dispatch = useDispatch();
  const existingItem = useSelector((store) => store.cart.item);

  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);
  
  const handleAddCart = () =>{

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
  }

  return (
    <div className="p-4 flex flex-col items-center w-[200px]">
      {/* Product Image */}
      <div className="w-[200px] h-[150px] flex flex-col justify-center items-center bg-gray-200 rounded-md">
        <Image
          src={product.image}
          alt="product"
          width={0}
          height={0}
          sizes={"100vh"}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
      {/* Categoty */}
      <p className="mt-5 text-xs capitalize text-gray-600">
        {product.category}
      </p>
      {/* Product Title */}
      <Link href={`/product/product-details/${product.id}`}>
        <div className="flex justify-center items-center w-[200px] h-5 ">
          <h1
            className="font-semibold truncate leading-none hover:underline
       hover:text-blue-900 transition-all duration-1000 cursor-pointer text-sm lg:text-md"
          >
            {product.title}
          </h1>
        </div>
      </Link>

      {/* Rating  */}
      <div className="flex items-center">
        {ratingArray.map((star, index) => (
          <Star
            size={15}
            fill="orange"
            color="white"
            key={Math.random() * 1000}
          />
        ))}
      </div>
      {/* Price */}
      <div className="px-5 flex items-center w-[150px] space-x-2">
        <p className="line-through opacity-50">{`$${(
          product.price + 10
        ).toFixed(2)}`}</p>
        <p>{`$${product.price.toFixed(2)}`}</p>
      </div>
      {/* Button */}
      <div className="w-[200px] flex justify-evenly">
        <Button size={"icon"} onClick={handleAddCart}>
          <ShoppingBag />
        </Button>
        <Button size={"icon"} className="bg-red-500 text-white">
          <Heart color="white" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
