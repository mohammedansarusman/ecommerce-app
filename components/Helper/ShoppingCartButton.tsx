"use client";
import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import CartSideBar from "../Cart/CartSideBar";

const ShoppingCartButton = () => {
  const noOfItems = useSelector((store) => store.cart.item);
  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative w-6 h-6">
          <span className="absolute -top-3 -right-2 w-5 h-5 p-1 bg-red-400 text-white rounded-full flex items-center justify-center">
            {noOfItems.length}
          </span>
          <ShoppingBagIcon className="cursor-pointer size-6" />
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-auto h-full">
        <CartSideBar cartItems = {noOfItems}/>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartButton;
