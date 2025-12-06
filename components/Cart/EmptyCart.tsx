import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh]">
      <Image
        src={"/cart.svg"}
        alt="empty-image"
        width={400}
        height={400}
        className="object-cover mx-auto"
      />
      <h1 className="mt-8 text-2xl font-semibold">You Cart is Empty</h1>
      <Link href={"/"}>
        <Button className="mt-4">Shop Now</Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
