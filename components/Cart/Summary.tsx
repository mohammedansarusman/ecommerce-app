"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import Link from "next/link";
import type { RootState } from "@/store/appStore";

const Summary = () => {
  const items = useSelector((store: RootState) => store.cart.item);
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const netTotal = totalAmount * 1.05;

  return (
    <div className="w-full px-4 lg:w-1/2 flex justify-center items-start">
      <div className="w-full bg-blue-500 mt-10 mb-10 lg:sticky lg:top-[200px] lg:z-40">
        {/* SUMMARY HEADING */}
        <h1 className="text-center mt-6 mb-6 text-white text-2xl font-bold">
          Summary
        </h1>
        <div className="w-full bg-blue-100 flex flex-col items-center gap-1 py-2">
          {/* SUB TOTAL */}
          <div className="w-4/5 h-[55px] flex justify-between items-center px-4">
            <p>Sub Total</p>
            <p>${+totalAmount.toFixed(2)}</p>
          </div>
          {/* VAT CALCULATION */}
          <div className="w-4/5 h-[55px] flex justify-between items-center px-4">
            <p>VAT</p>
            <p>${(+totalAmount * 0.05).toFixed(2)}</p>
          </div>
          {/* NET TOTAL  */}
          <div className="w-4/5 h-[55px] flex justify-between items-center px-4 font-bold">
            <p>Net Total</p>
            <p>${netTotal.toFixed(2)}</p>
          </div>
          <div className="w-4/5 h-[55px] flex justify-center items-center px-4 font-bold mb-5">
            <Link href="/sign-in">
              <Button className="bg-blue-600 text-white font-bold w-[200px] h-[50px]">
                Sign In to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Summary;
