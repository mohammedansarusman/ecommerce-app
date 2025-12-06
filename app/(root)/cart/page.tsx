"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Summary from "@/components/Cart/Summary";
import EmptyCart from "@/components/Cart/EmptyCart";
const CartPage = () => {
  const items = useSelector((store) => store.cart.item);
  //   total quantity
  const quantity = items.reduce((total, item) => total + item.quantity, 0);
  //  total amount = price * quantity
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  //
  const vat = (+totalAmount * 0.05).toFixed(2);
  const totalWithVat = (+totalAmount + +vat).toFixed(2);
  console.log("vat=>", totalWithVat);

  return (
    <div className={`mt-8 min-h-[60vh] flex flex-col lg:flex lg:flex-row lg:px-10 lg:gap-10 w-full  ${items.length===0 ? "justify-center" : "justify-between"} `}>
      {/*  if cart is empty */}
      {items.length === 0 && <EmptyCart />}
      {items.length > 0 && (
        <div className="w-full lg:w-1/2">
          {/* cart items */}
          <div className="bg-blue-400 max-w-full lg:max-w/1/2 text-center text-white text-2xl py-3">
            <h1>{`Your Cart (${items.length}) items`}</h1>
          </div>
          {/* carts summary */}
          {items.map((item) => (
            <div
              className="max-w-full lg:max-w-full mt-4 p-5 border-gray-400 border-b-[1.5px] flex gap-4 overflow-hidden"
              key={item.id}
            >
              <div className="w-[25%] h-[150px] flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="object-contain w-full h-[150px]"
                />
              </div>
              <div className="w-[75%] h-[150px] overflow-hidden">
                <h1 className="text-sm font-bold text-black md:text-sm lg:text-lg truncate">
                  {item.title}
                </h1>
                <h1 className="text-xs md:text-base font-semibold">
                  Category: {item.category}
                </h1>
                <h1 className="text-xl md:text-2xl font-bold text-blue-900">
                  ${item.price}
                </h1>
                <h1>Quantity: {item.quantity}</h1>
                <div className="flex w-full justify-start gap-4 mt-2">
                  <Button>Add more items</Button>
                  <Button variant={"destructive"}>Remove</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* summary of cart */}
      {items.length>0 && <Summary />}
    </div>
  );
};

export default CartPage;
