"use client";
import { useSelector } from "react-redux";

const Summary = () => {
  const items = useSelector((store) => store.cart.item);
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const netTotal = totalAmount*1.05;
  return (
    <div className="w-full px-4 lg:w-1/2 flex justify-center items-start">
      <div className="w-full h-[200px] bg-blue-500 mt-10 mb-10 sticky top-[200px] bottom-0">
        <h1 className="text-center mt-6 mb-6 text-white text-2xl font-bold">Summary</h1>
        <div className="w-full bg-blue-100 flex flex-col items-center gap-1 py-2">
            <div className="w-4/5 h-[75px] flex justify-between items-center px-4">
              <p>Sub Total</p>
              <p>${+totalAmount.toFixed(2)}</p>
            </div>
            <div className="w-4/5 h-[75px] flex justify-between items-center px-4">
              <p>VAT</p>
              <p>${(+totalAmount*0.05).toFixed(2)}</p>
            </div>
            <div className="w-4/5 h-[75px] flex justify-between items-center px-4 font-bold">
                <p>Net Total</p>
              <p>${netTotal.toFixed(2)}</p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Summary;
