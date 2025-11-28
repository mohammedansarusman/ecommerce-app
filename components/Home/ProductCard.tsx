import React from "react";
import { Product } from "@/typing";
import Image from "next/image";
import { Heart, ShoppingBag, Star, StarIcon } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  product: Product;
};
const ProductCard = ({ product }: Props) => {
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);

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
      <div className="flex justify-center items-center w-[200px] h-5 ">
        <h1 className="font-semibold truncate leading-none hover:underline
       hover:text-blue-900 transition-all duration-1000 cursor-pointer text-sm lg:text-md">
        {product.title}
      </h1>
      </div>
      {/* Rating  */}
      <div className="flex items-center">
        {ratingArray.map((star,index)=><Star size={15} fill="orange" color="white" key={Math.random()*1000}/>)}
      </div>
      {/* Price */}
      <div className="px-5 flex items-center w-[150px] space-x-2">
        <p className="line-through opacity-50">{`$${(product.price+10).toFixed(2)}`}</p>
        <p>{`$${(product.price).toFixed(2)}`}</p>
      </div>
      {/* Button */}
      <div className="w-[200px] flex justify-evenly">
        <Button size={"icon"}>
          <ShoppingBag />
        </Button>
        <Button size={"icon"} className="bg-red-500 text-white">
          <Heart color="white"/>  
        </Button>
      </div>
      

    </div>
  );
};

export default ProductCard;
