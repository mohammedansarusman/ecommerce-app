export const dynamic = "force-dynamic";

import React from "react";
import { singleProduct } from "@/requests/request";
import { Star } from "lucide-react";
import Image from "next/image";
import AddToCart from "@/components/Cart/AddToCart";
const ProductId = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = await singleProduct(id);
  const { title, description, image, rating, category } = product;
  const num = Math.round(rating.rate);
  const ratingArray = new Array(num).fill(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto">
      {/* Products Image */}
      <div className="h-[calc(50vh-12vh)] flex justify-center items-center md:h-[calc(100vh-12vh)]">
        <Image
          src={image}
          alt={product.title}
          width={0}
          height={0}
          sizes="150vh"
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
      {/* Products description */}
      <div className="h-[calc(50vh-12vh)] md:h-[calc(100vh-12vh)] p-8 md:flex md:flex-col md:justify-center md:gap-5">
        {/* title */}
        <h1 className="font-semibold text-xl">{title}</h1>
        {/* rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {ratingArray.map((star) => (
              <Star
                size={15}
                fill="orange"
                color="white"
                key={Math.random() * 1000}
              />
            ))}
          </div>
          <p className="text-base text-gray-600">{rating.count} reviews</p>
        </div>
        {/* original rate and discounted rate */}
        <div className="flex w-[150px] space-x-2">
          <p className="line-through opacity-50">{`$${(
            product.price + 10
          ).toFixed(2)}`}</p>
          <p>{`$${product.price.toFixed(2)}`}</p>
        </div>
        {/* description */}
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm text-gray-500">{`Category:${' '}${category}`}</p>
        <AddToCart product = {product} />

      </div>
    </div>
  );
};

export default ProductId;
